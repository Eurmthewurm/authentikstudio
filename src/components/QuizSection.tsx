import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Download, Star } from 'lucide-react';
import { trackQuizStarted, trackQuizCompleted, trackCTAClicked, trackUTMSource, debugPixelFiring, trackQuestionAnswered, trackEmailCapture } from '@/lib/analytics';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  weights: number[];
  archetypeWeights: number[][]; // [option][archetype] weights for all 6 archetypes
}

interface ArchetypeScore {
  name: string;
  score: number;
  percentage: number;
}

interface QuizResult {
  primaryArchetype: string;
  secondaryArchetype?: string;
  isHybrid: boolean;
  signalStrength: number;
  archetypeScores: ArchetypeScore[];
  confidence: number;
  needsRetake: boolean;
  originalPrimary: string;
}

/*
Archetype Mapping Across Quiz Questions:
Each question has 4 options, ensuring all 6 archetypes are represented:

Question 1 (Investor Pitching):
- Builder/Guardian: Heavy on data
- Strategist: Strategic mix of data and foresight  
- Visionary/Trailblazer: Vision-focused
- Connector: Story-driven impact that builds relationships

Question 2 (Customer Conversations):
- Builder/Trailblazer: Technical features and capabilities
- Strategist/Guardian: ROI and business outcomes
- Visionary: The problem we solve and why it matters
- Connector: Personal transformation stories

Question 3 (Team Communication):
- Builder/Strategist: Detailed roadmaps and strategic plans
- Guardian: Data-driven goals and KPIs
- Visionary/Connector: Customer success stories
- Trailblazer: Personal mission and values alignment

Question 4 (Media Pitching):
- Trailblazer/Strategist: Market disruption and competitive advantage
- Builder: Innovation and technology breakthrough
- Visionary/Connector: Founder journey and personal story
- Guardian: Customer impact and social change

Question 5 (Brand Differentiation):
- Builder/Trailblazer: Unique technology or approach
- Strategist/Guardian: Specific results we deliver
- Visionary: Founder story and mission
- Connector: Emotional transformation we create

Question 6 (Decision Influence):
- Builder/Strategist: Concrete proof of results and ROI
- Guardian: Trust in expertise and track record
- Visionary: Connection to mission and values
- Connector/Trailblazer: Emotional resonance with story
*/

