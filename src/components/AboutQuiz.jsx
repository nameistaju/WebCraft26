import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const QUESTIONS = [
  {
    q: 'What does SEO stand for?',
    o: [
      'Social Engagement Optimization',
      'Search Engine Optimization',
      'Site Evaluation Operations',
      'Search Entry Overview',
    ],
    a: 1,
    why: 'SEO is the practice of improving your site so it ranks higher in unpaid search results.',
  },
  {
    q: 'A visitor arrives from an unpaid Google result. What kind of traffic is that?',
    o: ['Paid traffic', 'Referral traffic', 'Organic traffic', 'Direct traffic'],
    a: 2,
    why: 'Organic traffic comes from unpaid search results. You earn it with content and SEO, not ad spend.',
  },
  {
    q: 'In online advertising, what does CTR measure?',
    o: [
      'The share of people who click after seeing your ad',
      'The cost of each sale',
      'How long people stay on your site',
      'The number of ads you run',
    ],
    a: 0,
    why: 'Click-through rate is clicks divided by impressions. A higher CTR usually means your ad is relevant.',
  },
  {
    q: 'What is the main job of a landing page?',
    o: [
      'Show every product you sell',
      'Tell the full company history',
      'Get visitors to take one specific action',
      'Link to as many pages as possible',
    ],
    a: 2,
    why: 'The best landing pages focus on a single goal, such as a sign-up or a booking, and remove distractions.',
  },
  {
    q: 'What does a high bounce rate usually tell you?',
    o: [
      'Visitors leave after viewing only one page',
      'Visitors are buying more',
      'Your emails are being opened',
      'Your site loads very fast',
    ],
    a: 0,
    why: 'Bounce rate is the share of visits that end after one page. It can point to a mismatch between the ad or search result and the page.',
  },
  {
    q: 'What is A/B testing?',
    o: [
      'Running two ad budgets at once',
      'Comparing two versions of something to see which performs better',
      'Testing your site on two browsers',
      'Ranking your two best keywords',
    ],
    a: 1,
    why: 'In an A/B test, half your audience sees version A and half sees version B, so you can keep the winner.',
  },
];

const LEVELS = [
  {
    min: 0,
    name: 'Getting started',
    text: 'You’re at the start of the journey, and that’s a good place to be. A few core ideas will move you quickly.',
    tips: [
      'Learn how SEO, paid ads, and email work together.',
      'Pick one channel and track one number for 30 days.',
      'Read your site’s analytics weekly.',
    ],
  },
  {
    min: 3,
    name: 'Rising marketer',
    text: 'You know the basics. Now it’s about turning that knowledge into steady, measurable results.',
    tips: [
      'Set one clear goal for every landing page.',
      'Start a simple A/B test on your main headline.',
      'Review your bounce rate on top pages.',
    ],
  },
  {
    min: 5,
    name: 'Skilled strategist',
    text: 'You clearly understand how the pieces fit. Fine-tuning and testing will unlock your next level of growth.',
    tips: [
      'Build a testing calendar for the next quarter.',
      'Connect ad data to actual sales, not just clicks.',
      'Look for pages with high traffic and low conversions.',
    ],
  },
  {
    min: 6,
    name: 'Digital marketing pro',
    text: 'Perfect score. You know your stuff. The best use of your time now is scaling what already works.',
    tips: [
      'Document your top-performing campaigns.',
      'Test new channels with small budgets.',
      'Automate reporting so you can focus on strategy.',
    ],
  },
];

const LETTERS = ['A', 'B', 'C', 'D'];

