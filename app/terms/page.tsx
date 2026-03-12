import { generateSEO, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: '3 Patti Loot Terms of Service | User Agreement & Rules',
  description: 'Read 3 Patti Loot terms of service. Understand user agreement, gaming rules, payment terms, account policies & conditions for using our platform.',
  url: `${SITE_URL}/terms`,
  keywords: [
    '3 patti loot terms',
    'terms of service',
    'user agreement',
  ],
});

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              By accessing or using 3 Patti Loot ("Service"), you agree to be bound by these Terms of Service 
              ("Terms"). If you disagree with any part of the terms, you may not access the Service. These Terms 
              apply to all visitors, users, and others who access or use the Service.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">2. Eligibility</h2>
            <p className="text-gray-300 mb-4">To use our Service, you must:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Be at least 18 years of age or the legal age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the Service under applicable law</li>
              <li>Comply with all local laws regarding online gaming and conduct</li>
              <li>Not have previously been suspended or banned from using the Service</li>
            </ul>
            <p className="text-gray-300 mt-4">
              By using the Service, you represent and warrant that you meet all eligibility requirements.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">3. User Accounts</h2>
            <p className="text-gray-300 mb-4">When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Maintaining the confidentiality of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your contact information is current and accurate</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">4. User Conduct</h2>
            <p className="text-gray-300 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe on the rights of others</li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
              <li>Attempt to hack, reverse engineer, or compromise the Service</li>
              <li>Use bots, scripts, or automated tools to access the Service</li>
              <li>Engage in cheating, fraud, or unfair gameplay practices</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Create multiple accounts to abuse bonuses or promotions</li>
              <li>Share your account credentials with others</li>
              <li>Use the Service to launder money or engage in financial fraud</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">5. Game Rules and Fair Play</h2>
            <p className="text-gray-300 mb-4">
              All games on 3 Patti Loot are governed by specific rules and regulations. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Play fairly and honestly at all times</li>
              <li>Not collude with other players to gain unfair advantages</li>
              <li>Report any bugs, glitches, or unfair practices immediately</li>
              <li>Accept that our random number generators determine game outcomes</li>
              <li>Understand that all decisions made by our system are final</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to void games, withhold winnings, or terminate accounts if we suspect cheating or unfair play.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">6. Payments and Virtual Currency</h2>
            <p className="text-gray-300 mb-4">
              If the Service involves virtual currency or real money transactions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>All transactions are processed securely through approved payment providers</li>
              <li>You are responsible for any fees charged by your payment provider</li>
              <li>Virtual currency has no real-world value and cannot be exchanged for cash</li>
              <li>We reserve the right to modify pricing and virtual currency values</li>
              <li>Refunds are handled on a case-by-case basis according to our refund policy</li>
              <li>Unused virtual currency may expire or be forfeited as per our policies</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">7. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The Service and its original content, features, and functionality are owned by 3 Patti Loot and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-300">
              You may not copy, modify, distribute, sell, or lease any part of our Service or included software without 
              our express written permission. You also may not reverse engineer or attempt to extract the source code of the software.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">8. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or 
              liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Breach of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Requests from law enforcement or government agencies</li>
              <li>Extended periods of inactivity</li>
              <li>Technical or security reasons</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Upon termination, your right to use the Service will immediately cease. You may also terminate your 
              account at any time by contacting us.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall 3 Patti Loot, its directors, employees, partners, agents, suppliers, or affiliates be 
              liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
              <li>Damages resulting from your access to or use of (or inability to use) the Service</li>
              <li>Damages resulting from any conduct or content of third parties on the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">10. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" 
              basis without warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the Service will be uninterrupted, timely, secure, or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any content</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">11. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, 
              without regard to its conflict of law provisions. Our failure to enforce any right or provision of these 
              Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">12. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
              a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-300 mt-4">
              By continuing to access or use our Service after revisions become effective, you agree to be bound by the 
              revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">13. Responsible Gaming</h2>
            <p className="text-gray-300 mb-4">
              We are committed to promoting responsible gaming. We encourage all users to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Set personal limits on time and money spent</li>
              <li>Play for entertainment, not as a source of income</li>
              <li>Never chase losses</li>
              <li>Take regular breaks from gaming</li>
              <li>Seek help if gaming becomes problematic</li>
            </ul>
            <p className="text-gray-300 mt-4">
              If you believe you or someone you know has a gaming problem, please seek professional help immediately.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">14. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
              and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
              applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">15. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-300 mb-2">
              Email: <a href="mailto:legal@3pattiloot.com" className="text-gaming-accent hover:text-gaming-purple">legal@3pattiloot.com</a>
            </p>
            <p className="text-gray-300">
              Or visit our <Link href="/contact" className="text-gaming-accent hover:text-gaming-purple">Contact Page</Link>
            </p>
          </div>

          <div className="glass rounded-lg p-8 bg-gaming-accent/10 border border-gaming-accent/30">
            <h2 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">✓ Acknowledgment</h2>
            <p className="text-gray-300">
              BY USING 3 PATTI LOOT, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND 
              BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

