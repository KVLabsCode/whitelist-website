'use client';

import { useState, useEffect } from 'react';

type AdFormat = 'inline' | 'followup' | 'card';

const formats = [
  { id: 'inline' as AdFormat, name: 'Inline Ads', description: 'Rich contextual ads within responses' },
  { id: 'followup' as AdFormat, name: 'Follow-up Questions', description: 'Sponsored question suggestions' },
  { id: 'card' as AdFormat, name: 'Card Format', description: 'Lead generation cards' },
];

export default function CarouselDemo() {
  const [activeFormat, setActiveFormat] = useState<AdFormat>('inline');
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Animation steps within each format
  useEffect(() => {
    if (!isAnimating) return;

    const timings = [1500, 1800, 1500, 2500];
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, timings[step]);

    return () => clearTimeout(timer);
  }, [step, isAnimating, activeFormat]);

  // Auto-play carousel (switch formats)
  useEffect(() => {
    if (!isAutoPlay) return;

    const carouselTimer = setTimeout(() => {
      const currentIndex = formats.findIndex(f => f.id === activeFormat);
      const nextIndex = (currentIndex + 1) % formats.length;
      setActiveFormat(formats[nextIndex].id);
      setStep(0);
    }, 12000); // Switch format every 12 seconds

    return () => clearTimeout(carouselTimer);
  }, [activeFormat, isAutoPlay]);

  const goToFormat = (format: AdFormat) => {
    setActiveFormat(format);
    setStep(0);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 15000); // Resume auto-play after 15s
  };

  const nextFormat = () => {
    const currentIndex = formats.findIndex(f => f.id === activeFormat);
    const nextIndex = (currentIndex + 1) % formats.length;
    goToFormat(formats[nextIndex].id);
  };

  const prevFormat = () => {
    const currentIndex = formats.findIndex(f => f.id === activeFormat);
    const prevIndex = (currentIndex - 1 + formats.length) % formats.length;
    goToFormat(formats[prevIndex].id);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Format Indicator */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-white">
            {formats.find(f => f.id === activeFormat)?.name}
          </span>
          <span className="text-xs text-gray-400">
            {formats.find(f => f.id === activeFormat)?.description}
          </span>
        </div>
      </div>

      {/* Demo Container */}
      <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

        {/* Navigation Arrows */}
        <button
          onClick={prevFormat}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Previous format"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextFormat}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Next format"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative z-10 space-y-6">
          {/* User Query */}
          <div
            className={`transition-all duration-500 ${
              step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div className="flex-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 backdrop-blur-sm">
                  <p className="text-gray-200 text-lg">
                    {activeFormat === 'inline' && 'What are the best running shoes for marathon training?'}
                    {activeFormat === 'followup' && 'How do I start learning web development?'}
                    {activeFormat === 'card' && 'What are the top productivity apps for 2024?'}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-2">User Query</p>
              </div>
            </div>
          </div>

          {/* Processing Indicator */}
          <div
            className={`transition-all duration-500 flex items-center gap-3 ml-14 ${
              step >= 1 && step < 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-sm text-gray-400">AI is thinking...</span>
          </div>

          {/* AI Response */}
          <div
            className={`transition-all duration-500 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-purple-500/30">
                AI
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl rounded-tl-none p-5 backdrop-blur-sm">
                  {activeFormat === 'inline' && (
                    <>
                      <p className="text-gray-200 leading-relaxed mb-4">
                        For marathon training, you'll want shoes with excellent cushioning and support. 
                        Here are the top recommendations:
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span><strong className="text-white">Nike ZoomX Vaporfly</strong> - Elite racing shoe with carbon plate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span><strong className="text-white">ASICS Gel-Nimbus 25</strong> - Maximum cushioning</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeFormat === 'followup' && (
                    <>
                      <p className="text-gray-200 leading-relaxed mb-4">
                        Great question! Here's a beginner-friendly roadmap for web development:
                      </p>
                      <ul className="space-y-2 text-gray-300 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">1.</span>
                          <span><strong className="text-white">HTML & CSS</strong> - Start with the fundamentals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">2.</span>
                          <span><strong className="text-white">JavaScript</strong> - Learn programming basics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">3.</span>
                          <span><strong className="text-white">React or Vue</strong> - Modern frameworks</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeFormat === 'card' && (
                    <>
                      <p className="text-gray-200 leading-relaxed mb-4">
                        Here are the top productivity apps that can help you stay organized and efficient:
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span><strong className="text-white">Notion</strong> - All-in-one workspace</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span><strong className="text-white">Todoist</strong> - Task management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">•</span>
                          <span><strong className="text-white">RescueTime</strong> - Time tracking</span>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-2">AI Response</p>
              </div>
            </div>
          </div>

          {/* Sponsored Ads - Different Formats */}
          <div
            className={`transition-all duration-500 ml-14 ${
              step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            {/* Inline Ad Format */}
            {activeFormat === 'inline' && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs font-semibold text-primary-300">
                      SPONSORED
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    Get 20% Off Running Shoes at FleetFeet
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Expert fitting, premium brands, and personalized gait analysis. Find your perfect marathon training shoe today.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">FleetFeet</div>
                        <div className="text-xs text-gray-500">fleetfeet.com</div>
                      </div>
                    </div>
                    
                    <button className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 group-hover:scale-105">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Follow-up Questions Format */}
            {activeFormat === 'followup' && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-400 mb-3">Related questions:</p>
                
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                  <button className="relative w-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-white font-medium mb-1">Best coding bootcamps for beginners?</div>
                        <div className="text-xs text-primary-400 font-semibold">SPONSORED • Codecademy</div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">What's the difference between frontend and backend?</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">How long does it take to learn JavaScript?</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Card Format */}
            {activeFormat === 'card' && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs font-semibold text-primary-300">
                        SPONSORED
                      </span>
                    </div>
                    
                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                          Notion - Your All-in-One Workspace
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Write, plan, collaborate, and get organized. Millions trust Notion for productivity.
                        </p>
                      </div>
                    </div>
                    
                    {/* Email Capture Form */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-300 mb-3 font-medium">
                        Get started with a free template
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all text-sm"
                          onClick={(e) => e.preventDefault()}
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2 whitespace-nowrap">
                          <span>Get Free Template</span>
                          <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        No credit card required • Free forever
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-2 ml-2">
              {activeFormat === 'inline' && 'Inline Sponsored Ad'}
              {activeFormat === 'followup' && 'Follow-up Question Ad Format'}
              {activeFormat === 'card' && 'Card Format Sponsored Ad'}
            </p>
          </div>
        </div>

        {/* Play/Pause Control */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-4 py-2 glass-effect hover:bg-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            {isAnimating ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </button>
          
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-4 py-2 glass-effect hover:bg-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            {isAutoPlay ? (
              <>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                Auto-play On
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Auto-play Off
              </>
            )}
          </button>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {formats.map((format) => (
          <button
            key={format.id}
            onClick={() => goToFormat(format.id)}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                activeFormat === format.id
                  ? 'w-12 h-2 bg-primary-500'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
            {activeFormat === format.id && (
              <span className="text-xs text-gray-400 font-medium">{format.name}</span>
            )}
          </button>
        ))}
      </div>

      {/* Flow Arrow */}
      <div className="absolute left-6 top-32 bottom-32 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 hidden md:block"></div>
    </div>
  );
}

