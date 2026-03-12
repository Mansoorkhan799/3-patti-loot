import { generateSEO, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: '3 Patti Loot DMCA Policy | Copyright Information',
  description: '3 Patti Loot DMCA policy and copyright information. Learn about intellectual property rights, content usage & how to report copyright infringement.',
  url: `${SITE_URL}/dmca`,
  keywords: [
    '3 patti loot dmca',
    'copyright policy',
  ],
});

export default function DMCAPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            DMCA Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Digital Millennium Copyright Act Compliance
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Copyright Policy</h2>
            <p className="text-gray-300">
              3 Patti Loot ("we," "us," or "our") respects the intellectual property rights of others and expects 
              our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), 
              we will respond expeditiously to claims of copyright infringement committed using our website or 
              mobile application that are reported to our designated copyright agent.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Notice of Copyright Infringement</h2>
            <p className="text-gray-300 mb-4">
              If you are a copyright owner, or authorized on behalf of one, and you believe that copyrighted work 
              has been copied in a way that constitutes copyright infringement on our Service, you may submit a 
              notification pursuant to the DMCA by providing our copyright agent with the following information in writing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Identification of the copyrighted work:</strong> A detailed description of the copyrighted 
                work that you claim has been infringed, or if multiple copyrighted works are covered by a single 
                notification, a representative list of such works.
              </li>
              <li>
                <strong>Identification of the infringing material:</strong> A description of where the material that 
                you claim is infringing is located on our Service, with enough detail that we may find it (including 
                URL, screenshots, or other specific location information).
              </li>
              <li>
                <strong>Your contact information:</strong> Your address, telephone number, and email address.
              </li>
              <li>
                <strong>Statement of good faith belief:</strong> A statement that you have a good faith belief that 
                use of the material in the manner complained of is not authorized by the copyright owner, its agent, 
                or the law.
              </li>
              <li>
                <strong>Statement of accuracy:</strong> A statement that the information in the notification is 
                accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner.
              </li>
              <li>
                <strong>Physical or electronic signature:</strong> A physical or electronic signature of the copyright 
                owner or a person authorized to act on their behalf.
              </li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Filing a DMCA Notice</h2>
            <p className="text-gray-300 mb-4">
              You may submit your DMCA notice to our designated copyright agent at:
            </p>
            <div className="bg-gaming-dark/50 p-6 rounded-lg border border-gaming-accent/20">
              <p className="text-gray-300 mb-2"><strong>Copyright Agent</strong></p>
              <p className="text-gray-300 mb-2">3 Patti Loot</p>
              <p className="text-gray-300 mb-2">
                Email: <a href="mailto:dmca@3pattiloot.com" className="text-gaming-accent hover:text-gaming-purple">dmca@3pattiloot.com</a>
              </p>
              <p className="text-gray-300 mb-2">
                Subject Line: "DMCA Takedown Request"
              </p>
            </div>
            <p className="text-gray-300 mt-4">
              <strong>Important:</strong> Please be aware that under Section 512(f) of the DMCA, any person who 
              knowingly materially misrepresents that material or activity is infringing may be subject to liability.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Counter-Notification</h2>
            <p className="text-gray-300 mb-4">
              If you believe that your content that was removed (or to which access was disabled) is not infringing, 
              or that you have authorization from the copyright owner, the copyright owner's agent, or pursuant to 
              the law, to post and use the material, you may send a counter-notification containing the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Your physical or electronic signature</li>
              <li>Identification of the content that has been removed or disabled and the location where it appeared before removal</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the content was removed or disabled as a result of mistake or misidentification</li>
              <li>Your name, address, telephone number, and email address</li>
              <li>A statement that you consent to the jurisdiction of the federal court in your jurisdiction and that you will accept service of process from the person who provided notification of the alleged infringement</li>
            </ul>
            <p className="text-gray-300 mt-4">
              If a counter-notice is received, we may send a copy to the original complaining party informing them 
              that we may replace the removed content or cease disabling it in 10 business days. Unless the copyright 
              owner files an action seeking a court order against the user, the removed content may be replaced, or 
              access to it restored, in 10 to 14 business days after receipt of the counter-notice.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Repeat Infringer Policy</h2>
            <p className="text-gray-300">
              In accordance with the DMCA and other applicable laws, we have adopted a policy of terminating, in 
              appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. 
              We may also, at our sole discretion, limit access to our Service and/or terminate the accounts of any 
              users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">What Happens After We Receive Your Notice</h2>
            <p className="text-gray-300 mb-4">
              Upon receiving a valid DMCA notice, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Review the notice to ensure it meets DMCA requirements</li>
              <li>Remove or disable access to the allegedly infringing material</li>
              <li>Notify the user who posted the content about the removal</li>
              <li>Provide the user with information about filing a counter-notification</li>
              <li>Take appropriate action against repeat infringers as per our policy</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Please note that we may forward your DMCA notice, including your contact information, to the user who 
              posted the allegedly infringing content.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">False Claims</h2>
            <p className="text-gray-300">
              Please be advised that making false claims may result in legal liability. Before you submit a DMCA 
              notice, you should ensure that you are the copyright owner or authorized to act on behalf of the 
              copyright owner, and that you have a good faith belief that the use of the material is not authorized.
            </p>
            <p className="text-gray-300 mt-4">
              Under Section 512(f) of the DMCA, anyone who knowingly materially misrepresents that material or 
              activity is infringing or was removed or disabled by mistake may be subject to liability for damages, 
              including costs and attorneys' fees.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Our Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on 3 Patti Loot, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Game design, graphics, and artwork</li>
              <li>Software code and algorithms</li>
              <li>Text, images, and multimedia content</li>
              <li>Logos, trademarks, and branding</li>
              <li>User interface and experience design</li>
            </ul>
            <p className="text-gray-300 mt-4">
              ...is owned by or licensed to 3 Patti Loot and is protected by international copyright, trademark, 
              patent, trade secret, and other intellectual property laws. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">User Content Rights</h2>
            <p className="text-gray-300 mb-4">
              As a user of our Service, you retain all rights to any content you submit, post, or display. However, 
              by submitting content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use, reproduce, and distribute your content on our platform</li>
              <li>Modify or adapt your content for technical requirements</li>
              <li>Display your content to other users of the Service</li>
            </ul>
            <p className="text-gray-300 mt-4">
              You represent and warrant that you own or have the necessary rights to all content you submit and that 
              such content does not infringe on any third party's rights.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Time Frame for Response</h2>
            <p className="text-gray-300">
              We strive to respond to valid DMCA notices as quickly as possible, typically within 1-3 business days. 
              However, the time frame may vary depending on the complexity of the case and the volume of notices received. 
              We appreciate your patience and will keep you informed throughout the process.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Changes to This Policy</h2>
            <p className="text-gray-300">
              We reserve the right to modify this DMCA policy at any time. Any changes will be effective immediately 
              upon posting to our website. Your continued use of the Service after changes are posted constitutes 
              your acceptance of the modified policy.
            </p>
          </div>

          <div className="glass rounded-lg p-8 bg-red-500/10 border border-red-500/30">
            <h2 className="text-2xl font-gaming font-bold mb-4 text-red-500">⚠️ Important Warning</h2>
            <p className="text-gray-300">
              Filing a false or frivolous DMCA notice may result in legal consequences, including liability for 
              damages, costs, and attorney's fees. Please ensure you have a valid claim before submitting a DMCA notice.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Additional Resources</h2>
            <p className="text-gray-300 mb-4">
              For more information about copyright and the DMCA, please visit:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <a href="https://www.copyright.gov/" target="_blank" rel="noopener noreferrer" className="text-gaming-accent hover:text-gaming-purple">
                  U.S. Copyright Office
                </a>
              </li>
              <li>
                <a href="https://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer" className="text-gaming-accent hover:text-gaming-purple">
                  Full Text of the DMCA
                </a>
              </li>
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-gaming font-bold mb-4 gradient-text">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For DMCA notices and copyright-related inquiries:
            </p>
            <div className="bg-gaming-dark/50 p-6 rounded-lg border border-gaming-accent/20">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> <a href="mailto:dmca@3pattiloot.com" className="text-gaming-accent hover:text-gaming-purple">dmca@3pattiloot.com</a>
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Subject:</strong> DMCA Notice or Counter-Notice
              </p>
            </div>
            <p className="text-gray-300 mt-4">
              For general inquiries, please visit our <Link href="/contact" className="text-gaming-accent hover:text-gaming-purple">Contact Page</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

