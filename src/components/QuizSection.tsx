import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackQuizStarted, trackQuizCompleted, trackCTAClicked, trackUTMSource, debugPixelFiring, trackQuestionAnswered, trackEmailCapture } from '@/lib/analytics';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  weights: number[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'investor_pitch_style',
    question: 'When pitching to investors, do you focus more on data and metrics or on vision and impact?',
    options: [
      'Heavy on data - I lead with revenue, growth metrics, and market size',
      'Balanced approach - I mix compelling data with vision',
      'Vision-focused - I start with the problem and our mission',
      'Story-driven - I focus on customer impact and transformation'
    ],
    weights: [2, 4, 3, 4]
  },
  {
    id: 'customer_conversation',
    question: 'In customer conversations, what gets people most excited about your product?',
    options: [
      'Technical features and capabilities',
      'ROI and business outcomes',
      'The problem we solve and why it matters',
      'Personal transformation stories from other customers'
    ],
    weights: [2, 3, 4, 4]
  },
  {
    id: 'team_communication',
    question: 'When rallying your team, how do you typically communicate your vision?',
    options: [
      'Through detailed roadmaps and strategic plans',
      'Using data-driven goals and KPIs',
      'By sharing customer success stories',
      'Through personal mission and values alignment'
    ],
    weights: [2, 3, 4, 4]
  },
  {
    id: 'media_pitch',
    question: 'When pitching to media, what angle resonates most with journalists?',
    options: [
      'Market disruption and competitive advantage',
      'Innovation and technology breakthrough',
      'Founder journey and personal story',
      'Customer impact and social change'
    ],
    weights: [3, 3, 4, 4]
  },
  {
    id: 'brand_differentiation',
    question: 'What makes your brand most memorable to people after first contact?',
    options: [
      'Our unique technology or approach',
      'The specific results we deliver',
      'Our founder story and mission',
      'The emotional transformation we create'
    ],
    weights: [3, 3, 4, 4]
  },
  {
    id: 'decision_influence',
    question: 'What typically influences people to say "yes" to working with you?',
    options: [
      'Concrete proof of results and ROI',
      'Trust in our expertise and track record',
      'Connection to our mission and values',
      'Emotional resonance with our story'
    ],
    weights: [3, 3, 4, 4]
  }
];

const getScoreMessage = (score: number) => {
  if (score >= 22) {
    return {
      title: 'Signal Master',
      message: 'Your communication style is cutting through the noise brilliantly! You have a clear, memorable approach that resonates across all audiences.',
      recommendation: 'Consider scaling your communication framework to reach even more investors, customers, and team members.'
    };
  } else if (score >= 18) {
    return {
      title: 'Strong Signal',
      message: 'You have a solid communication foundation with good emotional connection. There\'s room to amplify your impact and memorability.',
      recommendation: 'Focus on strengthening your story-driven elements and differentiation to maximize your signal strength.'
    };
  } else if (score >= 14) {
    return {
      title: 'Signal Building',
      message: 'Your communication needs work to cut through effectively. The foundation is there, but clarity and emotional connection need improvement.',
      recommendation: 'Work on developing more story-driven communication and authentic voice to strengthen your signal.'
    };
  } else {
    return {
      title: 'Signal Development Needed',
      message: 'Your communication is getting lost in the noise. There\'s significant opportunity to transform your approach into a powerful, memorable signal.',
      recommendation: 'Complete communication overhaul needed - focus on authentic storytelling, emotional connection, and clear differentiation.'
    };
  }
};

