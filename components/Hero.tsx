'use client';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-accent/10 via-gaming-purple/10 to-transparent" style={{ willChange: 'auto' }}></div>
      <div className="absolute inset-0 opacity-10" style={{ willChange: 'auto' }}>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gaming-accent rounded-full blur-3xl animate-pulse" style={{ willChange: 'opacity' }}></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gaming-purple rounded-full blur-3xl animate-pulse delay-1000" style={{ willChange: 'opacity' }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-gaming-accent/20 border border-gaming-accent/40 rounded-full">
          <span className="text-gaming-accent font-bold">🎁 Get 100% Deposit Bonus!</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-6 animated-gradient">
          3 Patti Loot Game Download
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          New Earning App in Pakistan 2026 with attractive design, fun background music, and engaging look. 
          Play Teen Patti, Dragon vs Tiger, Rummy, Slots, and more exciting games!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-8 py-4">
            📱 Download APK Now
          </a>
          <a href="#games" className="btn-secondary text-lg px-8 py-4">
            🎮 View All Games
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Instant Withdrawal</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>100% Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-gaming font-bold text-gaming-accent mb-2">25+</div>
            <div className="text-gray-400 text-sm">Casino Games</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-gaming font-bold text-gaming-accent mb-2">600K+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-gaming font-bold text-gaming-accent mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Available</div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="text-3xl font-gaming font-bold text-gaming-accent mb-2">100%</div>
            <div className="text-gray-400 text-sm">Deposit Bonus</div>
          </div>
        </div>
      </div>
    </section>
  );
}

