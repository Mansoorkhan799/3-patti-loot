import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: 'Best 3 Patti Games 2026 | Compare Blue, Lucky, Sky, Vegas & Loot',
  description: 'Complete comparison of best 3 Patti games in Pakistan: 3 Patti Loot, Blue, Lucky, Sky & Vegas. See ratings, features, bonuses, withdrawal times & which is best for earning.',
  url: `${SITE_URL}/blog/best-games`,
  keywords: [
    'best 3 patti game',
    '3 patti blue vs loot',
    '3 patti lucky app',
    '3 patti sky download',
    '3 patti vegas pakistan',
    'card rummy game',
  ],
});

export default function BestGamesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: 'Best 3 Patti Games', url: `${SITE_URL}/blog/best-games` },
  ]);

  const articleSchema = generateArticleSchema({
    title: 'Best 3 Patti Games 2026 | Compare Blue, Lucky, Sky, Vegas & Loot',
    description: 'Complete comparison of best 3 Patti games in Pakistan: 3 Patti Loot, Blue, Lucky, Sky & Vegas. See ratings, features, bonuses, withdrawal times.',
    image: `${SITE_URL}/3-patti-loot.webp`,
    datePublished: '2026-01-15',
    dateModified: '2026-01-15',
    author: { name: '3 Patti Loot Team', url: `${SITE_URL}/about` },
    url: `${SITE_URL}/blog/best-games`,
  });

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-400">
              <li><Link href="/" className="hover:text-gaming-accent transition-colors">Home</Link></li>
              <li>→</li>
              <li><Link href="/blog" className="hover:text-gaming-accent transition-colors">Guides</Link></li>
              <li>→</li>
              <li className="text-white">Best 3 Patti Games</li>
            </ol>
          </nav>
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            🎴 Best 3 Patti Games
          </h1>
          <p className="text-xl text-gray-300">
            Compare the top 3 Patti gaming apps and find the perfect one for you
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="glass rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              The world of online 3 Patti gaming in Pakistan has exploded with numerous apps offering 
              exciting gameplay and real money rewards. Among the most popular are 3 Patti Blue, Card Rummy, 
              3 Patti Lucky, 3 Patti Sky, and 3 Patti Vegas. But which one is the best? Let's dive deep 
              into each app to help you make an informed decision.
            </p>
          </div>

          {/* 3 Patti Loot */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-gaming-accent/20 to-gaming-purple/20 rounded-lg p-8 border-2 border-gaming-accent">
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">👑</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold gradient-text">
                    3 Patti Loot - Our Top Pick
                  </h2>
                  <p className="text-gaming-accent font-bold">⭐ Rating: 5/5</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong><Link href="/" className="text-gaming-accent hover:text-gaming-purple underline">3 Patti Loot</Link></strong> stands out as the most comprehensive and reliable gaming 
                  platform in Pakistan. With 28+ games, instant withdrawals, and excellent customer support, 
                  it's the perfect choice for both beginners and experienced players.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gaming-dark p-4 rounded-lg">
                    <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 28+ different games</li>
                      <li>• Instant withdrawals 24/7</li>
                      <li>• PKR 5 welcome bonus</li>
                      <li>• 3% referral commission</li>
                      <li>• Supports JazzCash & EasyPaisa</li>
                      <li>• Safe and secure platform</li>
                      <li>• Available in Urdu & English</li>
                      <li>• Works on 2G connection</li>
                      <li>• 24/7 customer support</li>
                    </ul>
                  </div>

                  <div className="bg-gaming-dark p-4 rounded-lg">
                    <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Android only (no iOS)</li>
                      <li>• Not available in all countries</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gaming-dark p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gaming-accent mb-3">Available Games</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    <div>• Teen Patti</div>
                    <div>• Rummy</div>
                    <div>• Andar Bahar</div>
                    <div>• Dragon vs Tiger</div>
                    <div>• Ludo</div>
                    <div>• Roulette</div>
                    <div>• Poker</div>
                    <div>• Blackjack</div>
                    <div>• Baccarat</div>
                    <div>• Mines</div>
                    <div>• 7 Up Down</div>
                    <div>• +17 more games</div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <a
                    href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000"
                    className="btn-primary text-lg inline-block"
                  >
                    📱 Download 3 Patti Loot APK
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Patti Blue */}
          <section className="mb-12">
            <div className="glass rounded-lg p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🔵</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold text-blue-400">
                    3 Patti Blue
                  </h2>
                  <p className="text-gray-400">⭐ Rating: 4.2/5</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                3 Patti Blue is a popular alternative focusing primarily on Teen Patti variations. 
                It offers a clean interface and decent gaming experience.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Simple and clean interface</li>
                    <li>• Multiple Teen Patti variations</li>
                    <li>• Good graphics quality</li>
                    <li>• Regular tournaments</li>
                  </ul>
                </div>

                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Limited game variety</li>
                    <li>• Slower withdrawal process</li>
                    <li>• Lower referral commission</li>
                    <li>• Occasional connectivity issues</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Best For:</strong> Players who specifically want Teen Patti variations only.
                </p>
              </div>
            </div>
          </section>

          {/* Card Rummy */}
          <section className="mb-12">
            <div className="glass rounded-lg p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🃏</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold text-red-400">
                    Card Rummy
                  </h2>
                  <p className="text-gray-400">⭐ Rating: 4.0/5</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                As the name suggests, Card Rummy specializes in various Rummy game formats. 
                It's a solid choice for Rummy enthusiasts.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Excellent Rummy variations</li>
                    <li>• Active player community</li>
                    <li>• Fair gameplay</li>
                    <li>• Good bonus offers</li>
                  </ul>
                </div>

                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Only Rummy games</li>
                    <li>• Higher minimum deposit</li>
                    <li>• Limited payment options</li>
                    <li>• No slot games</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Best For:</strong> Dedicated Rummy players who don't want other games.
                </p>
              </div>
            </div>
          </section>

          {/* 3 Patti Lucky */}
          <section className="mb-12">
            <div className="glass rounded-lg p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🍀</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold text-green-400">
                    3 Patti Lucky
                  </h2>
                  <p className="text-gray-400">⭐ Rating: 3.8/5</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                3 Patti Lucky offers a mix of card games and slot machines. It's a mid-tier option 
                with decent features.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Mix of card games and slots</li>
                    <li>• Colorful interface</li>
                    <li>• Daily free spins</li>
                    <li>• Low minimum bet</li>
                  </ul>
                </div>

                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Smaller user base</li>
                    <li>• Limited customer support</li>
                    <li>• Withdrawal delays reported</li>
                    <li>• Some games feel repetitive</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Best For:</strong> Casual players who enjoy both card games and slots.
                </p>
              </div>
            </div>
          </section>

          {/* 3 Patti Sky */}
          <section className="mb-12">
            <div className="glass rounded-lg p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">☁️</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold text-cyan-400">
                    3 Patti Sky
                  </h2>
                  <p className="text-gray-400">⭐ Rating: 3.5/5</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                3 Patti Sky is a newer entrant in the market with a focus on modern UI and social features.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Modern and sleek design</li>
                    <li>• Social chat features</li>
                    <li>• Gift exchange system</li>
                    <li>• Lightweight app</li>
                  </ul>
                </div>

                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Limited game selection</li>
                    <li>• New platform, less trusted</li>
                    <li>• Smaller prize pools</li>
                    <li>• English only</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Best For:</strong> Players who value social interaction and modern UI.
                </p>
              </div>
            </div>
          </section>

          {/* 3 Patti Vegas */}
          <section className="mb-12">
            <div className="glass rounded-lg p-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎰</span>
                <div>
                  <h2 className="text-3xl font-gaming font-bold text-purple-400">
                    3 Patti Vegas
                  </h2>
                  <p className="text-gray-400">⭐ Rating: 3.7/5</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                3 Patti Vegas brings a casino-style experience with flashy graphics and big jackpot promotions.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-accent font-bold mb-2">✅ Pros</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Casino-style atmosphere</li>
                    <li>• High-quality graphics</li>
                    <li>• Big jackpot opportunities</li>
                    <li>• VIP program available</li>
                  </ul>
                </div>

                <div className="bg-gaming-dark p-4 rounded-lg">
                  <h3 className="text-gaming-red font-bold mb-2">❌ Cons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• High minimum deposits</li>
                    <li>• Complex bonus terms</li>
                    <li>• Requires strong internet</li>
                    <li>• Can be overwhelming for beginners</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Best For:</strong> High-rollers who want a premium casino experience.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              📊 Quick Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gaming-dark">
                    <th className="p-4 border border-gaming-accent/20">Feature</th>
                    <th className="p-4 border border-gaming-accent/20">3 Patti Loot</th>
                    <th className="p-4 border border-gaming-accent/20">3 Patti Blue</th>
                    <th className="p-4 border border-gaming-accent/20">Card Rummy</th>
                    <th className="p-4 border border-gaming-accent/20">3 Patti Lucky</th>
                    <th className="p-4 border border-gaming-accent/20">3 Patti Sky</th>
                    <th className="p-4 border border-gaming-accent/20">3 Patti Vegas</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border border-gaming-accent/20 font-bold">Total Games</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">28+</td>
                    <td className="p-4 border border-gaming-accent/20">8-10</td>
                    <td className="p-4 border border-gaming-accent/20">5-7</td>
                    <td className="p-4 border border-gaming-accent/20">12-15</td>
                    <td className="p-4 border border-gaming-accent/20">6-8</td>
                    <td className="p-4 border border-gaming-accent/20">15-18</td>
                  </tr>
                  <tr className="bg-gaming-dark/50">
                    <td className="p-4 border border-gaming-accent/20 font-bold">Welcome Bonus</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">PKR 5</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 3</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 2</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 4</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 3</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 10*</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gaming-accent/20 font-bold">Min Withdrawal</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">PKR 100</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 200</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 500</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 300</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 250</td>
                    <td className="p-4 border border-gaming-accent/20">PKR 1000</td>
                  </tr>
                  <tr className="bg-gaming-dark/50">
                    <td className="p-4 border border-gaming-accent/20 font-bold">Withdrawal Time</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">Instant</td>
                    <td className="p-4 border border-gaming-accent/20">2-6 hours</td>
                    <td className="p-4 border border-gaming-accent/20">4-12 hours</td>
                    <td className="p-4 border border-gaming-accent/20">1-24 hours</td>
                    <td className="p-4 border border-gaming-accent/20">2-8 hours</td>
                    <td className="p-4 border border-gaming-accent/20">12-48 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gaming-accent/20 font-bold">Referral Commission</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">3%</td>
                    <td className="p-4 border border-gaming-accent/20">2%</td>
                    <td className="p-4 border border-gaming-accent/20">1.5%</td>
                    <td className="p-4 border border-gaming-accent/20">2%</td>
                    <td className="p-4 border border-gaming-accent/20">1%</td>
                    <td className="p-4 border border-gaming-accent/20">2.5%</td>
                  </tr>
                  <tr className="bg-gaming-dark/50">
                    <td className="p-4 border border-gaming-accent/20 font-bold">Customer Support</td>
                    <td className="p-4 border border-gaming-accent/20 text-gaming-accent">24/7</td>
                    <td className="p-4 border border-gaming-accent/20">12 hours</td>
                    <td className="p-4 border border-gaming-accent/20">Limited</td>
                    <td className="p-4 border border-gaming-accent/20">16 hours</td>
                    <td className="p-4 border border-gaming-accent/20">18 hours</td>
                    <td className="p-4 border border-gaming-accent/20">20 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Conditions apply</p>
          </section>

          {/* Final Verdict */}
          <section className="mb-12">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              🏆 Final Verdict
            </h2>

            <div className="bg-gradient-to-r from-gaming-accent/20 to-gaming-purple/20 rounded-lg p-8 border-2 border-gaming-accent">
              <h3 className="text-2xl font-bold mb-4 text-gaming-accent">Winner: 3 Patti Loot</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                After comparing all the major 3 Patti apps, <strong>3 Patti Loot</strong> emerges as the 
                clear winner. With 28+ games, instant withdrawals, excellent customer support, and the highest 
                referral commission, it offers the best overall value.
              </p>
              <p className="text-gray-300 mb-6">
                While other apps have their strengths (3 Patti Blue for Teen Patti, Card Rummy for Rummy, 
                3 Patti Vegas for premium experience), 3 Patti Loot provides the most comprehensive and 
                user-friendly platform for all types of players.
              </p>

              <div className="text-center">
                <a
                  href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000"
                  className="btn-primary text-lg inline-block"
                >
                  📱 Download 3 Patti Loot - The Best Choice
                </a>
                <p className="text-sm text-gray-400 mt-3">
                  Join thousands of players earning real money daily!
                </p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
}