const quizQuestions: QuizQuestion[] = [
  {
    id: 'investor_pitch_style',
    question: 'When pitching to investors, do we focus more on data and metrics or on vision and impact?',
    options: [
      'Heavy on data - We lead with revenue, growth metrics, and market size', // Builder/Guardian
      'Strategic mix of data and foresight - We present logical frameworks with clear next steps', // Strategist
      'Vision-focused - We start with bold future possibilities and our mission', // Visionary/Trailblazer
      'Story-driven impact that builds relationships - We focus on customer transformation and community' // Connector
    ],
    weights: [2, 4, 3, 4],
    archetypeWeights: [
      [2, 0, 0, 1, 2, 0], // Builder, Guardian, Strategist, Connector, Visionary, Trailblazer
      [0, 0, 3, 1, 0, 0], // Strategic approach
      [0, 0, 0, 0, 3, 2], // Vision-focused
      [0, 0, 0, 3, 1, 0]  // Story-driven
    ]
  },
  {
    id: 'customer_conversation',
    question: 'In customer conversations, what gets people most excited about our product?',
    options: [
      'Technical features and capabilities - We showcase our unique approach and innovation', // Builder/Trailblazer
      'ROI and business outcomes - We demonstrate concrete value and measurable results', // Strategist/Guardian
      'The problem we solve and why it matters - We connect to their deeper mission and purpose', // Visionary
      'Personal transformation stories from other customers - We build relationships through shared experiences' // Connector
    ],
    weights: [2, 3, 4, 4],
    archetypeWeights: [
      [2, 0, 0, 0, 0, 2], // Technical features - Builder, Trailblazer
      [0, 1, 3, 0, 0, 0], // ROI focus - Guardian, Strategist
      [0, 0, 0, 0, 3, 1], // Problem/solution - Visionary, Trailblazer
      [0, 0, 0, 3, 1, 0]  // Personal stories - Connector, Visionary
    ]
  },
  {
    id: 'team_communication',
    question: 'When rallying our team, how do we typically communicate our vision?',
    options: [
      'Through detailed roadmaps and strategic plans - We provide clear structure and execution paths', // Builder/Strategist
      'Using data-driven goals and KPIs - We focus on measurable outcomes and accountability', // Guardian
      'By sharing customer success stories - We inspire through real impact and transformation', // Visionary/Connector
      'Through personal mission and values alignment - We connect individual purpose to collective goals' // Trailblazer
    ],
    weights: [2, 3, 4, 4],
    archetypeWeights: [
      [2, 0, 2, 0, 0, 0], // Roadmaps - Builder, Strategist
      [0, 3, 1, 0, 0, 0], // KPIs - Guardian, Strategist
      [0, 0, 0, 2, 2, 0], // Success stories - Connector, Visionary
      [0, 0, 0, 0, 1, 3]  // Mission/values - Visionary, Trailblazer
    ]
  },
  {
    id: 'media_pitch',
    question: 'When pitching to media, what angle resonates most with journalists?',
    options: [
      'Market disruption and competitive advantage - We position as industry challengers with clear differentiation', // Trailblazer/Strategist
      'Innovation and technology breakthrough - We showcase cutting-edge solutions and technical excellence', // Builder
      'Founder journey and personal story - We share authentic experiences and mission-driven leadership', // Visionary/Connector
      'Customer impact and social change - We highlight real-world transformation and community benefit' // Guardian
    ],
    weights: [3, 3, 4, 4],
    archetypeWeights: [
      [0, 0, 2, 0, 0, 3], // Market disruption - Strategist, Trailblazer
      [3, 0, 0, 0, 0, 1], // Technology breakthrough - Builder, Trailblazer
      [0, 0, 0, 2, 2, 0], // Founder story - Connector, Visionary
      [0, 2, 0, 1, 1, 0]  // Social impact - Guardian, Connector, Visionary
    ]
  },
  {
    id: 'brand_differentiation',
    question: 'What makes our brand most memorable to people after first contact?',
    options: [
      'Our unique technology or approach - We stand out through innovative solutions and methods', // Builder/Trailblazer
      'The specific results we deliver - We are known for measurable outcomes and proven performance', // Strategist/Guardian
      'Our founder story and mission - We connect through authentic leadership and purpose-driven vision', // Visionary
      'The emotional transformation we create - We build lasting relationships through meaningful impact' // Connector
    ],
    weights: [3, 3, 4, 4],
    archetypeWeights: [
      [3, 0, 0, 0, 0, 2], // Technology/approach - Builder, Trailblazer
      [0, 1, 2, 0, 0, 0], // Results - Guardian, Strategist
      [0, 0, 0, 0, 3, 1], // Founder story - Visionary, Trailblazer
      [0, 0, 0, 3, 1, 0]  // Emotional transformation - Connector, Visionary
    ]
  },
  {
    id: 'decision_influence',
    question: 'What typically influences people to say "yes" to working with us?',
    options: [
      'Concrete proof of results and ROI - We demonstrate clear value and measurable outcomes', // Builder/Strategist
      'Trust in our expertise and track record - We build confidence through reliability and competence', // Guardian
      'Connection to our mission and values - We align on shared purpose and meaningful impact', // Visionary
      'Emotional resonance with our story - We create authentic relationships and personal connection' // Connector/Trailblazer
    ],
    weights: [3, 3, 4, 4],
    archetypeWeights: [
      [2, 0, 2, 0, 0, 0], // Proof/ROI - Builder, Strategist
      [0, 3, 1, 0, 0, 0], // Trust/expertise - Guardian, Strategist
      [0, 0, 0, 0, 3, 1], // Mission/values - Visionary, Trailblazer
      [0, 0, 0, 2, 1, 2]  // Emotional resonance - Connector, Visionary, Trailblazer
    ]
  }
];

// Archetype definitions
const ARCHETYPES = [
  { name: 'Builder', description: 'Earns trust through execution' },
  { name: 'Guardian', description: 'Reassures stakeholders with stability and trust' },
  { name: 'Strategist', description: 'Wins attention with clarity and foresight' },
  { name: 'Connector', description: 'Attracts allies through authentic relationships' },
  { name: 'Visionary', description: 'Inspires with bold, forward-thinking ideas' },
  { name: 'Trailblazer', description: 'Breaks norms, pioneering uncharted territory' }
];

