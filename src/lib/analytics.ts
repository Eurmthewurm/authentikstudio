// Analytics tracking utilities for quiz events

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
  }
}

// Debug function to verify pixel firing
export const debugPixelFiring = () => {
  if (typeof window !== 'undefined') {
    console.log('🔍 Pixel Debug Check:');
    console.log('- gtag available:', typeof window.gtag === 'function');
    console.log('- fbq available:', typeof window.fbq === 'function');
    console.log('- lintrk available:', typeof window.lintrk === 'function');
    
    // Test pixel firing
    if (typeof window.gtag === 'function') {
      console.log('✅ GA4 gtag is ready');
    }
    if (typeof window.fbq === 'function') {
      console.log('✅ Facebook Pixel is ready');
    }
    if (typeof window.lintrk === 'function') {
      console.log('✅ LinkedIn Insight Tag is ready');
    }
  }
};

// Google Analytics 4 event tracking
export const trackQuizEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'quiz',
      event_label: 'signal_dna_audit',
      ...parameters
    });
  }
};

// Facebook Pixel event tracking
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// LinkedIn Insight Tag event tracking
export const trackLinkedInEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: eventName });
  }
};

// Quiz-specific tracking functions
export const trackQuizStarted = () => {
  console.log('🎯 Tracking: Quiz Started');
  trackQuizEvent('quiz_started', {
    quiz_type: 'signal_dna_audit',
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('Lead', {
    content_name: 'Signal DNA Audit Started'
  });
  trackLinkedInEvent('quiz_started');
};

export const trackQuizCompleted = (score: number, archetype: string) => {
  console.log('🎯 Tracking: Quiz Completed', { score, archetype });
  trackQuizEvent('quiz_completed', {
    quiz_type: 'signal_dna_audit',
    score: score,
    max_score: 24,
    archetype: archetype,
    completion_time: Date.now() - (window as any).quizStartTime,
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('CompleteRegistration', {
    content_name: 'Signal DNA Audit Completed',
    value: score,
    currency: 'EUR'
  });
  trackLinkedInEvent('quiz_completed');
};

export const trackQuestionAnswered = (questionNumber: number, questionId: string, answerIndex: number) => {
  trackQuizEvent('question_answered', {
    quiz_type: 'signal_dna_audit',
    question_number: questionNumber,
    question_id: questionId,
    answer_index: answerIndex,
    timestamp: new Date().toISOString()
  });
};

export const trackQuizAbandoned = (questionNumber: number) => {
  trackQuizEvent('quiz_abandoned', {
    quiz_type: 'signal_dna_audit',
    question_number: questionNumber,
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('quiz_abandoned', {
    content_name: 'Signal DNA Audit Abandoned',
    value: questionNumber
  });
};

export const trackEmailCapture = (email: string, source: string = 'quiz_completion') => {
  console.log('🎯 Tracking: Email Capture', { email: email.substring(0, 3) + '***', source });
  trackQuizEvent('email_capture', {
    email_source: source,
    quiz_type: 'signal_dna_audit',
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('Lead', {
    content_name: 'Signal DNA Email Capture',
    content_category: 'lead_generation'
  });
  trackLinkedInEvent('email_capture');
};

export const trackCTAClicked = (ctaType: 'calendar_call' | 'calendar_call_hot' | 'retake_quiz' | 'hero_cta' | 'final_cta' | 'ebook_download') => {
  console.log('🎯 Tracking: CTA Clicked', { ctaType });
  trackQuizEvent('cta_clicked', {
    cta_type: ctaType,
    quiz_type: 'signal_dna_audit',
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('Lead', {
    content_name: `CTA Clicked: ${ctaType}`,
    content_category: 'conversion'
  });
  trackLinkedInEvent('cta_clicked');
};

export const trackPageView = (pageName: string) => {
  trackQuizEvent('page_view', {
    page_name: pageName,
    timestamp: new Date().toISOString()
  });
  trackFacebookEvent('PageView', {
    content_name: pageName
  });
};

// UTM parameter tracking
export const getUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_content: urlParams.get('utm_content'),
    utm_term: urlParams.get('utm_term')
  };
};

export const trackUTMSource = () => {
  const utmParams = getUTMParameters();
  if (Object.values(utmParams).some(param => param !== null)) {
    trackQuizEvent('utm_source_detected', utmParams);
  }
};
