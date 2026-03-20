import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL, BLOG_FEATURED_IMAGE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "3 Patti Loot Payment Methods | JazzCash & EasyPaisa Guide Pakistan",
  description:
    "3 Patti Loot payment methods explained: JazzCash vs EasyPaisa, fees mindset, adding accounts, minimum deposits, and security. Use with our full deposit & withdraw tutorial.",
  url: `${SITE_URL}/blog/payment-methods-jazzcash-easypaisa`,
  image: BLOG_FEATURED_IMAGE_URL,
  keywords: [
    "3 patti loot jazzcash",
    "3 patti loot easypaisa",
    "3 patti loot payment methods",
    "3 patti loot deposit pakistan",
    "teen patti jazzcash",
  ],
});

const PUBLISHED = "2026-03-26";

export default function PaymentMethodsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "JazzCash & EasyPaisa", url: `${SITE_URL}/blog/payment-methods-jazzcash-easypaisa` },
  ]);

  const articleSchema = generateArticleSchema({
    title: "3 Patti Loot Payment Methods | JazzCash & EasyPaisa Guide Pakistan",
    description: "JazzCash and EasyPaisa for 3 Patti Loot: how payments work for Pakistan players.",
    image: BLOG_FEATURED_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { name: "3 Patti Loot Team", url: `${SITE_URL}/about` },
    url: `${SITE_URL}/blog/payment-methods-jazzcash-easypaisa`,
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
              <li className="text-white">JazzCash &amp; EasyPaisa</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-gaming font-bold mb-4 gradient-text">
            3 Patti Loot Payment Methods — JazzCash &amp; EasyPaisa
          </h1>
          <p className="text-xl text-gray-300">
            How Pakistan’s two main wallets connect to 3 Patti Loot deposits and withdrawals.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8 border border-gaming-accent/20">
            <p className="text-gray-300 leading-relaxed mb-0">
              <strong className="text-white">3 Patti Loot</strong> is built for Pakistani users: most people fund the account with <strong className="text-gaming-accent">JazzCash</strong> or <strong className="text-gaming-accent">EasyPaisa</strong>. This page explains how those methods fit the app flow. For tap-by-tap screens, follow our detailed{" "}
              <Link href="/blog/deposit-withdraw" className="text-gaming-accent underline">
                deposit &amp; withdraw guide
              </Link>
              .
            </p>
          </div>

          <div className="glass rounded-lg p-8 overflow-x-auto">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Quick comparison</h2>
            <table className="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
              <thead>
                <tr className="border-b border-gray-700 bg-gaming-dark/50">
                  <th className="text-left p-3 text-gaming-accent">Topic</th>
                  <th className="text-left p-3 text-gaming-accent">JazzCash</th>
                  <th className="text-left p-3 text-gaming-accent">EasyPaisa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3">Typical use</td>
                  <td className="p-3">Jazz users, mobile wallet top-ups</td>
                  <td className="p-3">Telenor Easypaisa &amp; wide agent network</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3">In 3 Patti Loot</td>
                  <td className="p-3" colSpan={2}>
                    Add bank/wallet in app → choose method at checkout → confirm from wallet app
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-400 text-sm mt-3 mb-0">
              Minimum amounts and limits are set inside the app; they can change with promotions.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">JazzCash &amp; EasyPaisa — practical tips</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Same name</strong> — Use wallet accounts that match your KYC details to reduce verification issues.
              </li>
              <li>
                <strong className="text-white">Stable internet</strong> — Complete payment in one session; if it fails, check wallet history before retrying.
              </li>
              <li>
                <strong className="text-white">Withdrawals</strong> — Often go back to a linked wallet; allow time for processing at busy hours.
              </li>
            </ol>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Related guides</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <Link href="/blog/deposit-withdraw" className="text-gaming-accent underline">
                  Full deposit &amp; withdraw guide
                </Link>
              </li>
              <li>
                <Link href="/blog/earn-money" className="text-gaming-accent underline">
                  How to earn money in 3 Patti Loot
                </Link>
              </li>
              <li>
                <Link href="/blog/features-benefits" className="text-gaming-accent underline">
                  App features &amp; benefits
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/blog/deposit-withdraw" className="btn-primary inline-block">
              Step-by-step deposit →
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