// Comprehensive scoring engine
const calculateQuizResult = (answers: number[]): QuizResult => {
  // Initialize archetype scores
  const archetypeScores = ARCHETYPES.map(archetype => ({
    name: archetype.name,
    score: 0,
    percentage: 0
  }));

  // Calculate scores for each archetype based on answers
  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    question.archetypeWeights[answerIndex].forEach((weight, archetypeIndex) => {
      archetypeScores[archetypeIndex].score += weight;
    });
  });

  // Calculate percentages
  const maxPossibleScore = answers.length * 3; // Maximum weight per question is 3
  archetypeScores.forEach(score => {
    score.percentage = Math.round((score.score / maxPossibleScore) * 100);
  });

  // Sort by score (highest first)
  archetypeScores.sort((a, b) => b.score - a.score);

  // Determine primary archetype
  const primary = archetypeScores[0];
  const secondary = archetypeScores[1];

  // Check for hybrid profile (scores within 10% of each other)
  const isHybrid = (primary.score - secondary.score) <= (primary.score * 0.1);

  // Calculate confidence (how much the primary archetype stands out)
  const totalScore = archetypeScores.reduce((sum, score) => sum + score.score, 0);
  const confidence = Math.round((primary.score / totalScore) * 100);

  // Apply minimum confidence threshold (60%)
  // If confidence is below 60%, default to Strategist and suggest retaking
  const finalPrimary = confidence >= 60 ? primary : archetypeScores.find(s => s.name === 'Strategist') || primary;
  const needsRetake = confidence < 60;

  // Calculate signal strength (separate from archetype scoring)
  const signalStrength = answers.reduce((sum, answerIndex, questionIndex) => {
    return sum + quizQuestions[questionIndex].weights[answerIndex];
  }, 0);

  return {
    primaryArchetype: finalPrimary.name,
    secondaryArchetype: isHybrid ? secondary.name : undefined,
    isHybrid: isHybrid && confidence >= 60,
    signalStrength,
    archetypeScores,
    confidence,
    needsRetake,
    originalPrimary: primary.name // Keep track of original for debugging
  };
};

// Validation and testing framework
const validateQuizAccuracy = () => {
  // Test cases for known archetype patterns
  const testCases = [
    {
      name: 'Pure Builder',
      answers: [0, 0, 0, 1, 0, 0], // All Builder-focused answers
      expectedArchetype: 'Builder'
    },
    {
      name: 'Pure Strategist', 
      answers: [1, 1, 0, 0, 1, 0], // All Strategist-focused answers
      expectedArchetype: 'Strategist'
    },
    {
      name: 'Pure Visionary',
      answers: [2, 2, 2, 2, 2, 2], // All Visionary-focused answers
      expectedArchetype: 'Visionary'
    },
    {
      name: 'Hybrid Builder-Strategist',
      answers: [0, 1, 0, 0, 1, 0], // Mix of Builder and Strategist
      expectedArchetype: 'Builder' // Should be Builder with high Strategist
    }
  ];

  const results = testCases.map(testCase => {
    const result = calculateQuizResult(testCase.answers);
    return {
      ...testCase,
      actualArchetype: result.primaryArchetype,
      confidence: result.confidence,
      isCorrect: result.primaryArchetype === testCase.expectedArchetype,
      needsRetake: result.needsRetake
    };
  });

  const accuracy = results.filter(r => r.isCorrect).length / results.length;
  
  console.log('🧪 Quiz Validation Results:', {
    accuracy: Math.round(accuracy * 100) + '%',
    results: results.map(r => ({
      test: r.name,
      expected: r.expectedArchetype,
      actual: r.actualArchetype,
      confidence: r.confidence + '%',
      correct: r.isCorrect,
      needsRetake: r.needsRetake
    }))
  });

  return accuracy >= 0.9; // Require 90% accuracy
};

