import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI Hype Is High, but Profitability Remains Elusive for Most Players | Kovio Blog',
  description: 'Exploring the reality behind AI hype: why most AI companies struggle with profitability despite massive growth and investment.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-12 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
              <span className="text-sm text-primary-400 font-semibold">BLOG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Hype Is High, but Profitability Remains Elusive for Most Players
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <div className="glass-effect rounded-2xl p-8 sm:p-12 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Artificial Intelligence is everywhere. From flashy product launches to billion-dollar valuations, AI has become the defining tech narrative. Yet beneath the hype, a quieter truth emerges: <strong className="text-white">most AI companies are still struggling to make real, sustainable profits</strong>.
              </p>

              {/* Visual: Hype vs Reality */}
              <div className="my-12 p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">The Hype Gap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Hype</h4>
                    <p className="text-gray-300 text-sm">Massive valuations, viral launches, endless potential</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Reality</h4>
                    <p className="text-gray-300 text-sm">Struggling margins, unclear monetization, high costs</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Cost Problem</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Training and running AI models is expensive. Unlike traditional SaaS where costs decrease with scale, <strong className="text-white">each new AI customer often increases costs faster than revenue</strong>.
              </p>

              {/* Visual: Cost Structure Comparison */}
              <div className="my-12 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Cost Structure: Traditional SaaS vs AI</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">Traditional SaaS</span>
                      <span className="text-green-400 font-semibold">Marginal costs → 0</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">AI Companies</span>
                      <span className="text-red-400 font-semibold">Costs scale with usage</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-xs text-gray-400">Expensive GPUs</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-xs text-gray-400">High compute costs</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">👥</div>
                    <p className="text-xs text-gray-400">Large teams</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl mb-2">🔄</div>
                    <p className="text-xs text-gray-400">Continuous retraining</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Monetization Challenge</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Customers expect AI tools to be cheap or free. When multiple products use the same underlying models, differentiation becomes thin—leading to a race to the bottom on pricing.
              </p>

              {/* Visual: Value Chain */}
              <div className="my-12 p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Where the Real Value Goes</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl mb-2">☁️</div>
                    <p className="text-white font-semibold">Cloud Providers</p>
                    <p className="text-gray-400 text-sm mt-1">Win</p>
                  </div>
                  <div className="text-primary-400 text-2xl">→</div>
                  <div className="flex-1 text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="text-white font-semibold">Chip Makers</p>
                    <p className="text-gray-400 text-sm mt-1">Win</p>
                  </div>
                  <div className="text-primary-400 text-2xl">→</div>
                  <div className="flex-1 text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl mb-2">🤖</div>
                    <p className="text-white font-semibold">Model Platforms</p>
                    <p className="text-gray-400 text-sm mt-1">Win</p>
                  </div>
                  <div className="text-primary-400 text-2xl">→</div>
                  <div className="flex-1 text-center p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                    <div className="text-3xl mb-2">💼</div>
                    <p className="text-white font-semibold">AI Apps</p>
                    <p className="text-red-400 text-sm mt-1">Struggle</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Path Forward</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The market will consolidate. Survivors will solve real problems, build proprietary advantages, and optimize for efficiency—not just impressive demos.
              </p>

              {/* Visual: Success Factors */}
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">What Works</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Solve real problems</li>
                        <li>• Build proprietary data</li>
                        <li>• Optimize for margins</li>
                        <li>• Treat AI as enabler</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">What Doesn't</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Impressive demos only</li>
                        <li>• Generic AI features</li>
                        <li>• Ignoring unit economics</li>
                        <li>• AI as the product</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl border border-primary-500/30">
                <p className="text-xl text-white font-semibold text-center leading-relaxed">
                  The next phase of AI won't be defined by who has the biggest model—but by who can turn intelligence into a <span className="text-primary-300">profitable, durable business</span>.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="glass-effect-premium rounded-2xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build a Profitable AI Business?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Kovio helps AI publishers monetize their applications with contextual ads that enhance user experience while generating sustainable revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/waitlist" className="btn-primary text-lg px-8 py-4 inline-block">
                  Get Started
                </Link>
                <a href="https://docs.kovio.dev/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4 inline-block">
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
