import { generateSEO, generateArticleSchema, generateBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: '3 Patti Loot Signup & Login Guide | Create Account in 2 Minutes',
  description: 'Complete guide to signup and login in 3 Patti Loot APK. Learn how to create account, bind email, recover password, and secure your gaming account. Easy step-by-step tutorial.',
  url: `${SITE_URL}/blog/signup-login`,
  keywords: [
    '3 patti loot signup',
    '3 patti loot login',
    'teen patti loot account',
    'how to create account in 3 patti loot',
    '3 patti loot registration',
    'bind email 3 patti loot',
  ],
});

export default function SignupLoginGuidePage() {
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: 'Signup & Login Guide', url: `${SITE_URL}/blog/signup-login` },
  ]);

  // Article Schema
  const articleSchema = generateArticleSchema({
    title: '3 Patti Loot Signup & Login Guide | Create Account in 2 Minutes',
    description: 'Complete guide to signup and login in 3 Patti Loot APK.',
    image: `${SITE_URL}/3-patti-loot-logo.webp`,
    datePublished: '2026-12-15',
    dateModified: '2026-12-15',
    author: {
      name: '3 Patti Loot Team',
      url: `${SITE_URL}/about`,
    },
    url: `${SITE_URL}/blog/signup-login`,
  });

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
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
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center gap-2 text-gray-400">
              <li><Link href="/" className="hover:text-gaming-accent transition-colors">Home</Link></li>
              <li>→</li>
              <li><Link href="/blog" className="hover:text-gaming-accent transition-colors">Guides</Link></li>
              <li>→</li>
              <li className="text-white">Signup & Login Guide</li>
            </ol>
          </nav>
          
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            How to Signup and Login in 3 Patti Loot
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Complete step-by-step guide to create your account and start earning
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          
          {/* What You Need */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">What You Need to Get Started</h2>
            <p className="text-gray-300 mb-4">Before you begin, make sure you have:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>An Android device (version 5.0 or higher)</li>
              <li>A valid email address</li>
              <li>An EasyPaisa or JazzCash account (for deposits and withdrawals)</li>
              <li>Stable internet connection (works on 2G too!)</li>
            </ul>
          </div>

          {/* How to Sign Up */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">How to Sign Up for 3 Patti Loot</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 1: Download and Install the App</h3>
                <p className="text-gray-300">First, download the <Link href="/" className="text-gaming-accent hover:text-gaming-purple underline">3 Patti Loot</Link> APK from our official website. Enable "Install from Unknown Sources" in your device settings to complete the installation.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 2: Launch the App</h3>
                <p className="text-gray-300">Open the 3 Patti Loot app on your device. You'll see the welcome screen with login options.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 3: Play as Guest</h3>
                <p className="text-gray-300">Tap on the "Play as a Guest" button. This will automatically register your device and create a temporary game ID for you.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 4: Bind Your Email (Important!)</h3>
                <p className="text-gray-300 mb-4">To secure your account and claim your PKR 5 welcome bonus:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                  <li>Tap on your profile icon in the top-left corner</li>
                  <li>Click on "Bind Email" option</li>
                  <li>Enter your valid email address</li>
                  <li>Click "Get OTP" - you'll receive a verification code</li>
                  <li>Enter the OTP code (check spam folder if not received)</li>
                  <li>Create a strong password (minimum 8 characters)</li>
                  <li>Confirm your password</li>
                  <li>Click "Submit"</li>
                </ol>
                <p className="text-gaming-accent mt-4 font-bold">Congratulations! You'll receive PKR 5 as a welcome bonus!</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 5: Bind Your Mobile Number</h3>
                <p className="text-gray-300 mb-4">For additional security and easier withdrawals:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                  <li>Go to the "Withdraw" section</li>
                  <li>Click on "Add Mobile Number"</li>
                  <li>Enter your phone number</li>
                  <li>Verify with OTP</li>
                  <li>Your mobile number is now linked!</li>
                </ol>
              </div>
            </div>
          </div>

          {/* How to Login */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">How to Login to 3 Patti Loot</h2>
            
            <div className="space-y-6">
              <div className="bg-gaming-dark/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Method 1: Auto Login</h3>
                <p className="text-gray-300">If you're using the same device, the app will automatically log you in using your device ID.</p>
              </div>

              <div className="bg-gaming-dark/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Method 2: Email Login</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Open the 3 Patti Loot app</li>
                  <li>Instead of "Play as Guest," tap on "Login"</li>
                  <li>Enter your registered email address</li>
                  <li>Enter your password</li>
                  <li>Tap "Login"</li>
                  <li>You're in!</li>
                </ol>
              </div>

              <div className="bg-gaming-dark/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Method 3: Recover Account</h3>
                <p className="text-gray-300 mb-3">If you've lost access to your account:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Tap on "Login"</li>
                  <li>Click "Forgot Password"</li>
                  <li>Enter your registered email</li>
                  <li>Check your email for reset instructions</li>
                  <li>Create a new password</li>
                  <li>Login with new credentials</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Security Tips */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">Important Tips for Account Security</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-gaming-accent text-xl">✓</span>
                <div>
                  <p className="font-bold mb-1">Always Bind Your Email</p>
                  <p className="text-sm text-gray-400">Prevents losing access if you change devices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gaming-accent text-xl">✓</span>
                <div>
                  <p className="font-bold mb-1">Use Strong Password</p>
                  <p className="text-sm text-gray-400">Mix letters, numbers, and symbols</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gaming-accent text-xl">✓</span>
                <div>
                  <p className="font-bold mb-1">Don't Share Password</p>
                  <p className="text-sm text-gray-400">Keep your account secure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gaming-accent text-xl">✓</span>
                <div>
                  <p className="font-bold mb-1">Remember Your Email</p>
                  <p className="text-sm text-gray-400">You'll need it to recover your account</p>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">Common Login Issues and Solutions</h2>
            
            <div className="space-y-4">
              <div className="bg-gaming-dark/50 p-4 rounded-lg">
                <p className="font-bold text-red-400 mb-2">Problem: "Invalid Credentials" Error</p>
                <p className="text-gray-300 text-sm">✓ Check your email and password spelling<br/>✓ Make sure caps lock is off<br/>✓ Try the "Forgot Password" option</p>
              </div>

              <div className="bg-gaming-dark/50 p-4 rounded-lg">
                <p className="font-bold text-red-400 mb-2">Problem: OTP Not Received</p>
                <p className="text-gray-300 text-sm">✓ Check your spam/junk folder<br/>✓ Wait a few minutes and try again<br/>✓ Ensure you entered the correct email</p>
              </div>

              <div className="bg-gaming-dark/50 p-4 rounded-lg">
                <p className="font-bold text-red-400 mb-2">Problem: Account Locked</p>
                <p className="text-gray-300 text-sm">✓ Contact customer support<br/>✓ Provide your game ID and email address</p>
              </div>
            </div>
          </div>

          {/* What to Do After Login */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">What to Do After Logging In</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gaming-accent/10 p-4 rounded-lg border border-gaming-accent/30">
                <span className="text-3xl mb-2 block">🎁</span>
                <h4 className="font-bold mb-2">1. Claim Welcome Bonus</h4>
                <p className="text-sm text-gray-400">Get PKR 5 free!</p>
              </div>
              <div className="bg-gaming-accent/10 p-4 rounded-lg border border-gaming-accent/30">
                <span className="text-3xl mb-2 block">👤</span>
                <h4 className="font-bold mb-2">2. Complete Profile</h4>
                <p className="text-sm text-gray-400">Add avatar and username</p>
              </div>
              <div className="bg-gaming-accent/10 p-4 rounded-lg border border-gaming-accent/30">
                <span className="text-3xl mb-2 block">💳</span>
                <h4 className="font-bold mb-2">3. Bind Payment Methods</h4>
                <p className="text-sm text-gray-400">Link EasyPaisa or JazzCash</p>
              </div>
              <div className="bg-gaming-accent/10 p-4 rounded-lg border border-gaming-accent/30">
                <span className="text-3xl mb-2 block">🎮</span>
                <h4 className="font-bold mb-2">4. Start Playing</h4>
                <p className="text-sm text-gray-400">Begin with free bonus chips</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-lg p-8 bg-gradient-to-r from-gaming-accent/20 to-gaming-purple/20 text-center">
            <h3 className="text-2xl font-gaming font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">Download 3 Patti Loot APK now and claim your PKR 5 welcome bonus!</p>
            <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary">
              Download 3 Patti Loot APK
            </a>
            <p className="text-sm text-gray-400 mt-4">Remember: Always play responsibly and set limits for yourself.</p>
          </div>

        </div>
      </article>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-gaming font-bold mb-8 text-center gradient-text">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">🏠</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Back to Home</h3>
              <p className="text-gray-400 text-sm">Download 3 Patti Loot APK and start earning</p>
            </Link>
            <Link href="/blog/deposit-withdraw" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">💰</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Deposit & Withdraw Guide</h3>
              <p className="text-gray-400 text-sm">Learn how to add and withdraw money safely</p>
            </Link>
            <Link href="/blog/tips-tricks" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Tips to Win Big</h3>
              <p className="text-gray-400 text-sm">Expert strategies to maximize your winnings</p>
            </Link>
            <Link href="/blog/best-games" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">🎴</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Best 3 Patti Games</h3>
              <p className="text-gray-400 text-sm">Compare top 3 Patti gaming platforms</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

