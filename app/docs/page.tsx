'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const sidebarItems = [
  { id: 'getting-started', title: 'Getting Started', href: '#getting-started' },
  { id: 'installation', title: 'Installation', href: '#installation' },
  { id: 'quick-start', title: 'Quick Start', href: '#quick-start' },
  { id: 'props', title: 'Props', href: '#props' },
  { id: 'api-reference', title: 'API Reference', href: '#api-reference' },
];

const packageManagers = [
  { id: 'npm', name: 'npm', command: 'npm install @adinfra/chatbot-ad', icon: 'npm' },
  { id: 'yarn', name: 'yarn', command: 'yarn add @adinfra/chatbot-ad', icon: 'yarn' },
  { id: 'pnpm', name: 'pnpm', command: 'pnpm add @adinfra/chatbot-ad', icon: 'pnpm' },
  { id: 'bun', name: 'bun', command: 'bun add @adinfra/chatbot-ad', icon: 'bun' },
];

const PackageManagerIcon = ({ type }: { type: string }) => {
  const iconClass = "w-4 h-4";
  
  switch (type) {
    case 'npm':
      // npm logo - red square with white text
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456v10.382H5.13z"/>
        </svg>
      );
    case 'yarn':
      // Yarn logo - blue circle with yarn ball
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-1.5 4.5v12h3V6zm3 0h4.5v3h-4.5zm0 4.5h4.5v3h-4.5z"/>
        </svg>
      );
    case 'pnpm':
      // pnpm logo - orange/red gradient circle
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6S17.302 21.6 12 21.6 2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-6 6v7.2h7.2V8.4zm8.4 0v7.2H22V8.4z"/>
        </svg>
      );
    case 'bun':
      // Bun logo - simple circle/bun shape
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.8c4.531 0 8.2 3.669 8.2 8.2 0 4.531-3.669 8.2-8.2 8.2-4.531 0-8.2-3.669-8.2-8.2 0-4.531 3.669-8.2 8.2-8.2z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPackageManager, setSelectedPackageManager] = useState('npm');

  return (
    <>
      <Navbar />
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 glass-effect rounded-lg border border-white/10"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="w-64 h-full bg-black/95 border-r border-white/10 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 pt-20">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2.5 rounded-lg transition-colors text-sm ${
                      activeSection === item.id
                        ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      )}

      <main className="min-h-screen pt-16">
        <div className="flex">
          {/* Fixed Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-white/10 bg-black/50 backdrop-blur-sm z-40">
            <div className="p-6">
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveSection(item.id)}
                    className={`block px-4 py-2.5 rounded-lg transition-colors text-sm ${
                      activeSection === item.id
                        ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Scrollable Main Content */}
          <div className="flex-1 lg:ml-64">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="prose prose-invert max-w-none">
                {/* Getting Started */}
                <section id="getting-started" className="mb-16 scroll-mt-24">
                  <h1 className="text-4xl font-bold text-white mb-4">Getting Started</h1>
                  <p className="text-xl text-gray-300 mb-4">
                    Integrate AdInfra AI into your chatbot application with just a few lines of code.
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    The AdInfra AI SDK is available for <span className="text-primary-400 font-semibold">React</span> and <span className="text-primary-400 font-semibold">React Native</span> applications.
                  </p>
                </section>

                {/* Installation */}
                <section id="installation" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-white mb-6">Installation</h2>
                  <p className="text-gray-300 mb-6">
                    Install the AdInfra AI SDK for React or React Native:
                  </p>
                  
                  {/* Package Manager Selector */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {packageManagers.map((pm) => (
                        <button
                          key={pm.id}
                          onClick={() => setSelectedPackageManager(pm.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                            selectedPackageManager === pm.id
                              ? 'bg-primary-500 text-white'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                          }`}
                        >
                          <PackageManagerIcon type={pm.icon} />
                          {pm.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Installation Command */}
                  <div className="glass-effect rounded-xl p-6 overflow-x-auto bg-gray-900/50 border border-white/10">
                    <pre className="text-sm font-mono">
                      <code className="text-gray-300">
                        {(() => {
                          const pm = packageManagers.find(pm => pm.id === selectedPackageManager);
                          if (!pm) return null;
                          const parts = pm.command.split(' ');
                          return parts.map((part, index) => {
                            const isLast = index === parts.length - 1;
                            if (part === 'npm' || part === 'yarn' || part === 'pnpm' || part === 'bun') {
                              return <span key={index}><span className="text-purple-400">{part}</span>{!isLast && ' '}</span>;
                            } else if (part === 'install' || part === 'add') {
                              return <span key={index}><span className="text-gray-500">{part}</span>{!isLast && ' '}</span>;
                            } else {
                              return <span key={index}><span className="text-green-400">{part}</span></span>;
                            }
                          });
                        })()}
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Quick Start */}
                <section id="quick-start" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
                  <p className="text-gray-300 mb-4">
                    Import and use the ChatbotAd component in your application:
                  </p>
                  <div className="glass-effect rounded-xl p-6 overflow-x-auto bg-gray-900/50 border border-white/10 mb-6">
                    <pre className="text-sm font-mono leading-relaxed">
                      <code className="block text-gray-300">
                        <span className="text-purple-400">import</span> <span className="text-blue-400">{'{'}</span> <span className="text-yellow-400">ChatbotAd</span> <span className="text-blue-400">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@adinfra/chatbot-ad'</span>;
                        <br />
                        <br />
                        <span className="text-purple-400">function</span> <span className="text-blue-400">MyChatbot</span><span className="text-gray-500">()</span> <span className="text-blue-400">{'{'}</span>
                        <br />
                        <span className="text-purple-400 ml-4">return</span> <span className="text-gray-500">(</span>
                        <br />
                        <span className="ml-8 text-gray-500">&lt;</span><span className="text-yellow-400">div</span><span className="text-gray-500">&gt;</span>
                        <br />
                        <span className="ml-12 text-gray-500">&lt;</span><span className="text-yellow-400">ChatbotAd</span>
                        <br />
                        <span className="ml-16 text-blue-400">publisherId</span><span className="text-gray-500">=</span><span className="text-green-400">"your-publisher-id"</span>
                        <br />
                        <span className="ml-16 text-blue-400">keyword</span><span className="text-gray-500">=</span><span className="text-green-400">"technology,ai"</span>
                        <br />
                        <span className="ml-16 text-blue-400">theme</span><span className="text-gray-500">=</span><span className="text-green-400">"dark"</span>
                        <br />
                        <span className="ml-16 text-blue-400">format</span><span className="text-gray-500">=</span><span className="text-green-400">"standard"</span>
                        <br />
                        <span className="ml-12 text-gray-500">/&gt;</span>
                        <br />
                        <span className="ml-8 text-gray-500">&lt;/</span><span className="text-yellow-400">div</span><span className="text-gray-500">&gt;</span>
                        <br />
                        <span className="ml-4 text-gray-500">);</span>
                        <br />
                        <span className="text-blue-400">{'}'}</span>
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Props */}
                <section id="props" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-white mb-6">Props</h2>
                  <div className="space-y-6">
                    <div className="glass-effect rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">publisherId</h3>
                      <p className="text-gray-400 mb-2">
                        <span className="text-red-400">Required</span> • <span className="text-gray-500">string</span>
                      </p>
                      <p className="text-gray-300">
                        Your unique publisher ID provided by AdInfra AI. This identifies your application and enables ad serving.
                      </p>
                    </div>

                    <div className="glass-effect rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">keyword</h3>
                      <p className="text-gray-400 mb-2">
                        <span className="text-red-400">Required</span> • <span className="text-gray-500">string</span>
                      </p>
                      <p className="text-gray-300 mb-2">
                        Contextual keywords to help match relevant ads. Multiple keywords can be provided as a comma-separated string.
                      </p>
                      <p className="text-gray-400 text-sm">
                        Example: <code className="text-green-400">"technology,ai,machine-learning"</code>
                      </p>
                    </div>

                    <div className="glass-effect rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">theme</h3>
                      <p className="text-gray-400 mb-2">
                        <span className="text-yellow-400">Optional</span> • <span className="text-gray-500">'light' | 'dark'</span> • <span className="text-gray-500">Default: 'dark'</span>
                      </p>
                      <p className="text-gray-300">
                        The visual theme for the ad component. Choose between 'light' and 'dark' to match your application's design.
                      </p>
                    </div>

                    <div className="glass-effect rounded-xl p-6 border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">format</h3>
                      <p className="text-gray-400 mb-2">
                        <span className="text-yellow-400">Optional</span> • <span className="text-gray-500">'standard' | 'small'</span> • <span className="text-gray-500">Default: 'standard'</span>
                      </p>
                      <p className="text-gray-300">
                        The size format of the rendered ad. Use 'standard' for the default size or 'small' for a more compact ad display.
                      </p>
                    </div>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api-reference" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-white mb-6">API Reference</h2>
                  <div className="glass-effect rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">ChatbotAd Component</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Props</h4>
                        <table className="w-full text-sm text-gray-300">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-2 px-4">Prop</th>
                              <th className="text-left py-2 px-4">Type</th>
                              <th className="text-left py-2 px-4">Required</th>
                              <th className="text-left py-2 px-4">Default</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="py-2 px-4"><code className="text-primary-400">publisherId</code></td>
                              <td className="py-2 px-4 text-gray-400">string</td>
                              <td className="py-2 px-4 text-red-400">Yes</td>
                              <td className="py-2 px-4 text-gray-500">-</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 px-4"><code className="text-primary-400">keyword</code></td>
                              <td className="py-2 px-4 text-gray-400">string</td>
                              <td className="py-2 px-4 text-red-400">Yes</td>
                              <td className="py-2 px-4 text-gray-500">-</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="py-2 px-4"><code className="text-primary-400">theme</code></td>
                              <td className="py-2 px-4 text-gray-400">'light' | 'dark'</td>
                              <td className="py-2 px-4 text-yellow-400">No</td>
                              <td className="py-2 px-4 text-gray-500">'dark'</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4"><code className="text-primary-400">format</code></td>
                              <td className="py-2 px-4 text-gray-400">'standard' | 'small'</td>
                              <td className="py-2 px-4 text-yellow-400">No</td>
                              <td className="py-2 px-4 text-gray-500">'standard'</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