export default function AboutQuiz({ onOpenContact }) {
  const [step, setStep] = useState('start'); // 'start' | 'quiz' | 'gate' | 'result'
  const [cur, setCur] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');

  const clickSoundRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const lottieAnimRef = useRef(null);

  useEffect(() => {
    try {
      clickSoundRef.current = new Audio('/assets/quiz/Button clicks.mp3');
    } catch {}
  }, []);

  const playClick = () => {
    if (clickSoundRef.current) {
      try {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(() => {});
      } catch {}
    }
  };

  // Load Lottie when result displays
  useEffect(() => {
    if (step === 'result' && lottieContainerRef.current) {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy();
      }
      try {
        lottieAnimRef.current = lottie.loadAnimation({
          container: lottieContainerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/assets/quiz/Gift Reward Animation.json',
        });
      } catch (err) {
        console.warn('Lottie quiz load notice:', err);
      }
    }
    return () => {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy();
        lottieAnimRef.current = null;
      }
    };
  }, [step]);

  const handleStart = () => {
    playClick();
    setCur(0);
    setScore(0);
    setAnswered(false);
    setSelectedIdx(null);
    setStep('quiz');
  };

  const handleChoose = (idx) => {
    if (answered) return;
    playClick();
    setAnswered(true);
    setSelectedIdx(idx);

    if (idx === QUESTIONS[cur].a) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    playClick();
    if (cur < QUESTIONS.length - 1) {
      setCur((c) => c + 1);
      setAnswered(false);
      setSelectedIdx(null);
    } else {
      setStep('gate');
    }
  };

  const handleShowResult = (e) => {
    e.preventDefault();
    playClick();
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please enter a valid work email.');
      return;
    }
    setFormError('');
    setStep('result');
  };

  const handleSkipGate = () => {
    playClick();
    setName('Friend');
    setStep('result');
  };

  const handleReset = () => {
    playClick();
    setName('');
    setEmail('');
    setFormError('');
    setStep('start');
  };

  const currentQ = QUESTIONS[cur];
  const progressPercent = ((cur + (answered ? 1 : 0)) / QUESTIONS.length) * 100;

  // Calculate level
  let currentLevel = LEVELS[0];
  LEVELS.forEach((lvl) => {
    if (score >= lvl.min) currentLevel = lvl;
  });

  return (
    <section className="relative z-10 w-full bg-[#F8EEE8] py-20 md:py-32 px-4 sm:px-8 border-t border-black/10 overflow-hidden">
      {/* Subtle Neo-Retro Grid Texture Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(#d3c3bf 1px, transparent 1px), linear-gradient(90deg, #d3c3bf 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Playful Sticker Badge Title */}
        <div className="inline-flex items-center justify-center gap-2 transform -rotate-3 mb-5 select-none">
          <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight [-webkit-text-stroke:2px_#111] drop-shadow-[4px_4px_0px_#0576fc]">
            QUIZ
          </span>
          <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#f6cf5a] border-3 border-[#111] flex items-center justify-center font-display font-black text-2xl sm:text-3xl text-[#111] shadow-[2px_2px_0px_#111]">
            ?
          </span>
          <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight [-webkit-text-stroke:2px_#111] drop-shadow-[4px_4px_0px_#0576fc]">
            TIME
          </span>
        </div>

        {/* Tilted Topic Pills */}
        <div className="flex justify-center flex-wrap gap-2.5 sm:gap-3 mb-8 select-none">
          <span className="border-2.5 border-[#111] rounded-full px-4 py-1.5 bg-[#f6cf5a] text-[#111] font-display font-bold text-xs sm:text-sm transform -rotate-4 shadow-[2px_2px_0px_#111]">
            SEO
          </span>
          <span className="border-2.5 border-[#111] rounded-full px-4 py-1.5 bg-[#9fdce6] text-[#111] font-display font-bold text-xs sm:text-sm transform rotate-3 shadow-[2px_2px_0px_#111]">
            ADS
          </span>
          <span className="border-2.5 border-[#111] rounded-full px-4 py-1.5 bg-[#a7e07a] text-[#111] font-display font-bold text-xs sm:text-sm transform -rotate-2 shadow-[2px_2px_0px_#111]">
            CTR
          </span>
          <span className="border-2.5 border-[#111] rounded-full px-4 py-1.5 bg-[#d6a9e0] text-[#111] font-display font-bold text-xs sm:text-sm transform rotate-4 shadow-[2px_2px_0px_#111]">
            A/B
          </span>
        </div>

        {/* STEP 1: START SCREEN */}
        {step === 'start' && (
          <div className="w-full bg-[#fbf8e8] border-3 border-[#111] rounded-[28px] p-7 sm:p-10 shadow-[0_12px_0_#0576fc,0_12px_0_3px_#111] flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111] mb-3 leading-snug">
              How well do you know digital marketing?
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Six quick questions on SEO, ads, and conversions. Test your knowledge to get your score and actionable agency tips.
            </p>
            <button
              onClick={handleStart}
              className="cursor-pointer w-full max-w-sm py-4 rounded-full bg-[#f6cf5a] hover:bg-[#ebd54c] text-[#111] font-display font-extrabold text-base sm:text-lg border-3 border-[#111] shadow-[-4px_7px_0px_#111] hover:translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[-2px] active:translate-y-[4px] active:shadow-[-1px_2px_0px_#111] transition-all"
            >
              Start the Quiz &rarr;
            </button>
          </div>
        )}

        {/* STEP 2: QUIZ QUESTIONS */}
        {step === 'quiz' && (
          <div className="w-full flex flex-col items-center">
            {/* Chunky Progress Meter Bar */}
            <div className="w-full max-w-md h-5 border-3 border-[#111] rounded-full bg-white overflow-hidden mb-2 shadow-[2px_2px_0px_#111]">
              <div
                className="h-full bg-[#0576fc] border-r-3 border-[#111] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="font-display font-bold text-xs sm:text-sm text-[#111] mb-5 tracking-wide">
              Question {cur + 1} of {QUESTIONS.length}
            </p>

            {/* Question Card */}
            <div className="w-full bg-[#fbf8e8] border-3 border-[#111] rounded-[24px] p-6 sm:p-8 shadow-[0_10px_0_#0576fc,0_10px_0_3px_#111] mb-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111] leading-snug">
                {currentQ.q}
              </h3>
            </div>

            {/* Options List */}
            <div className="w-full max-w-md flex flex-col gap-3.5 mb-6">
              {currentQ.o.map((optText, i) => {
                const isSelected = selectedIdx === i;
                const isCorrect = i === currentQ.a;

                let optBg = 'bg-white hover:bg-[#d6a9e0]/40';
                let mark = null;

                if (answered) {
                  if (isCorrect) {
                    optBg = 'bg-[#a7e07a] text-[#111] !border-[#111]';
                    mark = '✓';
                  } else if (isSelected) {
                    optBg = 'bg-[#ff9aa8] text-[#111] !border-[#111]';
                    mark = '✗';
                  } else {
                    optBg = 'bg-white/70 opacity-60';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleChoose(i)}
                    disabled={answered}
                    className={`relative w-full py-3.5 px-6 rounded-full border-3 border-[#111] font-sans font-semibold text-sm sm:text-base text-left shadow-[-4px_6px_0px_#111] transition-all duration-150 cursor-pointer disabled:cursor-default ${optBg} ${
                      !answered ? 'hover:-translate-y-0.5 active:translate-x-[-2px] active:translate-y-[4px] active:shadow-[-1px_2px_0px_#111]' : ''
                    }`}
                  >
                    <span className="font-display font-bold mr-2 text-[#0576fc]">
                      {LETTERS[i]})
                    </span>
                    {optText}
                    {mark && (
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 font-display font-black text-lg">
                        {mark}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation */}
            {answered && (
              <div className="w-full max-w-md bg-white border-3 border-[#111] rounded-2xl p-4 sm:p-5 text-left mb-6 shadow-[3px_3px_0px_#111] animate-fade-in">
                <p className="font-sans text-xs sm:text-sm text-[#111] leading-relaxed mb-4">
                  <strong className={selectedIdx === currentQ.a ? 'text-[#0576fc]' : 'text-red-600'}>
                    {selectedIdx === currentQ.a ? 'Correct! ' : 'Not quite. '}
                  </strong>
                  {currentQ.why}
                </p>
                <button
                  onClick={handleNext}
                  className="cursor-pointer w-full py-3 rounded-full bg-[#f6cf5a] hover:bg-[#ebd54c] text-[#111] font-display font-extrabold text-sm border-2.5 border-[#111] shadow-[-3px_5px_0px_#111] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
                >
                  {cur === QUESTIONS.length - 1 ? 'See My Score &rarr;' : 'Next Question &rarr;'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: LEAD GATE SCREEN */}
        {step === 'gate' && (
          <div className="w-full bg-[#fbf8e8] border-3 border-[#111] rounded-[28px] p-7 sm:p-10 shadow-[0_12px_0_#0576fc,0_12px_0_3px_#111] flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111] mb-2 leading-snug">
              Your score is ready!
            </h2>
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
              Enter your details to view your scorecard and unlock customized recommendations.
            </p>

            <form onSubmit={handleShowResult} className="w-full max-w-sm flex flex-col gap-3.5 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111] mb-1.5 pl-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  className="w-full py-3 px-5 rounded-full bg-white border-2.5 border-[#111] font-sans font-medium text-sm text-[#111] shadow-[-3px_4px_0px_#111] outline-none focus:border-[#0576fc]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111] mb-1.5 pl-3">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full py-3 px-5 rounded-full bg-white border-2.5 border-[#111] font-sans font-medium text-sm text-[#111] shadow-[-3px_4px_0px_#111] outline-none focus:border-[#0576fc]"
                />
              </div>

              {formError && (
                <p className="text-xs font-bold text-red-600 text-center mt-1">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="cursor-pointer mt-3 w-full py-3.5 rounded-full bg-[#f6cf5a] hover:bg-[#ebd54c] text-[#111] font-display font-extrabold text-sm sm:text-base border-2.5 border-[#111] shadow-[-3px_5px_0px_#111] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                Show My Result &rarr;
              </button>

              <button
                type="button"
                onClick={handleSkipGate}
                className="cursor-pointer text-xs font-semibold text-black/50 hover:text-black underline text-center mt-1"
              >
                Skip and view result directly
              </button>
            </form>
          </div>
        )}

        {/* STEP 4: RESULT SCREEN */}
        {step === 'result' && (
          <div className="w-full bg-[#fbf8e8] border-3 border-[#111] rounded-[28px] p-7 sm:p-10 shadow-[0_12px_0_#0576fc,0_12px_0_3px_#111] flex flex-col items-center">
            {/* Lottie Victory Celebration */}
            <div className="w-28 h-28 -mt-2 mb-1">
              <div ref={lottieContainerRef} className="w-full h-full" />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-black/60 mb-1">
              {name ? `Thanks, ${name}! Here’s how you did:` : 'Here is your scorecard:'}
            </p>

            {/* Giant Bold Score */}
            <div className="font-display font-black text-6xl sm:text-7xl text-white uppercase tracking-tight [-webkit-text-stroke:3px_#111] drop-shadow-[5px_5px_0px_#0576fc] leading-none my-2 select-none">
              {score}
              <small className="text-3xl sm:text-4xl drop-shadow-[3px_3px_0px_#0576fc]">
                /6
              </small>
            </div>

            {/* Level Badge */}
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0576fc] uppercase tracking-tight mt-1 mb-2">
              {currentLevel.name}
            </h3>
            <p className="text-black/75 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              {currentLevel.text}
            </p>

            {/* Actionable Tips List */}
            <div className="w-full max-w-md flex flex-col gap-2.5 mb-7 text-left">
              {currentLevel.tips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-[#111] rounded-2xl px-4 py-3 text-xs sm:text-sm text-[#111] shadow-[2px_2px_0px_#111] flex items-start gap-2.5"
                >
                  <span className="text-[#0576fc] font-bold">💡</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>

            {/* Free Website Audit Offer Box */}
            <div className="w-full max-w-md bg-[#f6cf5a] text-[#111] border-3 border-[#111] rounded-2xl p-5 mb-5 transform -rotate-1 shadow-[-4px_6px_0px_#111]">
              <h4 className="font-display font-extrabold text-base sm:text-lg mb-1">
                Get a Free Website &amp; Brand Audit
              </h4>
              <p className="font-sans text-xs sm:text-sm leading-snug mb-4 text-[#111]/85">
                We’ll review your SEO, digital ads, and landing page conversions and send you 3 quick wins.
              </p>
              <button
                onClick={() => {
                  playClick();
                  if (onOpenContact) onOpenContact();
                }}
                className="cursor-pointer w-full py-3 rounded-full bg-white hover:bg-black/5 text-[#111] font-display font-bold text-xs sm:text-sm border-2 border-[#111] shadow-[-3px_4px_0px_#111] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                Book My Free Audit &rarr;
              </button>
            </div>

            {/* Retake Button */}
            <button
              onClick={handleReset}
              className="cursor-pointer font-sans font-semibold text-xs sm:text-sm text-black/60 hover:text-black underline transition-colors"
            >
              Take the quiz again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
