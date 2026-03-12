import { generateSEO, SITE_URL } from "@/lib/seo";

export const metadata = generateSEO({
  title: '3 Patti Loot Disclaimer | Important Legal Information',
  description: '3 Patti Loot disclaimer: Important legal information about online gaming, age restrictions, responsible gaming & terms of use. Read before playing.',
  url: `${SITE_URL}/disclaimer`,
  keywords: [
    '3 patti loot disclaimer',
    'legal information',
    'responsible gaming',
  ],
});

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            Disclaimer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Important information you should know
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">General Disclaimer</h2>
            <p className="text-gray-300">
              The information provided by 3 Patti Loot ("we," "us," or "our") on our website and mobile application 
              is for general informational and entertainment purposes only. All information on the platform is provided 
              in good faith, however we make no representation or warranty of any kind, express or implied, regarding 
              the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Age Restriction</h2>
            <p className="text-gray-300">
              3 Patti Loot is intended for users who are 18 years of age or older. By using our service, you represent 
              and warrant that you are of legal age to form a binding contract and meet all of the foregoing eligibility 
              requirements. If you do not meet all of these requirements, you must not access or use the service.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Entertainment Purpose Only</h2>
            <p className="text-gray-300">
              This platform is designed solely for entertainment purposes. Users should not rely on any information 
              or content on the platform for making real-world decisions without seeking professional advice. The 
              game is meant to be played responsibly and should not be treated as a source of income.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Responsible Gaming</h2>
            <p className="text-gray-300 mb-4">
              We promote responsible gaming and encourage all players to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Set personal limits on time and money spent</li>
              <li>Play for entertainment, not as a way to make money</li>
              <li>Never chase losses</li>
              <li>Take regular breaks</li>
              <li>Seek help if gaming becomes problematic</li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Limitation of Liability</h2>
            <p className="text-gray-300">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred 
              as a result of the use of the service or reliance on any information provided on the service. Your 
              use of the service and your reliance on any information on the service is solely at your own risk.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Fair Play Policy</h2>
            <p className="text-gray-300">
              We are committed to providing a fair gaming environment. Any attempt to manipulate, exploit, or cheat 
              the system will result in immediate account suspension and possible legal action. We use sophisticated 
              algorithms and random number generators to ensure fair play.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Legal Compliance</h2>
            <p className="text-gray-300">
              Users are responsible for ensuring that their use of 3 Patti Loot complies with all applicable laws 
              and regulations in their jurisdiction. Some jurisdictions may have restrictions on online gaming. 
              It is your responsibility to be aware of and comply with such laws.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">External Links Disclaimer</h2>
            <p className="text-gray-300">
              The service may contain links to external websites that are not provided or maintained by us. We do 
              not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external 
              websites and are not responsible for their content.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Technical Issues</h2>
            <p className="text-gray-300">
              While we strive to provide an uninterrupted service, we do not guarantee that the service will be 
              available at all times. Technical issues, maintenance, or other unforeseen circumstances may cause 
              temporary disruptions. We are not liable for any losses incurred during such periods.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Changes to Disclaimer</h2>
            <p className="text-gray-300">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon 
              posting to the website. Your continued use of the service after changes constitutes acceptance of the 
              modified disclaimer.
            </p>
          </div>

          <div className="glass rounded-lg p-8 bg-yellow-500/10 border border-yellow-500/30">
            <h2 className="text-2xl font-gaming font-bold mb-4 text-yellow-500">⚠️ Important Notice</h2>
            <p className="text-gray-300">
              By using 3 Patti Loot, you acknowledge that you have read, understood, and agree to be bound by this 
              disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of our service 
              immediately.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Disclaimer, please contact us:
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:legal@3pattiloot.com" className="text-gaming-accent hover:text-gaming-purple">legal@3pattiloot.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