export const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [score, setScore] = useState(0);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const mouseLeaveRef = useRef<NodeJS.Timeout | null>(null);

  // Track quiz start and UTM parameters on component mount
  useEffect(() => {
    debugPixelFiring(); // Debug pixel availability
    trackQuizStarted();
    trackUTMSource();
    // Set quiz start time for completion tracking
    (window as any).quizStartTime = Date.now();
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if user is moving to top of screen (exiting)
      if (e.clientY <= 0 && !showResults && currentQuestion > 0) {
        mouseLeaveRef.current = setTimeout(() => {
          setShowExitIntent(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (mouseLeaveRef.current) {
        clearTimeout(mouseLeaveRef.current);
        mouseLeaveRef.current = null;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (mouseLeaveRef.current) {
        clearTimeout(mouseLeaveRef.current);
      }
    };
  }, [showResults, currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    // Track question answered
    trackQuestionAnswered(currentQuestion + 1, quizQuestions[currentQuestion].id, answerIndex);
    
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const totalScore = newAnswers.reduce((sum, answerIndex, questionIndex) => {
        return sum + quizQuestions[questionIndex].weights[answerIndex];
      }, 0);
      setScore(totalScore);
      setShowEmailForm(true);
      
      // Track quiz completion
      const result = getScoreMessage(totalScore);
      trackQuizCompleted(totalScore, result.title);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = getScoreMessage(score);
      
      console.log('Sending email via serverless function...');
      console.log('Email target:', email);
      console.log('Quiz result:', { score, title: result.title });
      
      // Call our serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          score,
          result
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('✅ Email sent successfully via serverless function!');
        console.log('Message ID:', data.messageId);
        trackEmailCapture(email, 'quiz_completion');
        setShowEmailForm(false);
        setShowResults(true);
      } else {
        console.error('❌ Email failed via serverless function:', data.error);
        // Still show results even if email fails
        setShowEmailForm(false);
        setShowResults(true);
      }
      
    } catch (error) {
      console.error('Error calling serverless function:', error);
      // Still show results even if email fails
      setShowEmailForm(false);
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowEmailForm(false);
    setEmail('');
    setScore(0);
  };

  if (showEmailForm) {
    const result = getScoreMessage(score);
    
    return (
      <section id="free-audit" className="section-white container-clean text-foreground">
        <div className="content-clean text-center">
          <motion.div
            className="card-clean-lg p-6 sm:p-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  🎉 Quiz Complete!
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
              </div>

              {/* Enhanced Value Proposition */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  Your Personalized Signal DNA Report is Ready!
                </h3>
                <p className="text-foreground/90 mb-4">
                  Get your custom archetype analysis, personalized scripts, and exact words that make investors lean in.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Your Communication Archetype</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Personalized Pitch Scripts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Next Steps Guide</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-gradient-gold">
                  {result.title}
                </h3>
                
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {result.message}
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">📧 Get Your Full Signal DNA Report</h4>
                  <p className="text-foreground/90 mb-6">
                    Enter your email to receive your detailed archetype analysis, personalized scripts, and next steps.
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 text-lg rounded-xl border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[44px]"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="button-primary-clean px-8 py-4 text-lg font-semibold w-full min-h-[44px]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : '🚀 Get My Signal DNA Report'}
                      </Button>
                    </div>
                    
                    {/* Enhanced Privacy Reassurance */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-green-400">
                        <span className="flex items-center gap-1">
                          <span>🔒</span>
                          <span className="font-medium">100% Private & Secure</span>
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>No spam, ever</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Unsubscribe anytime</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const result = getScoreMessage(score);
    
    return (
      <section id="free-audit" className="section-white container-clean text-foreground">
        <div className="content-clean text-center">
          <motion.div
            className="card-clean-lg p-8 sm:p-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* HOT HEADER */}
              <div>
                <motion.div
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-6"
                  style={{backgroundColor: 'rgba(212, 179, 122, 0.1)', border: '1px solid rgba(212, 179, 122, 0.3)'}}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-2xl">🎉</span>
                  <span className="font-bold text-lg" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>REPORT DELIVERED!</span>
                </motion.div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" style={{color: '#111111'}}>
                  Your Signal DNA: <span style={{color: '#D4B37A'}}>{result.title}</span>
                </h2>
                
                <div className="rounded-xl p-4 mb-6" style={{backgroundColor: 'rgba(212, 179, 122, 0.1)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                  <p className="text-xl font-bold" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>
                    Score: {score}/24 • {score >= 18 ? '🔥 HOT SIGNAL' : score >= 12 ? '⚡ STRONG FOUNDATION' : '💪 ROOM TO GROW'}
                  </p>
                </div>
              </div>

              {/* URGENT INSIGHT */}
              <motion.div
                className="rounded-xl p-6 mb-8"
                style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.3)'}}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="font-serif text-2xl font-bold mb-4" style={{color: '#A67C52'}}>
                  🚨 Critical Insight About YOUR Communication
                </h3>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  {result.message}
                </p>
                <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                  <p className="font-medium" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                    <strong>Bottom Line:</strong> {result.recommendation}
                  </p>
                </div>
              </motion.div>

              {/* EMAIL CONFIRMATION */}
              <motion.div
                className="rounded-xl p-6 mb-8"
                style={{backgroundColor: 'rgba(212, 179, 122, 0.1)', border: '1px solid rgba(212, 179, 122, 0.2)'}}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h4 className="font-bold mb-2 text-xl" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>📧 Your Detailed Report is LIVE!</h4>
                <p className="mb-4" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  Check your inbox NOW for your personalized Signal DNA blueprint with exact scripts for your next investor pitch.
                </p>
                <div className="rounded-lg p-3" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.2)'}}>
                  <p className="text-sm font-medium" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                    ✨ Bonus: Founder Archetype Deep-Dive Workbook (€97 value) included
                  </p>
                </div>
              </motion.div>

              {/* TRANSFORMATION STORIES CAROUSEL */}
              <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="font-serif text-2xl font-bold mb-6 text-center" style={{color: '#111111'}}>
                  See 3 Real Founder Transformation Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📈</div>
                      <h4 className="font-bold" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>Before: Generic Pitch</h4>
                    </div>
                    <p className="text-sm italic mb-4" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                      "We're revolutionizing healthcare with AI-powered diagnostics..."
                    </p>
                    <div className="text-center">
                      <div className="text-3xl mb-2">✨</div>
                      <h4 className="font-bold" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>After: Signal DNA</h4>
                    </div>
                    <p className="text-sm font-medium" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                      "Imagine your grandmother getting personalized treatment at home instead of waiting 6 months for a specialist..."
                    </p>
                    <div className="mt-4 text-center">
                      <span className="text-white px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>
                        €2.3M Raised
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(166, 124, 82, 0.05)', border: '1px solid rgba(166, 124, 82, 0.2)'}}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📉</div>
                      <h4 className="font-bold" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>Before: Feature Focus</h4>
                    </div>
                    <p className="text-sm italic mb-4" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                      "Our platform has 47 integrations and 99.9% uptime..."
                    </p>
                    <div className="text-center">
                      <div className="text-3xl mb-2">✨</div>
                      <h4 className="font-bold" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>After: Impact Story</h4>
                    </div>
                    <p className="text-sm font-medium" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                      "Sarah saved 15 hours per week and launched her dream side business..."
                    </p>
                    <div className="mt-4 text-center">
                      <span className="text-white px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                        +183% Conversion
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📊</div>
                      <h4 className="font-bold" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>Before: Data Dump</h4>
                    </div>
                    <p className="text-sm italic mb-4" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                      "We have 10,000 users, 40% MoM growth, targeting a €50B market..."
                    </p>
                    <div className="text-center">
                      <div className="text-3xl mb-2">✨</div>
                      <h4 className="font-bold" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>After: Vision Story</h4>
                    </div>
                    <p className="text-sm font-medium" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                      "We're building the infrastructure for the next generation of conscious entrepreneurs..."
                    </p>
                    <div className="mt-4 text-center">
                      <span className="text-white px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>
                        €1.2M Raised
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-6 font-medium" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  <strong>Your archetype is just the start—book your free call for your personal pitch script.</strong>
                </p>
              </motion.div>

              {/* HOT CALL TO ACTION */}
              <motion.div
                className="rounded-xl p-8 mb-8"
                style={{backgroundColor: 'rgba(212, 179, 122, 0.1)', border: '2px solid rgba(212, 179, 122, 0.4)'}}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h4 className="font-bold mb-4 text-2xl" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>
                  🔥 HERE'S WHAT HAPPENS NEXT
                </h4>
                <p className="text-lg mb-6 leading-relaxed" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  Your report shows <strong>exactly</strong> what's holding you back. In 15 minutes, I'll show you how to turn your archetype into your biggest competitive advantage.
                </p>
                
                {/* URGENCY ELEMENTS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                    <p className="text-sm font-bold mb-1" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>⚡ IMMEDIATE IMPACT</p>
                    <p className="text-xs" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>Use your scripts in your next meeting</p>
                  </div>
                  <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                    <p className="text-sm font-bold mb-1" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>🎯 PERSONALIZED PLAN</p>
                    <p className="text-xs" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>Custom strategy for YOUR archetype</p>
                  </div>
                  <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.2)'}}>
                    <p className="text-sm font-bold mb-1" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>💰 ROI GUARANTEE</p>
                    <p className="text-xs" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>Better pitches = more funding</p>
                  </div>
                </div>

                {/* PRICING CONTEXT */}
                <div className="rounded-lg p-4 mb-6" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.2)'}}>
                  <p className="text-sm" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                    <strong>💡 Quick Math:</strong> Full Signal DNA Transformation = €2,500+ • This call = FREE • 
                    <span className="font-bold" style={{color: '#A67C52'}}> Your time investment = 15 minutes</span>
                  </p>
                </div>
                
                <Button
                  size="lg"
                  className="px-8 sm:px-12 py-6 text-xl font-bold w-full sm:w-auto transform hover:scale-105 transition-all duration-200"
                  style={{backgroundColor: '#D4B37A', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif'}}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A67C52'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D4B37A'}
                  onClick={() => {
                    trackCTAClicked('calendar_call_hot');
                    window.open('https://calendly.com/ermo/discoverycall', '_blank');
                  }}
                >
                  🔥 CLAIM YOUR FREE 15-MIN BREAKTHROUGH CALL
                </Button>
                
                <p className="text-xs mt-3" style={{color: '#999999', fontFamily: 'Work Sans, sans-serif'}}>
                  ⏰ Limited spots this week • Most founders see 3x improvement in pitch clarity
                </p>
              </motion.div>
                
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="button-secondary-clean px-6 sm:px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  onClick={() => {
                    trackCTAClicked('retake_quiz');
                    resetQuiz();
                  }}
                >
                  Retake Quiz
                </Button>
                <p className="text-sm text-foreground/60 text-center">
                  Want to explore a different communication style? Take the quiz again.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-background border border-border rounded-xl p-6 max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h3 className="text-xl font-bold mb-4">Wait! Don't miss out</h3>
            <p className="text-muted-foreground mb-6">
              It only takes 2 minutes—most founders finish 87% faster than expected. 
              You're {Math.round((currentQuestion / quizQuestions.length) * 100)}% done!
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowExitIntent(false)}
                className="flex-1"
              >
                I'll finish later
              </Button>
              <Button
                onClick={() => setShowExitIntent(false)}
                className="flex-1"
              >
                Continue Quiz
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <section id="free-audit" className="section-white container-clean text-foreground">
        <div className="content-clean">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <motion.h2 
              className="text-heading-clean text-gradient-gold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
              Free Signal DNA Audit
          </motion.h2>
          
          <p className="text-subheading-clean text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Discover your unique communication archetype and get personalized scripts that make investors lean in, customers say yes, and media take notice.
          </p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-primary">
              Get your custom scripts in under 120 seconds
            </p>
          </div>

          {/* Scarcity & Urgency */}
          <motion.div
            className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm font-medium text-amber-400">
              🎯 LIMITED TIME: First 100 founders get our exclusive Founder Archetype Deep-Dive Workbook (€97 value) when you complete by Friday
            </p>
          </motion.div>
          
          {/* Objection Handling */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xs text-foreground/70"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> No credit card required
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Zero spam guarantee
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✓</span> Results confidential
            </span>
          </motion.div>
          
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto"></div>
        </div>

        {/* Quiz content */}
        <motion.div
          className="card-clean-lg p-4 sm:p-6 md:p-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            {/* Progress bar */}
            <div className="space-y-3 sticky top-4 z-10 bg-background/95 backdrop-blur-sm py-2 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
              <div className="flex justify-between text-sm text-foreground/60">
                <span className="font-semibold">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
              {currentQuestion > 0 && (
                <p className="text-sm text-primary font-medium text-center">
                  Nice—{currentQuestion} down, {quizQuestions.length - currentQuestion} to go! 🚀
                </p>
              )}
              
              {/* Feedback Loop */}
              {currentQuestion > 0 && (
                <div className="bg-muted/30 border border-border/30 rounded-lg p-3 mt-4">
                  <p className="text-xs text-foreground/60 text-center">
                    Was this question clear? We're constantly improving based on your feedback.
                  </p>
                </div>
              )}
            </div>

            {/* Question */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {currentQuestion + 1}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-relaxed flex-1">
                  {quizQuestions[currentQuestion].question}
                </h3>
              </div>

              {/* Answer options */}
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="w-full p-4 sm:p-5 text-left border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[60px] sm:min-h-[70px] flex items-center touch-manipulation group relative overflow-hidden"
                    onClick={() => handleAnswer(index)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(251, 191, 36, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                    <span className="text-foreground/90 font-medium text-sm sm:text-base leading-relaxed relative z-10">{option}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

