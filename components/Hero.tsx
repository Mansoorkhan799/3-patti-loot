'use client';

import Image from 'next/image';

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
        <div className="mb-6 flex justify-center">
          <Image src="/3-patti-loot.webp" alt="3Patti Loot Logo" width={120} height={120} className="object-contain" priority />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-4 animated-gradient">
          3 Patti Loot
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-semibold">
          Pakistan&apos;s Most Trusted 3 Patti Gaming Platform 2026
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          3Patti Loot is an exciting online card game where you can enjoy a wide collection of casino games with its attractive design, fun background music, and engaging look. Click on following download button to get this wonderful app.
        </p>
        <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-10 py-4 inline-block mb-8">
          DOWNLOAD NOW
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-4">
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-gaming font-bold text-gaming-accent">600K+</div>
            <div className="text-gray-400 text-sm">Downloads</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-gaming font-bold text-gaming-accent">300K+</div>
            <div className="text-gray-400 text-sm">Ratings</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-gaming font-bold text-gaming-accent">49MB</div>
            <div className="text-gray-400 text-sm">App Size</div>
          </div>
        </div>
        <p className="text-sm text-gray-500">*Available for Android devices only</p>
      </div>
    </section>
  );
}

