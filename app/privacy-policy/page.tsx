import { generateSEO, SITE_URL } from "@/lib/seo";

export const metadata = generateSEO({
  title: '3 Patti Loot Privacy Policy | Your Data Security & Privacy',
  description: 'Read 3 Patti Loot privacy policy. Learn how we protect your personal information, payment data & gaming activity. Your privacy is our priority.',
  url: `${SITE_URL}/privacy-policy`,
  keywords: [
    '3 patti loot privacy',
    'data security',
    'safe gaming app',
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            Privacy Policy
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
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to 3 Patti Loot. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website or use our app and tell you about your privacy rights.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">2. Information We Collect</h2>
            <p className="text-gray-300 mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Identity Data:</strong> username, player ID, date of birth</li>
              <li><strong>Contact Data:</strong> email address, phone number</li>
              <li><strong>Technical Data:</strong> device information, IP address, browser type</li>
              <li><strong>Usage Data:</strong> information about how you use our website and app</li>
              <li><strong>Gaming Data:</strong> game statistics, achievements, transaction history</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>To provide and maintain our service</li>
              <li>To manage your account and gaming experience</li>
              <li>To process transactions and send you confirmations</li>
              <li>To communicate with you about updates and promotions</li>
              <li>To improve our services and develop new features</li>
              <li>To ensure fair play and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">4. Data Security</h2>
            <p className="text-gray-300">
              We have implemented appropriate security measures to prevent your personal data from being accidentally 
              lost, used, or accessed in an unauthorized way. We use industry-standard encryption and security protocols 
              to protect your information.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">5. Data Retention</h2>
            <p className="text-gray-300">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected 
              it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">6. Your Legal Rights</h2>
            <p className="text-gray-300 mb-4">Under certain circumstances, you have rights under data protection laws:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">7. Cookies</h2>
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to track activity on our service and store certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">8. Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may include links to third-party websites, plugins, and applications. Clicking on those 
              links may allow third parties to collect or share data about you. We do not control these third-party 
              websites and are not responsible for their privacy statements.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">10. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:privacy@3pattiloot.com" className="text-gaming-accent hover:text-gaming-purple">privacy@3pattiloot.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

