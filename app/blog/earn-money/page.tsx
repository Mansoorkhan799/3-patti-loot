import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL, BLOG_FEATURED_IMAGE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "How to Earn Money in 3 Patti Loot? Bonuses, Referrals & Games 2026",
  description:
    "Learn how to earn money in 3 Patti Loot: welcome bonus, referral commission, daily rewards, game choice, and bankroll tips. Realistic guide for Pakistan players using JazzCash & EasyPaisa.",
  url: `${SITE_URL}/blog/earn-money`,
  image: BLOG_FEATURED_IMAGE_URL,
  keywords: [
    "how to earn money in 3 patti loot",
    "3 patti loot earning",
    "3 patti loot referral",
    "3 patti loot bonus",
    "earn money teen patti pakistan",
  ],
});

const PUBLISHED = "2026-03-22";

export default function EarnMoneyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "How to Earn Money in 3 Patti Loot", url: `${SITE_URL}/blog/earn-money` },
  ]);

  const articleSchema = generateArticleSchema({
    title: "How to Earn Money in 3 Patti Loot? Bonuses, Referrals & Games 2026",
    description: "Guide to earning in 3 Patti Loot: bonuses, referrals, and responsible play for Pakistan users.",
    image: BLOG_FEATURED_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { name: "3 Patti Loot Team", url: `${SITE_URL}/about` },
    url: `${SITE_URL}/blog/earn-money`,
  });

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-gaming-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>→</li>
              <li>
                <Link href="/blog" className="hover:text-gaming-accent transition-colors">
                  Guides
                </Link>
              </li>
              <li>→</li>
              <li className="text-white">Earn Money</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-gaming font-bold mb-4 gradient-text">
            How to Earn Money in 3 Patti Loot?
          </h1>
          <p className="text-xl text-gray-300">
            Bonuses, referrals, and smart play — no hype, just what the app actually offers.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8 border border-gaming-accent/20">
            <p className="text-gray-300 leading-relaxed mb-0">
              <strong className="text-white">3 Patti Loot</strong> is a real-money gaming app: you can win or lose. This guide explains common ways users try to earn — welcome offers, referrals, and in-game play — and links to{" "}
              <Link href="/blog/deposit-withdraw" className="text-gaming-accent underline">
                deposits &amp; withdrawals
              </Link>{" "}
              and{" "}
              <Link href="/blog/tips-tricks" className="text-gaming-accent underline">
                winning tips
              </Link>
              . Never gamble more than you can afford to lose.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">1. Welcome &amp; login bonuses</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              New users often get chip bonuses after signup and first tasks (e.g. binding email). Check the in-app promotions screen — terms change, so read minimum bet or rollover rules before counting it as “free cash.”
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">2. Referral program</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Share your referral link with friends. When they register and play, you may earn commission on their activity (see the app for current rates). This is one of the most discussed ways to earn in <strong className="text-white">3 Patti Loot</strong> without playing high-stakes tables yourself.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">3. Daily rewards &amp; events</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Log in daily and check for spin wheels, tasks, or seasonal events. Small amounts add up but require consistency.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">4. Playing games (skill + luck)</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Games like Teen Patti, Rummy, Dragon vs Tiger, and slots can pay out — but variance is high. Use small stakes while learning; see{" "}
              <Link href="/blog/best-games" className="text-gaming-accent underline">
                best games comparison
              </Link>{" "}
              and{" "}
              <Link href="/blog/tips-tricks" className="text-gaming-accent underline">
                strategy tips
              </Link>
              .
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">5. Cash out with JazzCash &amp; EasyPaisa</h2>
            <p className="text-gray-300 leading-relaxed">
              Earnings sit in your in-app wallet until you withdraw. For Pakistan wallets, read{" "}
              <Link href="/blog/payment-methods-jazzcash-easypaisa" className="text-gaming-accent underline">
                JazzCash &amp; EasyPaisa payment methods
              </Link>{" "}
              and the full{" "}
              <Link href="/blog/deposit-withdraw" className="text-gaming-accent underline">
                deposit &amp; withdraw tutorial
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn-primary inline-block">
              Download 3 Patti Loot →
            </Link>
            <Link href="/blog" className="text-gaming-accent underline self-center">
              All guides
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
