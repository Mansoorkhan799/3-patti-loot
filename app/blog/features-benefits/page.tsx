import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL, BLOG_FEATURED_IMAGE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "3 Patti Loot App Features and Benefits | Full List 2026",
  description:
    "Explore 3 Patti Loot app features: 25+ games, JazzCash & EasyPaisa, bonuses, referral program, UI, and benefits for Pakistan Android users. What you get before you download.",
  url: `${SITE_URL}/blog/features-benefits`,
  image: BLOG_FEATURED_IMAGE_URL,
  keywords: [
    "3 patti loot features",
    "3 patti loot benefits",
    "3 patti loot app review",
    "teen patti loot games list",
    "3 patti loot pakistan",
  ],
});

const PUBLISHED = "2026-03-24";

export default function FeaturesBenefitsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Features and Benefits", url: `${SITE_URL}/blog/features-benefits` },
  ]);

  const articleSchema = generateArticleSchema({
    title: "3 Patti Loot App Features and Benefits | Full List 2026",
    description: "Overview of 3 Patti Loot features, games, payments, and benefits for players in Pakistan.",
    image: BLOG_FEATURED_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { name: "3 Patti Loot Team", url: `${SITE_URL}/about` },
    url: `${SITE_URL}/blog/features-benefits`,
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
              <li className="text-white">Features &amp; Benefits</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-gaming font-bold mb-4 gradient-text">
            3 Patti Loot App Features and Benefits
          </h1>
          <p className="text-xl text-gray-300">
            What the app offers — games, wallets, and quality-of-life perks for mobile players.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Core features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Large game mix</strong> — Teen Patti, Rummy, Dragon vs Tiger, Slots, Andar Bahar, poker-style titles, and more in one <strong className="text-gaming-accent">3 Patti Loot</strong> APK.
              </li>
              <li>
                <strong className="text-white">Pakistan-friendly payments</strong> — Add and withdraw using JazzCash and EasyPaisa; see{" "}
                <Link href="/blog/payment-methods-jazzcash-easypaisa" className="text-gaming-accent underline">
                  payment methods guide
                </Link>
                .
              </li>
              <li>
                <strong className="text-white">Mobile-first UI</strong> — Optimised for Android; works on many devices and slower networks.
              </li>
              <li>
                <strong className="text-white">Bonuses &amp; referrals</strong> — Promotions and invite rewards (details in-app); read{" "}
                <Link href="/blog/earn-money" className="text-gaming-accent underline">
                  how to earn money in 3 Patti Loot
                </Link>
                .
              </li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Benefits for players</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>One app instead of juggling multiple installs for card games and slots.</li>
              <li>Local PKR wallets instead of only international cards.</li>
              <li>Quick access to support (e.g. in-app chat) when you need help.</li>
              <li>Regular updates — check the{" "}
                <Link href="/" className="text-gaming-accent underline">
                  homepage download table
                </Link>{" "}
                for the latest version.
              </li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Things to keep in mind</h2>
            <p className="text-gray-300 leading-relaxed">
              Real-money play involves risk. Benefits are not guaranteed profits; set limits and read our{" "}
              <Link href="/disclaimer" className="text-gaming-accent underline">
                disclaimer
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/blog/install-apk-safely" className="btn-primary inline-block">
              Safe APK install →
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
