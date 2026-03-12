import { generateSEO, SITE_URL } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: 'About 3 Patti Loot | Pakistan\'s #1 Online Gaming Platform',
  description: 'Learn about 3 Patti Loot - Pakistan\'s most trusted online card gaming app. 28+ games, instant withdrawals, 24/7 support. Discover our mission to provide safe & exciting gaming.',
  url: `${SITE_URL}/about`,
  keywords: [
    'about 3 patti loot',
    '3 patti loot company',
    'teen patti loot info',
    'trusted gaming app pakistan',
  ],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-gaming-accent/10 to-gaming-purple/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-gaming font-bold mb-4 gradient-text">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover the story behind 3 Patti Loot
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          <div className="glass rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Who We Are</h2>
            <p className="text-lg text-gray-300 mb-4">
              3 Patti Loot is a leading online card gaming platform that brings the excitement 
              of Teen Patti to players around the world. We are passionate about creating an 
              authentic and thrilling gaming experience that combines traditional card gaming 
              with modern technology.
            </p>
            <p className="text-lg text-gray-300">
              Our platform is designed to provide a safe, fair, and entertaining environment 
              where players can enjoy their favorite card games while connecting with friends 
              and fellow gaming enthusiasts.
            </p>
          </div>

          <div className="glass rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Our Mission</h2>
            <p className="text-lg text-gray-300">
              To provide the best online Teen Patti gaming experience by combining cutting-edge 
              technology, fair gameplay, and exceptional customer service. We strive to create 
              a community where players can enjoy their favorite games in a secure and 
              entertaining environment.
            </p>
          </div>

          <div className="glass rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">🔒 Secure Platform</h3>
                <p className="text-gray-300">Your data and transactions are protected with industry-leading security measures.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">⚡ Fast & Smooth</h3>
                <p className="text-gray-300">Experience lag-free gameplay with our optimized servers and technology.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">🎲 Fair Play</h3>
                <p className="text-gray-300">We ensure 100% fair gameplay with certified random number generators.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">🎁 Daily Rewards</h3>
                <p className="text-gray-300">Enjoy daily bonuses, special promotions, and exciting tournaments.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">👥 Active Community</h3>
                <p className="text-gray-300">Join thousands of players and make new friends while playing.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gaming-accent mb-2">📞 24/7 Support</h3>
                <p className="text-gray-300">Our dedicated support team is always ready to help you.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-8">
            <h2 className="text-3xl font-gaming font-bold mb-4 gradient-text">Contact Us</h2>
            <p className="text-lg text-gray-300 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