// Run validation on component mount (development only)
if (process.env.NODE_ENV === 'development') {
  validateQuizAccuracy();
}

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
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showEbookModal, setShowEbookModal] = useState(false);
  const [ebookForm, setEbookForm] = useState({ name: '', email: '', consent: false });
  const [isEbookSubmitting, setIsEbookSubmitting] = useState(false);
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
      // Calculate comprehensive quiz result
      const result = calculateQuizResult(newAnswers);
      setQuizResult(result);
      setScore(result.signalStrength);
      setShowEmailForm(true);
      
      // Track quiz completion
      const scoreMessage = getScoreMessage(result.signalStrength);
      trackQuizCompleted(result.signalStrength, scoreMessage.title);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = getScoreMessage(score);
      
      console.log('Sending email via Resend...');
      console.log('Email target:', email);
      console.log('Quiz result:', { score, title: result.title, archetype: quizResult?.primaryArchetype });
      
      // Call our serverless function (Resend)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          score,
          result,
          archetype_name: quizResult?.primaryArchetype || result.title,
          signal_score: score,
          signal_level: score >= 18 ? 'HOT SIGNAL' : score >= 12 ? 'STRONG FOUNDATION' : 'ROOM TO GROW',
          is_hybrid: quizResult?.isHybrid || false,
          secondary_archetype: quizResult?.secondaryArchetype,
          confidence: quizResult?.confidence,
          needs_retake: quizResult?.needsRetake || false,
          original_primary: quizResult?.originalPrimary
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('✅ Email sent successfully via Resend!');
        console.log('Message ID:', data.messageId);
        trackEmailCapture(email, 'quiz_completion');
        setShowEmailForm(false);
        setShowResults(true);
        alert('✅ Email sent successfully! Check your inbox (and spam folder) for your Signal DNA report.');
      } else {
        console.error('❌ Email failed via Resend:', data.error);
        alert('Email delivery failed, but your results are ready! Check below for your Signal DNA report.');
        // Still show results even if email fails
        setShowEmailForm(false);
        setShowResults(true);
      }
      
    } catch (error) {
      console.error('Error calling serverless function:', error);
      alert('Email service temporarily unavailable, but your results are ready! Check below for your Signal DNA report.');
      // Still show results even if email fails
      setShowEmailForm(false);
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ebookForm.name || !ebookForm.email || !ebookForm.consent) return;
    
    setIsEbookSubmitting(true);
    
    try {
      // Track ebook download
      trackCTAClicked('ebook_download');
      
      // Send ebook request via Resend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: ebookForm.email,
          name: ebookForm.name,
          type: 'ebook_request',
          ebook_request: 'Premium Signal DNA Ebook',
          consent: ebookForm.consent
        }),
      });

      const data = await response.json();
      console.log('✅ Ebook request sent successfully via Resend!');
      console.log('Response:', data);
      
      // Auto-trigger PDF download
      const link = document.createElement('a');
      link.href = '/signal-DNA-ebook.pdf';
      link.download = 'Signal-DNA-Premium-Ebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Close modal
      setShowEbookModal(false);
      alert('Thank you! Your premium ebook is downloading now.');
      
    } catch (error) {
      console.error('Error submitting ebook form:', error);
      alert('There was an issue processing your request, but your ebook is still downloading.');
      
      // Still trigger download even if email fails
      const link = document.createElement('a');
      link.href = '/signal-DNA-ebook.pdf';
      link.download = 'Signal-DNA-Premium-Ebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setShowEbookModal(false);
    } finally {
      setIsEbookSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowEmailForm(false);
    setEmail('');
    setScore(0);
    setQuizResult(null);
  };

  if (showEmailForm) {
    const result = getScoreMessage(score);
    
    return (
      <section id="quiz" className="section-white container-clean text-foreground">
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
                  Get your custom archetype analysis, personalized scripts, and exact words that make your audience lean in.
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
                  <h4 className="font-semibold text-foreground mb-3">📧 Unlock Your Results</h4>
                  <p className="text-foreground/90 mb-6">
                    Enter your email to unlock your Founder Archetype result, your personalized 1-page blueprint, and the free workbook.
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    {/* Hidden fields for archetype data */}
                    <input type="hidden" name="archetype_name" value={quizResult?.primaryArchetype || result.title} />
                    <input type="hidden" name="signal_score" value={score} />
                    <input type="hidden" name="signal_level" value={score >= 18 ? 'HOT SIGNAL' : score >= 12 ? 'STRONG FOUNDATION' : 'ROOM TO GROW'} />
                    <input type="hidden" name="is_hybrid" value={quizResult?.isHybrid || false} />
                    <input type="hidden" name="secondary_archetype" value={quizResult?.secondaryArchetype || ''} />
                    <input type="hidden" name="confidence" value={quizResult?.confidence || 0} />
                    
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
      <section id="quiz" className="section-white container-clean text-foreground">
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

                {/* ARCHETYPE REVEAL */}
                <div className="archetype-reveal mb-6">
                  <div className="rounded-xl p-4" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.3)'}}>
                    <p className="text-lg font-bold mb-2" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                      <strong>Your Primary Archetype:</strong> {quizResult?.primaryArchetype || result.title}
                    </p>
                    {quizResult?.isHybrid && quizResult?.secondaryArchetype && (
                      <p className="text-md font-medium mb-2" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                        <strong>Hybrid Profile:</strong> {quizResult.primaryArchetype} + {quizResult.secondaryArchetype}
                      </p>
                    )}
                    <p className="teaser text-sm" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                      Reveal your {quizResult?.primaryArchetype || result.title} signature story elements inside.
                    </p>
                    {quizResult?.confidence && (
                      <p className="text-xs mt-2" style={{color: '#999999', fontFamily: 'Work Sans, sans-serif'}}>
                        Confidence: {quizResult.confidence}% • Signal Strength: {score}/24
                      </p>
                    )}
                    {quizResult?.needsRetake && (
                      <div className="mt-3 p-3 rounded-lg" style={{backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)'}}>
                        <p className="text-sm" style={{color: '#856404', fontFamily: 'Work Sans, sans-serif'}}>
                          ⚠️ Low confidence result ({quizResult.confidence}%). Consider retaking the quiz for more accurate results.
                        </p>
                      </div>
                    )}
                  </div>
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

              {/* PREMIUM EBOOK UPSELL */}
              <motion.div
                className="rounded-xl p-6 mb-8"
                style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '2px solid rgba(166, 124, 82, 0.3)'}}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6" style={{color: '#D4B37A'}} />
                    <h3 className="font-serif text-2xl font-bold" style={{color: '#A67C52'}}>Upgrade to Premium</h3>
                  </div>
                  <h4 className="font-bold text-xl mb-3" style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}>
                    Deep-Dive Signal DNA Ebook
                  </h4>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg mb-4" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                    Unlock two extra archetypes, hybrid profiles, and a 'Shadow Archetype' guide. Includes ready-to-use scripts for ultra-custom pitches.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Archetype Clarity Workshop</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Strengths Amplification Lab</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Blind Spot Diagnosis & Repair</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Signature Story Blueprint</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Hybrid Profile Mastery</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{backgroundColor: '#D4B37A'}}>
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Shadow Archetype Integration</h5>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={() => setShowEbookModal(true)}
                    className="px-8 py-4 text-lg font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    style={{backgroundColor: '#D4B37A', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A67C52'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D4B37A'}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Yes, I Want Premium Ebook
                  </Button>
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

      <section id="quiz" className="section-white container-clean text-foreground">
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
            Discover your unique communication archetype and get personalized scripts that make investors lean in, customers say yes, and top talent want to join your team.
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
                <span className="font-semibold">{currentQuestion + 1} of {quizQuestions.length} questions</span>
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

    {/* EBOOK MODAL */}
    <AnimatePresence>
      {showEbookModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-2" style={{color: '#111111'}}>
                  Premium Signal DNA Ebook
                </h3>
                <p className="text-sm" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                  Get instant access to the complete guide
                </p>
              </div>
              <button
                onClick={() => setShowEbookModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" style={{color: '#666666'}} />
              </button>
            </div>

            <form onSubmit={handleEbookSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  Full Name *
                </label>
                <input
                  type="text"
                  value={ebookForm.name}
                  onChange={(e) => setEbookForm({...ebookForm, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent"
                  style={{fontFamily: 'Work Sans, sans-serif'}}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  Email Address *
                </label>
                <input
                  type="email"
                  value={ebookForm.email}
                  onChange={(e) => setEbookForm({...ebookForm, email: e.target.value})}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent"
                  style={{fontFamily: 'Work Sans, sans-serif'}}
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={ebookForm.consent}
                  onChange={(e) => setEbookForm({...ebookForm, consent: e.target.checked})}
                  className="mt-1 w-4 h-4 text-champagne bg-gray-100 border-gray-300 rounded focus:ring-champagne focus:ring-2"
                  required
                />
                <label htmlFor="consent" className="text-sm" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>
                  I agree to receive the premium ebook and marketing communications from Authentik Studio. I can unsubscribe at any time.
                </label>
              </div>

              <Button
                type="submit"
                disabled={isEbookSubmitting}
                className="w-full py-4 text-lg font-bold transition-all duration-200"
                style={{backgroundColor: '#D4B37A', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif'}}
                onMouseEnter={(e) => !isEbookSubmitting && ((e.target as HTMLElement).style.backgroundColor = '#A67C52')}
                onMouseLeave={(e) => !isEbookSubmitting && ((e.target as HTMLElement).style.backgroundColor = '#D4B37A')}
              >
                {isEbookSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </>
                )}
              </Button>

              <p className="text-xs text-center" style={{color: '#999999', fontFamily: 'Work Sans, sans-serif'}}>
                🔒 Your information is secure and will never be shared
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

