import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL, BLOG_FEATURED_IMAGE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "How to Install 3 Patti Loot APK Safely on Android | Step-by-Step",
  description:
    "Install 3 Patti Loot APK safely: enable unknown sources the right way, check permissions, avoid fake files, and verify the app after install. For Pakistan Android users.",
  url: `${SITE_URL}/blog/install-apk-safely`,
  image: BLOG_FEATURED_IMAGE_URL,
  keywords: [
    "3 patti loot apk install",
    "install 3 patti loot safely",
    "3 patti loot unknown sources",
    "download 3 patti loot android",
    "3 patti loot apk pakistan",
  ],
});

const PUBLISHED = "2026-03-20";

export default function InstallApkSafelyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Install APK Safely", url: `${SITE_URL}/blog/install-apk-safely` },
  ]);

  const articleSchema = generateArticleSchema({
    title: "How to Install 3 Patti Loot APK Safely on Android | Step-by-Step",
    description: "Step-by-step safe installation of 3 Patti Loot APK on Android for users in Pakistan.",
    image: BLOG_FEATURED_IMAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { name: "3 Patti Loot Team", url: `${SITE_URL}/about` },
    url: `${SITE_URL}/blog/install-apk-safely`,
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
              <li className="text-white">Install APK safely</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-gaming font-bold mb-4 gradient-text">
            How to Install 3 Patti Loot APK Safely on Android
          </h1>
          <p className="text-xl text-gray-300">
            Reduce risk from fake APKs and unnecessary permissions before you play.
          </p>
        </div>
      </section>

      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Before you download</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use storage space only from a source you trust — our homepage links to the official download flow for <strong className="text-white">3 Patti Loot</strong>.</li>
              <li>Read{" "}
                <Link href="/blog/real-or-fake" className="text-gaming-accent underline">
                  real vs fake
                </Link>{" "}
                so you know common scam patterns.
              </li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Step 1: Allow installs from your browser only</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              On Android, open <strong className="text-white">Settings → Security</strong> (or <strong className="text-white">Apps → Special access</strong> on newer phones) and enable <strong className="text-gaming-accent">Install unknown apps</strong> for the browser you use to download the file — not for every app on the phone.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Step 2: Download and install</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Tap <strong className="text-white">Download</strong> on the{" "}
                <Link href="/" className="text-gaming-accent underline">
                  3 Patti Loot download page
                </Link>
                .
              </li>
              <li>Open the APK from the notification or Downloads folder.</li>
              <li>Confirm the package name looks consistent with the app you expect (avoid random installers).</li>
            </ol>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Step 3: Review permissions</h2>
            <p className="text-gray-300 leading-relaxed">
              Gaming apps may request storage, phone state, or network access. If something unrelated appears (e.g. bulk SMS), cancel and get a clean copy. After install, you can tighten permissions in <strong className="text-white">Settings → Apps → 3 Patti Loot</strong>.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Step 4: Create account securely</h2>
            <p className="text-gray-300 leading-relaxed">
              Bind email and use a strong password. Follow{" "}
              <Link href="/blog/signup-login" className="text-gaming-accent underline">
                signup &amp; login guide
              </Link>{" "}
              for OTP and recovery tips.
            </p>
          </div>

          <div className="glass rounded-lg p-8 border border-gaming-accent/20">
            <p className="text-sm text-gray-400 mb-0">
              This guide is for education only. Installing third-party APKs is at your own risk. See{" "}
              <Link href="/disclaimer" className="text-gaming-accent underline">
                disclaimer
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/blog/deposit-withdraw" className="btn-primary inline-block">
              JazzCash &amp; EasyPaisa guide →
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
