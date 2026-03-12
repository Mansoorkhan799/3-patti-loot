import { generateSEO, generateBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: '3 Patti Loot Deposit & Withdraw Guide | JazzCash & EasyPaisa',
  description: 'Learn how to deposit and withdraw money in 3 Patti Loot using JazzCash & EasyPaisa. Instant withdrawals, minimum PKR 100. Complete guide with screenshots and troubleshooting tips.',
  url: `${SITE_URL}/blog/deposit-withdraw`,
  keywords: [
    '3 patti loot withdrawal',
    '3 patti loot deposit',
    'jazzcash 3 patti loot',
    'easypaisa 3 patti loot',
    'how to withdraw from 3 patti loot',
    'instant withdrawal pakistan',
  ],
});

export default function DepositWithdrawGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: 'Deposit & Withdraw Guide', url: `${SITE_URL}/blog/deposit-withdraw` },
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
              <li><Link href="/blog" className="hover:text-gaming-accent transition-colors">Guides</Link></li>
              <li>→</li>
              <li className="text-white">Deposit & Withdraw Guide</li>
            </ol>
          </nav>
          
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            How to Deposit and Withdraw Money
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Complete guide to managing your funds safely and securely
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          
          {/* Payment Methods */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">Supported Payment Methods</h2>
            <p className="text-gray-300 mb-6"><Link href="/" className="text-gaming-accent hover:text-gaming-purple underline">3 Patti Loot</Link> supports the most popular payment methods in Pakistan:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gaming-accent/10 p-6 rounded-lg text-center border border-gaming-accent/30">
                <span className="text-4xl mb-3 block">💳</span>
                <h3 className="font-bold mb-2">EasyPaisa</h3>
                <p className="text-sm text-gray-400">Most popular choice</p>
              </div>
              <div className="bg-gaming-accent/10 p-6 rounded-lg text-center border border-gaming-accent/30">
                <span className="text-4xl mb-3 block">📱</span>
                <h3 className="font-bold mb-2">JazzCash</h3>
                <p className="text-sm text-gray-400">Fast and reliable</p>
              </div>
              <div className="bg-gaming-accent/10 p-6 rounded-lg text-center border border-gaming-accent/30">
                <span className="text-4xl mb-3 block">🏦</span>
                <h3 className="font-bold mb-2">Bank Account</h3>
                <p className="text-sm text-gray-400">Traditional method</p>
              </div>
            </div>
            <p className="text-gaming-accent mt-6 text-center font-bold">All transactions are 100% secure and encrypted!</p>
          </div>

          {/* Deposit Guide */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">Part 1: How to Deposit Money</h2>
            <div className="bg-gaming-accent/20 p-4 rounded-lg mb-6">
              <p className="text-lg font-bold text-gaming-accent">Minimum Deposit: PKR 50</p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 1: Open Buy/Shop Section</h3>
                <p className="text-gray-300">Launch the 3 Patti Loot app and tap on the "Buy" or "Shop" button located at the bottom of the screen.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 2: Select Chip Package</h3>
                <p className="text-gray-300 mb-3">You'll see various chip packages:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>PKR 50 = 50 chips</li>
                  <li>PKR 100 = 100 chips</li>
                  <li>PKR 500 = 500 chips</li>
                  <li>PKR 1,000 = 1,000 chips</li>
                  <li>PKR 5,000 = 5,000 chips</li>
                  <li>And more...</li>
                </ul>
                <p className="text-gray-300 mt-3">Choose the package that suits your budget.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 3: Select Payment Method</h3>
                <p className="text-gray-300">Choose your preferred payment method: EasyPaisa, JazzCash, or Bank Account</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 4: Enter Payment Details</h3>
                <p className="text-gray-300 mb-3">For first-time deposit:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                  <li>Click "Add New Account"</li>
                  <li>Enter your EasyPaisa/JazzCash account number</li>
                  <li>Enter your account name</li>
                  <li>Save the details</li>
                </ol>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 5: Confirm Payment</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Review your order details</li>
                  <li>Click "Proceed to Pay"</li>
                  <li>A payment page will open</li>
                  <li>Enter your account PIN/password</li>
                  <li>Confirm the transaction</li>
                </ol>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 6: Verification</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Payment will be processed instantly</li>
                  <li>Chips will be added to your account within 2-5 minutes</li>
                  <li>Check your transaction history for confirmation</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gaming-dark/50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4 text-gaming-accent">💡 Deposit Tips</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Start Small - Begin with PKR 50-100 to test the system</li>
                <li>• Save Account Details - Bind your payment method for faster deposits</li>
                <li>• Check Bonuses - Some packages come with extra chips</li>
                <li>• 24/7 Available - Deposit anytime, day or night</li>
                <li>• Keep Receipts - Save transaction IDs for reference</li>
              </ul>
            </div>
          </div>

          {/* Withdrawal Guide */}
          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">Part 2: How to Withdraw Money</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gaming-accent/20 p-4 rounded-lg">
                <p className="text-lg font-bold text-gaming-accent">Minimum Withdrawal: No limit!</p>
              </div>
              <div className="bg-gaming-purple/20 p-4 rounded-lg">
                <p className="text-lg font-bold text-gaming-purple">Maximum: Unlimited</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 1: Check Your Balance</h3>
                <p className="text-gray-300 mb-3">Before withdrawing, check:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong>Total Balance</strong> - Your complete chip balance</li>
                  <li><strong>Withdrawable Balance</strong> - Amount you can withdraw</li>
                  <li><strong>Bonus Balance</strong> - Cannot be withdrawn directly</li>
                </ul>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 2: Open Withdraw Section</h3>
                <p className="text-gray-300">Tap on the "Withdraw" button at the bottom of the screen.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 3: Select Payment Method</h3>
                <p className="text-gray-300">Choose where you want to receive money: EasyPaisa or JazzCash</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 4: Add/Select Your Account</h3>
                <p className="text-gray-300 mb-3">For first-time withdrawal:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                  <li>Click "+Wallet" or "Add Account"</li>
                  <li>Select EasyPaisa or JazzCash</li>
                  <li>Enter your account number (11 digits for mobile wallets)</li>
                  <li>Enter account holder name</li>
                  <li>Save the details</li>
                </ol>
                <p className="text-gray-300 mt-3">If already added, just select your saved account.</p>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 5: Enter Withdrawal Amount</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Type the amount you want to withdraw</li>
                  <li>Make sure it's within your withdrawable balance</li>
                  <li>Double-check the amount</li>
                </ol>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 6: Confirm Withdrawal</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Review all details carefully</li>
                  <li>Click "Submit" or "Proceed"</li>
                  <li>Confirm the withdrawal request</li>
                </ol>
              </div>

              <div className="border-l-4 border-gaming-accent pl-6">
                <h3 className="text-xl font-bold mb-3 text-gaming-accent">Step 7: Processing</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Withdrawal request is processed instantly</li>
                  <li>Money transferred within 5-30 minutes</li>
                  <li>Check your EasyPaisa/JazzCash for confirmation</li>
                  <li>View status in "Transaction History"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Withdrawal Status */}
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-gaming font-bold mb-6 gradient-text">Withdrawal Status Explained</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <p className="font-bold text-yellow-500 mb-2">⏳ Pending</p>
                <p className="text-gray-300 text-sm">Request submitted, being processed</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <p className="font-bold text-blue-500 mb-2">🔄 Processing</p>
                <p className="text-gray-300 text-sm">Payment is being transferred</p>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <p className="font-bold text-green-500 mb-2">✅ Completed</p>
                <p className="text-gray-300 text-sm">Money sent to your account</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <p className="font-bold text-red-500 mb-2">❌ Failed/Rejected</p>
                <p className="text-gray-300 text-sm">Issue occurred, contact support</p>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-gaming font-bold mb-6 gradient-text">Safety and Security Tips</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p className="font-bold mb-1">Never Share Password</p>
                  <p className="text-sm text-gray-400">Keep credentials private</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-bold mb-1">Use Secure Internet</p>
                  <p className="text-sm text-gray-400">Avoid public WiFi for transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-bold mb-1">Verify Account Details</p>
                  <p className="text-sm text-gray-400">Double-check before confirming</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-bold mb-1">Keep Transaction IDs</p>
                  <p className="text-sm text-gray-400">Save for reference and support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Fees */}
          <div className="glass rounded-lg p-8 bg-gaming-accent/10">
            <h3 className="text-2xl font-gaming font-bold mb-4 gradient-text">Transaction Fees</h3>
            <p className="text-lg text-gray-300 mb-4">Good news! 3 Patti Loot does NOT charge any fees for:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gaming-dark/50 p-4 rounded-lg text-center">
                <span className="text-3xl mb-2 block">✓</span>
                <p className="font-bold">Deposits</p>
              </div>
              <div className="bg-gaming-dark/50 p-4 rounded-lg text-center">
                <span className="text-3xl mb-2 block">✓</span>
                <p className="font-bold">Withdrawals</p>
              </div>
              <div className="bg-gaming-dark/50 p-4 rounded-lg text-center">
                <span className="text-3xl mb-2 block">✓</span>
                <p className="font-bold">Maintenance</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">However, your payment provider (EasyPaisa/JazzCash) may charge standard transaction fees.</p>
          </div>

        </div>
      </article>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-gaming font-bold mb-8 text-center gradient-text">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/signup-login" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">📝</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Signup & Login Guide</h3>
              <p className="text-gray-400 text-sm">Create your account and get started</p>
            </Link>
            <Link href="/blog/tips-tricks" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Tips to Win Big</h3>
              <p className="text-gray-400 text-sm">Expert strategies to maximize winnings</p>
            </Link>
            <Link href="/blog/best-games" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
              <span className="text-4xl mb-4 block">🎴</span>
              <h3 className="text-xl font-gaming font-bold mb-2">Best 3 Patti Games</h3>
              <p className="text-gray-400 text-sm">Compare top platforms</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

