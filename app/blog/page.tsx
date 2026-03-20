import { generateSEO, generateBreadcrumbSchema, SITE_URL, BLOG_FEATURED_IMAGE_PATH, BLOG_FEATURED_IMAGE_URL } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata = generateSEO({
  title: '3 Patti Loot Blog | Guides, Tips & Latest Updates',
  description: 'Read expert guides on 3 Patti Loot: signup tutorials, deposit/withdrawal guides, winning tips & tricks, game comparisons. Stay updated with latest features and bonuses.',
  url: `${SITE_URL}/blog`,
  image: BLOG_FEATURED_IMAGE_URL,
  keywords: [
    '3 patti loot blog',
    '3 patti loot guides',
    'teen patti tutorials',
    '3 patti loot news',
    'how to play 3 patti loot',
  ],
});

// Static blog posts (newest first in grid order)
const blogPosts = [
  {
    id: 9,
    title: "3 Patti Loot Payment Methods — JazzCash & EasyPaisa",
    slug: "blog/payment-methods-jazzcash-easypaisa",
    excerpt: "Compare JazzCash vs EasyPaisa for 3 Patti Loot deposits and withdrawals in Pakistan.",
    category: "Payments",
    date: "March 26, 2026",
  },
  {
    id: 8,
    title: "3 Patti Loot App Features and Benefits",
    slug: "blog/features-benefits",
    excerpt: "Games list, wallet support, bonuses, and why players choose the 3 Patti Loot APK.",
    category: "Overview",
    date: "March 24, 2026",
  },
  {
    id: 7,
    title: "How to Earn Money in 3 Patti Loot?",
    slug: "blog/earn-money",
    excerpt: "Welcome bonus, referrals, daily rewards, and realistic expectations for earning PKR.",
    category: "Earning",
    date: "March 22, 2026",
  },
  {
    id: 6,
    title: "How to Install 3 Patti Loot APK Safely on Android",
    slug: "blog/install-apk-safely",
    excerpt: "Enable unknown sources safely, check APK permissions, and avoid fake installers before you play.",
    category: "Safety",
    date: "March 20, 2026",
  },
  {
    id: 5,
    title: "Is 3 Patti Loot Real or Fake?",
    slug: "blog/real-or-fake",
    excerpt: "Honest look at legitimacy, JazzCash/EasyPaisa withdrawals, and how to spot scam APKs in Pakistan.",
    category: "Trust & Safety",
    date: "March 18, 2026",
  },
  {
    id: 1,
    title: "How to Signup and Login in 3 Patti Loot",
    slug: "blog/signup-login",
    excerpt: "Learn how to create your account and login to 3 Patti Loot app. Step-by-step guide with email binding and account recovery.",
    category: "Getting Started",
    date: "March 1, 2026",
  },
  {
    id: 2,
    title: "How to Deposit and Withdraw Money",
    slug: "blog/deposit-withdraw",
    excerpt: "Complete guide on depositing money using JazzCash/EasyPaisa and withdrawing your winnings instantly.",
    category: "Payments",
    date: "March 5, 2026",
  },
  {
    id: 3,
    title: "Best Tips and Tricks to Win Big",
    slug: "blog/tips-tricks",
    excerpt: "Master the games with our expert tips and tricks. Learn strategies to maximize your winnings in 3 Patti Loot.",
    category: "Strategy",
    date: "March 10, 2026",
  },
  {
    id: 4,
    title: "Best 3 Patti Games to Play",
    slug: "blog/best-games",
    excerpt: "Discover the best 3 Patti games including 3 Patti Blue, Card Rummy, 3 Patti Lucky, 3 Patti Sky, and 3 Patti Vegas.",
    category: "Game Reviews",
    date: "March 15, 2026",
  },
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ]);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-400">
              <li><Link href="/" className="hover:text-gaming-accent transition-colors">Home</Link></li>
              <li>→</li>
              <li className="text-white">Blog</li>
            </ol>
          </nav>
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            Blog & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay updated with the latest news, tips, tricks, and updates about 3 Patti Loot.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              className="gaming-card group bg-gaming-dark rounded-lg overflow-hidden hover:border-gaming-accent transition-all"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={BLOG_FEATURED_IMAGE_PATH}
                  alt="3 Patti Loot official logo — featured image for all guides"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-bold text-gaming-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-gaming font-bold mb-3 group-hover:text-gaming-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>3 Patti Loot</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass rounded-lg p-8">
          <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">
            Ready to Start Playing?
          </h2>
          <p className="text-gray-300 mb-6">
            Download 3 Patti Loot now and get PKR 5 welcome bonus!
          </p>
          <a
            href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000"
            className="btn-primary inline-block"
          >
            📱 Download APK Now
          </a>
        </div>
      </section>
    </div>
  );
}

