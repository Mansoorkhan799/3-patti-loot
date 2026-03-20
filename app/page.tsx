import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { generateSEO, generateFAQSchema, generateImageObjectSchema, SITE_URL } from "@/lib/seo";

// Lazy load Hero component to reduce initial bundle size
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
  loading: () => <div className="h-96 bg-gaming-dark animate-pulse" />,
});

export const metadata = generateSEO({
  title: "3 Patti Loot Pakistan v1.224 Free Download Official APK",
  description: "3 Patti Loot — download the official APK (v1.224) for Android. Teen Patti, Rummy, Dragon vs Tiger & 25+ games. 100% deposit bonus, JazzCash & EasyPaisa withdrawals. Safe install guide & honest review.",
  url: SITE_URL,
  image: `${SITE_URL}/3-patti-loot.webp`,
  keywords: [
    "3 patti loot apk",
    "3 patti loot pakistan",
    "teen patti loot apk download",
    "3 patti loot official",
    "download 3 patti loot android",
    "teen patti game pakistan",
    "online earning app pakistan",
    "jazzcash earning app",
    "easypaisa game app",
    "real money earning app pakistan",
  ],
});

const HOMEPAGE_FAQS = [
  { question: "Can users play 3 Patti Loot without depositing money?", answer: "Yes, you can play games in 3 Patti Loot by using the free bonuses like the Welcome Bonus and Referral Commission." },
  { question: "How do users contact customer support?", answer: "You can contact the 3 Patti Loot support team through live chat, WhatsApp, or other social media platforms." },
  { question: "What makes 3 Patti Loot different from other card games?", answer: "Its simple design, fast transactions, and exciting games make this platform more enjoyable than other apps." },
  { question: "Is 3 Patti Loot safe and legal to use?", answer: "Yes, it is safe to use because this makes sure that your data privacy stays secure. However, the legality depends on your local laws, so always check your region's rules." },
  { question: "Can users lose money while playing?", answer: "Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing." },
  { question: "Is it possible to change the language of 3 Patti Loot?", answer: "Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily." },
  { question: "How do referral rewards work?", answer: "When you share your referral link with others, or when someone joins this app through your link, you can receive a commission." },
  { question: "Is 3 Patti Loot available on iPhone (iOS)?", answer: "This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability." },
];

export default function HomePage() {

  const multiplayerGames = [
    "Tiger Dragon (Hot)", "7 UP Down (Hot)", "Zoo Roulette (Hot)", "Crash",
    "Car Roulette", "Andar Bahar", "Teenpatti 20-20", "Best of Five"
  ];

  const skillGames = [
    "Domino (Hot)", "Rummy (Hot)", "Teen Patti", "Fishing Rush",
    "10 Cards", "Poker", "Ludo", "Black Jack"
  ];

  const slotGames = [
    "Mines (Hot)", "Fruit Line", "777 Bingo", "Rattling GEMS",
    "Video Poker 1, 2", "Wild Energy", "WoW Slot", "God of Fortune"
  ];

  const faqSchema = generateFAQSchema(HOMEPAGE_FAQS);
  const logoImageSchema = generateImageObjectSchema({
    url: `${SITE_URL}/3-patti-loot.webp`,
    name: '3 Patti Loot - Official App Logo',
    description: '3 Patti Loot official logo and app icon. Pakistan\'s most trusted 3 Patti gaming platform - Teen Patti, Rummy, Dragon vs Tiger, Slots. Free APK download.',
  });

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logoImageSchema) }}
      />
      {/* Hero Section */}
      <Hero />

      {/* Download Info Table */}
      <section className="py-12 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-gaming font-bold mb-6 gradient-text text-center">Download Info Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full glass rounded-lg overflow-hidden">
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">App Name</td><td className="py-3 px-4">3Patti Loot</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Developer</td><td className="py-3 px-4">3Patti Loot dev</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Category</td><td className="py-3 px-4">Cards, Game</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Size</td><td className="py-3 px-4">49MB</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Latest Version</td><td className="py-3 px-4">v1.224 (APK)</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Required OS</td><td className="py-3 px-4">Android 5.0+</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Update</td><td className="py-3 px-4">5th January 2026</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Downloads</td><td className="py-3 px-4">600k+</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Rating Count</td><td className="py-3 px-4">300000+</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold text-gaming-accent">Language</td><td className="py-3 px-4">English, Urdu</td></tr>
                <tr><td className="py-3 px-4 font-semibold text-gaming-accent">Price</td><td className="py-3 px-4">Free (0$)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* E-E-A-T: why this site */}
      <section className="py-12 px-4 max-w-4xl mx-auto" aria-labelledby="about-site-heading">
        <div className="glass rounded-lg p-8 border border-gaming-accent/20">
          <h2 id="about-site-heading" className="text-2xl font-gaming font-bold mb-4 gradient-text">
            About this 3 Patti Loot guide (Pakistan)
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This page is an <strong className="text-white">independent information hub</strong> for <strong className="text-gaming-accent">3 Patti Loot</strong> — how the app works, JazzCash &amp; EasyPaisa payments, and safe APK practices. We are not the app developer; always download from <Link href="/" className="text-gaming-accent underline hover:text-white">trusted sources</Link> and read our <Link href="/blog/real-or-fake" className="text-gaming-accent underline hover:text-white">real vs fake</Link> and <Link href="/blog/install-apk-safely" className="text-gaming-accent underline hover:text-white">safe install</Link> guides before installing. Gambling involves risk; play only if it is legal where you live and never bet more than you can afford to lose.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: March 2026 · For adults 18+ · <Link href="/disclaimer" className="underline hover:text-gaming-accent">Disclaimer</Link>
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text text-center">Overview</h2>
        <div className="glass rounded-lg p-8">
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            <strong className="text-white">3 Patti Loot</strong> is a Teen Patti–style real-money gaming app popular in Pakistan. You get card games, slots, and casino-style titles in one Android APK, with deposits and withdrawals through <strong className="text-gaming-accent">JazzCash</strong> and <strong className="text-gaming-accent">EasyPaisa</strong>. The interface is built for quick matches and local wallets — ideal if you want to play 3 Patti Loot on mobile data or older phones.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Below you will find download details, feature lists, screenshots, FAQs, and links to step-by-step guides (signup, payments, tips). Use the table above to confirm the <strong className="text-white">latest 3 Patti Loot version</strong> and file size before you install.
          </p>
        </div>
      </section>

      {/* What is 3 Patti Loot Game */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text">
              What is 3 Patti Loot Game?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-300 mb-4">
                3 Patti Loot Game is an online card game that is based on the classic Teen Patti card game. You can play different games to earn money. It is a safe and easy platform where you can play card games and make good money in a short time. It has become a great opportunity, especially for those people who want to earn money by playing different and interesting games.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                This game became very popular, and people prefer it because of its beautiful design, simple settings, classic themes, and easy options. You can withdraw your winnings or deposit money anytime by using the local and easy payment methods. When you complete your deposit then you can receive a deposit bonus as well.
              </p>
              <p className="text-lg text-gray-300">
                With its attractive visuals, user-friendly design, and exciting offers, this app is one of the most enjoyable and engaging casino-style card games. This app is divided into various sections, including card games, slots, poker, and many others, making it easy to find games that you want to play.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎮", title: "Multiple Game Categories", desc: "Enjoy multiplayer games, skill-based games, and exciting slots with beautiful design and smooth gameplay." },
              { icon: "💰", title: "Real Money Earning", desc: "Earn real cash rewards and bonuses. Withdraw winnings instantly through EasyPaisa and JazzCash." },
              { icon: "📱", title: "Smooth Performance", desc: "Fast performance on all Android devices, even on older models with low storage and slow internet." }
            ].map((feature, idx) => (
              <div key={idx} className="glass rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-gaming-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-gaming font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 3Patti Loot Game so Popular? */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text text-center">Why 3Patti Loot Game so Popular?</h2>
        <div className="glass rounded-lg p-8">
          <p className="text-lg text-gray-300 mb-4">
            The 3 Patti Loot game is very popular because it allows you to earn real money while having fun. It is easy to play because it provides you with simple rules that are very easy to understand, especially for beginners. The design of this app is very beautiful and colorful, which gives you a real casino experience on your device.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Players love this app because you can withdraw and deposit money easily through Easypaisa and Jazzcash without facing any delays. It also includes many exciting games such as Teen Patti, Dragon vs Tiger, Poker, Rummy, and Slots, so that you never feel bored.
          </p>
          <p className="text-lg text-gray-300">
            The other main reason for the popularity of 3 Patti Loot is its daily bonus and rewards that help you earn coins and extra cash. It is very safe and secure and can protect your personal details or money, and work smoothly even on low-storage devices.
          </p>
        </div>
      </section>

      {/* 3Patti Loot App Screenshots */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-gaming font-bold mb-8 gradient-text text-center">3Patti Loot App Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-game-interface.webp" alt="3Patti Loot Game Interface" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">Game Interface</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-apk.webp" alt="3Patti Loot Games Collection" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">Games Collection</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-refer-and-earn.webp" alt="3Patti Loot Bonuses & Rewards" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">Free Bonuses & Rewards</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-add-money.webp" alt="3Patti Loot Deposit Money" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">Deposit Money</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-account.webp" alt="3Patti Loot App Overview" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">App Overview</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image src="/3-patti-loot-withdraw-money.webp" alt="3Patti Loot Withdraw Money" width={300} height={533} className="w-full h-auto object-cover" />
              <p className="p-4 text-center text-gray-400 font-medium">Withdraw Money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why 3Patti Loot Game so Popular */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Why 3Patti Loot Game so Popular?
          </h2>
        </div>
        <div className="max-w-4xl mx-auto glass rounded-lg p-8">
          <p className="text-lg text-gray-300 mb-4">
            The 3 Patti Loot game is very popular because it allows you to earn real money while having fun. It is easy to play because it provides you with simple rules that are very easy to understand, especially for beginners. The design of this app is very beautiful and colorful, which gives you a real casino experience on your device.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Players love this app because you can withdraw and deposit money easily through Easypaisa and Jazzcash without facing any delays. It also includes many exciting games such as Teen Patti, Dragon vs Tiger, Poker, Rummy, and Slots, so that you never feel bored.
          </p>
          <p className="text-lg text-gray-300">
            The other main reason for the popularity of 3 Patti Loot is its daily bonus and rewards that help you earn coins and extra cash. It is very safe and secure and can protect your personal details or money, and work smoothly even on low-storage devices.
          </p>
        </div>
      </section>

      {/* Top Features of 3 Patti Loot */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Top Features of 3 Patti Loot
          </h2>
          <p className="text-xl text-gray-300">
            3 Patti Loot offers amazing features that make it perfect for both beginners and experienced players
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Real Money Earning</h3>
            <p className="text-gray-300">
              3 Patti Loot allows you to earn real cash rewards just by playing the game that you want to play or like. Whether you enjoy teen patti, poker, or rummy, every match provides you with a chance to win money. This app directly transfers your earnings through the local and easy payment methods safely.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Easy Withdraw & Deposit</h3>
            <p className="text-gray-300">
              With 3 Patti Loot, you can manage your money in a super simple or fast way. With just a few steps, you can withdraw or deposit money anytime using local payment methods, such as JazzCash or EasyPaisa. It also ensures you have secure and quick transactions without any delays.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Attractive Interface</h3>
            <p className="text-gray-300">
              This app is designed with a bright, colorful, and modern interface that can attract its users. The background music, smooth animations, and clear layout create an amazing or pleasant experience. Each section of this app is designed very well, so that you can find your favourite game easily.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Popular Games</h3>
            <p className="text-gray-300">
              3 Patti Loot provides you with a wide variety of famous games in one app so that you can enjoy dragon vs tiger, poker, slots, and many other exciting options. Each game of this app has simple rules that make it perfect for both beginners and experienced players.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Daily Bonus</h3>
            <p className="text-gray-300">
              This app rewards you every day with free login bonuses or chips. You can earn extra coins just by opening the app regularly. It also provides special rewards on weekly or festival occasions. These bonuses help you to keep playing even if you do not want to deposit money.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Referral Earning</h3>
            <p className="text-gray-300">
              3 Patti Loot offers you a referral program where you can earn money without playing games. You just need to share your referral link with your friends and invite them to join. When they start playing games, you receive a commission automatically. It is a simple way to make money without investment.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Fast Performance</h3>
            <p className="text-gray-300">
              This app runs smoothly on almost every Android device, even on older models. It does not hang, crash, or use too much storage space. The lightweight design of this app helps it to run faster and load to provide a smooth gameplay. Through this feature, you can switch between games quickly without having any lag.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Safe & Secure Platform</h3>
            <p className="text-gray-300">
              In 3 Patti Loot, your privacy and money are completely safe because it uses a secure payment method and data protection system that keeps everything private. Through this feature, you do not have to worry about losing money or personal information. This app also provides you with a fair gaming environment.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Free to Play</h3>
            <p className="text-gray-300">
              3 Patti Loot is free to download and does not ask for any registration fees. Through this feature, you can start playing games quickly with free chips that are given by the app. This feature is a perfect choice, especially for beginners and those who want to learn before investing real money.
            </p>
          </div>

          <div className="glass rounded-lg p-6">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">24/7 Support</h3>
            <p className="text-gray-300">
              This app also provides you with fast customer support, which helps you anytime. Whether you face a deposit issue or a technical error, this support team responds quickly. You can contact the team directly through the app for quick help. The services of this team are very friendly, professional, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Best Games to Play on 3 Patti Loot */}
      <section id="games" className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Best Games to Play on 3 Patti Loot
            </h2>
            <p className="text-xl text-gray-300">
              Choose from multiplayer games, skill-based games, and exciting slots
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent text-center">Multiplayer Games</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {multiplayerGames.map((game, index) => (
                  <div key={index} className="glass rounded-lg p-4 text-center hover:bg-gaming-accent/10 transition-all cursor-pointer">
                    <span className="text-2xl mb-2 block">🎴</span>
                    <span className="font-gaming font-bold text-sm">{game}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent text-center">Skill Base Games</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillGames.map((game, index) => (
                  <div key={index} className="glass rounded-lg p-4 text-center hover:bg-gaming-accent/10 transition-all cursor-pointer">
                    <span className="text-2xl mb-2 block">🎯</span>
                    <span className="font-gaming font-bold text-sm">{game}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent text-center">Slots</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {slotGames.map((game, index) => (
                  <div key={index} className="glass rounded-lg p-4 text-center hover:bg-gaming-accent/10 transition-all cursor-pointer">
                    <span className="text-2xl mb-2 block">🎰</span>
                    <span className="font-gaming font-bold text-sm">{game}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Start with 3 Patti Loot */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            How Can We Start with 3 Patti Loot?
          </h2>
          <p className="text-xl text-gray-300">
            Follow these simple steps to download and install 3 Patti Loot APK on your Android device
          </p>
          <p className="text-gray-400 mt-3">
            📖 Need help? Read our <Link href="/blog/signup-login" className="text-gaming-accent hover:text-gaming-purple underline">complete signup and login guide</Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="max-w-sm mx-auto md:max-w-none w-full">
            <div className="relative w-full" style={{ aspectRatio: '1/2', maxWidth: '400px' }}>
              <Image 
                src="/3-patti-loot-apk.webp" 
                alt="3 Patti Loot App Screenshot" 
                fill
                className="rounded-lg shadow-2xl object-contain"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-gaming font-bold mb-4 gradient-text">Download Now & Get 100% Bonus!</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of players earning real money daily. Download the app, create your account, 
              and start playing your favorite card games instantly with 100% deposit bonus!
            </p>
            <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary w-full text-center block">
              📱 Download APK Now
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-lg p-8 mb-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Open Official Website</h3>
                  <p className="text-gray-400">Firstly, open the official website of 3 Patti Loot and download the APK file to your device.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Install the APK</h3>
                  <p className="text-gray-400">Once downloaded then click on the downloaded APK file to start the installation by allowing the Unknown Sources.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Open the App</h3>
                  <p className="text-gray-400">Once installation is complete, click on it to open the 3 Patti Loot app.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Login or Play as Guest</h3>
                  <p className="text-gray-400">When the app opens then log in with your mobile number or just play as a guest.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Get Welcome Bonus</h3>
                  <p className="text-gray-400">When you log in, you will get free chips or welcome bonuses to start playing the game.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gaming-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-gaming-accent">6</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Start Playing</h3>
                  <p className="text-gray-400">Choose a table or game that you want to play, and start enjoying the game.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-10 py-4 inline-block">
              📱 Download 3 Patti Loot APK Now
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Get 100% Deposit Bonus | Android 5.0+ Required | 49MB Size
            </p>
          </div>
        </div>
      </section>

      {/* What's New in the Latest Version */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            What&apos;s New in the Latest Version of the 3Patti Loot?
          </h2>
        </div>
        <div className="glass rounded-lg p-8">
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> In the latest version, the game looks better with improved graphics and smooth animations.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> Provide fast performance so that the app opens quickly and runs smoothly without lag.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> Its menu and layout are simple, which makes it very easy, especially for new users.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> In the latest versions, more games are added, such as Dragon vs Tiger, Rummy, and others.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> The withdrawal or deposit options work faster and smoothly in the latest version.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> In the latest version, better security measures can be used that can protect your account and money.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> New bonuses and referral rewards provide you with more chances to earn money.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> Old errors or app issues are removed to offer a smooth gaming experience.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> The background music or game sounds improve the app and provide more fun.</li>
            <li className="flex gap-3"><span className="text-gaming-accent">•</span> The new VIP system gives you extra prizes and benefits that help you stay active.</li>
          </ul>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text text-center">System Requirement to Download & Install 3Patti Loot App</h2>
          <div className="overflow-x-auto">
            <table className="w-full glass rounded-lg overflow-hidden text-center">
              <thead>
                <tr className="border-b border-gaming-accent/30">
                  <th className="py-3 px-4 text-gaming-accent">System</th>
                  <th className="py-3 px-4 text-gaming-accent">Minimum</th>
                  <th className="py-3 px-4 text-gaming-accent">Recommended</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold">Operating System</td><td className="py-3 px-4">Android 4.1</td><td className="py-3 px-4">Android 8.0 or above</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold">RAM</td><td className="py-3 px-4">2GB or more</td><td className="py-3 px-4">4GB or more</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold">Storage Space</td><td className="py-3 px-4">At least 500 MB free</td><td className="py-3 px-4">1GB free space</td></tr>
                <tr className="border-b border-gray-700"><td className="py-3 px-4 font-semibold">Processor</td><td className="py-3 px-4">Quad-core 1.5 GHz</td><td className="py-3 px-4">Octa-core 2.0 GHz</td></tr>
                <tr><td className="py-3 px-4 font-semibold">Internet</td><td className="py-3 px-4">Stable 3G or WiFi</td><td className="py-3 px-4">Fast & stable 4G or WiFi</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Register & Login on 3 Patti Loot */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              How to Register & Login on 3 Patti Loot?
            </h2>
            <p className="text-xl text-gray-300">
              Simple registration and login process to start playing instantly
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-4 text-gaming-accent">Register Method</h3>
              <ol className="space-y-3 list-decimal list-inside text-gray-300">
                <li>Firstly, open the 3 Patti Loot app on your device</li>
                <li>On the homescreen, click on the Register or Sign Up option</li>
                <li>Now, enter your valid mobile number or email address</li>
                <li>Set a strong password that can never be accessed easily</li>
                <li>Enter the OTP that you can receive through phone or email for verification</li>
                <li>Once verification is complete then your account will be created successfully</li>
              </ol>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-4 text-gaming-accent">Login Method</h3>
              <p className="text-gray-300 mb-4">
                After registration, the next step is to log in. Follow the given steps:
              </p>
              <ol className="space-y-3 list-decimal list-inside text-gray-300">
                <li>Open the 3 Patti Loot app on your device</li>
                <li>Click on the Login button on the homescreen</li>
                <li>Enter your registered mobile number, email, or password</li>
                <li>Make sure that your entered details are correct</li>
                <li>Once confirmed, tap on the Sign in or Login option</li>
                <li>If you forget your password, then use Forgot Password to reset it</li>
                <li>Once logging is complete then you can start playing games</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Deposit & Withdraw Money */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            Ways to Deposit & Withdraw Money in 3 Patti Loot
          </h2>
          <p className="text-xl text-gray-300">
            Use JazzCash or EasyPaisa for quick and secure transactions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass rounded-lg p-6 text-center">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Jazzcash</h3>
            <p className="text-gray-300">
              Jazzcash is one of the most trusted and secure mobile banking services that allows you to deposit money quickly into your gaming account and start playing games quickly. It&apos;s a fast and safe transaction system that allows you to withdraw your winnings directly into your account wallet. The best part of this method is that you don&apos;t have to wait a long time because the transactions are completed within seconds. This makes the Jazzcash method more convenient for those who want quick transactions.
            </p>
          </div>

          <div className="glass rounded-lg p-6 text-center">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gaming-accent">Easypaisa</h3>
            <p className="text-gray-300">
              Easypaisa is another secure and most commonly used payment method that is similar to the JazzCash method. It allows you to deposit or withdraw money without any difficulty. Through this method, you can add funds to your game account and transfer winnings to your Easypaisa wallet in just a few steps. The process of this method is very safe, reliable, and suitable for all types of users. With Easypaisa, you can make your gaming transactions anytime, anywhere, which makes it one of the most comfortable options for transactions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              How to Deposit Money in the 3 Patti Loot App?
            </h2>
            <div className="glass rounded-lg p-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">1.</span>
                  <span>First, open the 3 Patti Loot app on your device and log in</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">2.</span>
                  <span>Now, click on the Wallet option that is available on the homescreen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">3.</span>
                  <span>In this wallet section, click on the Deposit option</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">4.</span>
                  <span>Choose a payment method that you want to use</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">5.</span>
                  <span>Enter the amount that you want to deposit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">6.</span>
                  <span>Click on the confirm option and wait to complete it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">7.</span>
                  <span>Once complete, the balance will show in your game wallet</span>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-gaming font-bold mb-6 gradient-text">
              How to Withdraw Money in 3 Patti Loot?
            </h2>
            <div className="glass rounded-lg p-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">1.</span>
                  <span>Open the 3 Patti Loot app and log in to your account</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">2.</span>
                  <span>Click on the Wallet option that is available on the main screen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">3.</span>
                  <span>In the wallet section, click on the Withdrawal option</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">4.</span>
                  <span>Choose your payment method, like JazzCash or EasyPaisa</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">5.</span>
                  <span>Now enter the amount that you want to withdraw</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">6.</span>
                  <span>Enter some required details, like the account number</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">7.</span>
                  <span>Double-check all entered details and click on Confirm</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">8.</span>
                  <span>Wait a few seconds to complete the withdrawal process</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gaming-accent font-bold">9.</span>
                  <span>Once complete, that money will be shown in your selected payment method</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* About the Safety & Security of the 3Patti Loot */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text text-center">
            About the Safety & Security of the 3Patti Loot
          </h2>
          <div className="glass rounded-lg p-8">
            <p className="text-lg text-gray-300 mb-4">
              3 Patti Loot is an online gaming platform that provides you with a safe and secure environment. It uses basic security features such as data encryption or SSL certificates that can protect your information. This app also supports local payment options such as JazzCash or Easy Paisa, which can make the transactions safer and secure.
            </p>
            <p className="text-lg text-gray-300">
              However, this app is not officially available on the Google Play Store and may come with some risks, such as malware or scams. So, it is important to make sure that you can download it from official, safe, and secure sources. Always avoid sharing your sensitive personal information or banking details.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for New Players by Joining 3 Patti Loot */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Benefits for New Players by Joining 3 Patti Loot
            </h2>
            <p className="text-xl text-gray-300">
              Get amazing bonuses and rewards when you join 3 Patti Loot
            </p>
          </div>

          <div className="mb-12">
            <Image 
              src="/3-patti-loot-refer-and-earn.webp" 
              alt="Refer and Earn Commission" 
              width={800}
              height={600}
              className="rounded-lg shadow-2xl mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-gaming font-bold mb-6 text-gaming-accent text-center">New Player Welcome Bonus</h3>
              <p className="text-gray-300 mb-6 text-center">
                3Patti offers 100% recharge bonus for all new fresh users on their first deposit in this game
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gaming-accent/30">
                      <th className="py-3 px-4 text-gaming-accent">Deposit Amount (PKR)</th>
                      <th className="py-3 px-4 text-gaming-accent">Bonus Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">100</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">1,000</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">1,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">5,000</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">5,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">10,000</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">10,000</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">20,000</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">20,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">100,000</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">100,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-gaming font-bold mb-6 text-gaming-accent text-center">Recharge Rebate</h3>
              <p className="text-gray-300 mb-6 text-center">
                3Patti Loot game is also offering huge recharge rebate bonuses for every player when they deposit amount
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gaming-accent/30">
                      <th className="py-3 px-4 text-gaming-accent">Rebate</th>
                      <th className="py-3 px-4 text-gaming-accent">Recharge Required</th>
                      <th className="py-3 px-4 text-gaming-accent">Required Wager</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 text-gaming-accent font-bold">5%</td>
                      <td className="py-3 px-4">3,000 PKR</td>
                      <td className="py-3 px-4">2x</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 text-gaming-accent font-bold">10%</td>
                      <td className="py-3 px-4">5,000 PKR</td>
                      <td className="py-3 px-4">3x</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 text-gaming-accent font-bold">15%</td>
                      <td className="py-3 px-4">8,000 PKR</td>
                      <td className="py-3 px-4">4x</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 text-gaming-accent font-bold">20%</td>
                      <td className="py-3 px-4">10,000 PKR</td>
                      <td className="py-3 px-4">5x</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 text-gaming-accent font-bold">25%</td>
                      <td className="py-3 px-4">20,000 PKR</td>
                      <td className="py-3 px-4">6x</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gaming-accent font-bold">30%</td>
                      <td className="py-3 px-4">50,000 PKR</td>
                      <td className="py-3 px-4">7x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-gaming font-bold mb-6 text-gaming-accent text-center">Big Rebate on Recharge</h3>
              <p className="text-gray-300 mb-6 text-center">
                This type of reward is only available for deposit of minimum 3000PKR or more than it. It also depends upon VIP Level with increasing rebate bonus. It can be claimed every day.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-center">
                  <thead>
                    <tr className="border-b border-gaming-accent/30">
                      <th className="py-3 px-4 text-gaming-accent">VIP Level</th>
                      <th className="py-3 px-4 text-gaming-accent">Rebate</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V1-V2</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">1% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V3-V4</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">2% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V5-V6</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">3% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V7-V8</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">4% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V9-V10</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">5% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V11-V12</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">6% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V13-V14</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">7% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V15-V16</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">8% rebate</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">V17-V18</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">9% rebate</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">V19-V20</td>
                      <td className="py-3 px-4 text-gaming-accent font-bold">10% rebate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Tricks to Earn Maximum on 3 Patti Loot Game */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Tips & Tricks to Earn Maximum on 3 Patti Loot Game
            </h2>
            <p className="text-xl text-gray-300">
              Follow these expert tips to maximize your earnings on 3 Patti Loot
            </p>
            <p className="text-gray-400 mt-3">
              🎯 Want expert strategies? Read our <Link href="/blog/tips-tricks" className="text-gaming-accent hover:text-gaming-purple underline">advanced tips and tricks guide</Link>
            </p>
          </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Start with Small Bets</h3>
                <p className="text-gray-400 text-sm">Always start a game with a small investment because it will help you to understand the game rules and overcome the risk of losing money. When you become confident, then increase your bet.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎁</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Use Bonuses Wisely</h3>
                <p className="text-gray-400 text-sm">3 Patti Loot offers you daily login bonuses, referral bonuses, or deposit rewards. It helps you to play more games without spending your one money or earning extra money.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Play Popular Games</h3>
                <p className="text-gray-400 text-sm">Focus on high-earning games such as Dragon vs Tiger or Teen Patti Classic that provide you with higher winning chances, and also attract players with better opportunities to earn.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👥</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Invite Friends</h3>
                <p className="text-gray-400 text-sm">Use the referral link system to invite friends every time your friends join, and then you can earn commission. The more friends you invite, the higher you can become.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📅</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Stay Active Daily</h3>
                <p className="text-gray-400 text-sm">Regularly log in to the app to collect the daily rewards or spin bonuses. Always stay active because it will increase your bonus balance or improve your chances of winning big.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Withdraw on Time</h3>
                <p className="text-gray-400 text-sm">When you earn a good amount then do not delay withdrawal. Always transfer your winnings as soon as possible through Jazcash or EasyPaisa to keep your money safe.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎮</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Learn from Practice Mode</h3>
                <p className="text-gray-400 text-sm">Before playing games with real money, try the free or demo mode as practice. This helps you to understand the gameplay easily and develop the winning strategies without any risk.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🧘</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Keep the Emotions in Control</h3>
                <p className="text-gray-400 text-sm">Never play games with frustration or greed. Always stay calm or make smart decisions during the game because it helps you to avoid unnecessary losses.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">👨‍🏫</span>
              <div>
                <h3 className="font-bold text-lg mb-2">With Expert Players</h3>
                <p className="text-gray-400 text-sm">Observe how other players make the moves. Through this, you can learn new techniques or strategies and timing from them to improve your skills.</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Avoid Fake Apps</h3>
                <p className="text-gray-400 text-sm">Always download the original 3 Patti Loot app through official or trusted sources because fake links or websites can steal your personal data or money.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Can users play 3 Patti Loot without depositing money?</h3>
              <p className="text-gray-300">Yes, you can play games in 3 Patti Loot by using the free bonuses like the Welcome Bonus and Referral Commission.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">How do users contact customer support?</h3>
              <p className="text-gray-300">You can contact the 3 Patti Loot support team through live chat, WhatsApp, or other social media platforms.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">What makes 3 Patti Loot different from other card games?</h3>
              <p className="text-gray-300">Its simple design, fast transactions, and exciting games make this platform more enjoyable than other apps.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Is 3 Patti Loot safe and legal to use?</h3>
              <p className="text-gray-300">Yes, it is safe to use because this makes sure that your data privacy stays secure. However, the legality depends on your local laws, so always check your region's rules.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Can users lose money while playing?</h3>
              <p className="text-gray-300">Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Is it possible to change the language of 3 Patti Loot?</h3>
              <p className="text-gray-300">Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">How do referral rewards work?</h3>
              <p className="text-gray-300">When you share your referral link with others, or when someone joins this app through your link, you can receive a commission.</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gaming-accent">Is 3 Patti Loot available on iPhone (iOS)?</h3>
              <p className="text-gray-300">This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Guides & Blog */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-gaming font-bold mb-4 gradient-text">Latest Guides & Blog</h2>
          <p className="text-xl text-gray-300">Explore our comprehensive guides to learn everything about 3Patti Loot:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/real-or-fake" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">Is 3 Patti Loot Real or Fake?</h3>
            <p className="text-gray-400 text-sm">Legitimacy, payments, and how to spot fake APKs</p>
          </Link>
          <Link href="/blog/install-apk-safely" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">Install 3 Patti Loot APK Safely</h3>
            <p className="text-gray-400 text-sm">Unknown sources, permissions, and official download tips</p>
          </Link>
          <Link href="/blog/features-benefits" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">3 Patti Loot App Features &amp; Benefits</h3>
            <p className="text-gray-400 text-sm">Games, wallets, bonuses, and what you get in the APK</p>
          </Link>
          <Link href="/blog/best-games" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">How to Play 3Patti Loot</h3>
            <p className="text-gray-400 text-sm">Complete beginner guide with rules and tips</p>
          </Link>
          <Link href="/blog/earn-money" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">How to Earn Money in 3 Patti Loot</h3>
            <p className="text-gray-400 text-sm">Bonuses, referrals, rewards, and realistic earning tips</p>
          </Link>
          <Link href="/blog/signup-login" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">How to Create Account and Login</h3>
            <p className="text-gray-400 text-sm">Step-by-step registration and login guide</p>
          </Link>
          <Link href="/blog/payment-methods-jazzcash-easypaisa" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">Payment Methods — JazzCash &amp; EasyPaisa</h3>
            <p className="text-gray-400 text-sm">Wallet comparison; pair with our full deposit &amp; withdraw guide</p>
          </Link>
          <Link href="/blog/deposit-withdraw" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">Deposit &amp; Withdraw Step-by-Step</h3>
            <p className="text-gray-400 text-sm">Screenshots-style flow for adding and cashing out PKR</p>
          </Link>
          <Link href="/blog/tips-tricks" className="glass rounded-lg p-6 hover:bg-gaming-accent/10 transition-all">
            <h3 className="text-xl font-gaming font-bold mb-2 text-gaming-accent">Tips to Win in 3Patti Loot</h3>
            <p className="text-gray-400 text-sm">Expert strategies and winning techniques</p>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/blog" className="btn-primary text-lg inline-block">View All Blog Posts →</Link>
        </div>
      </section>

      {/* How Can We Contact the 3Patti Loot? */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-gaming font-bold mb-8 gradient-text text-center">How Can We Contact the 3Patti Loot?</h2>
          <p className="text-gray-300 text-center mb-8">To contact the customer support team of 3 Patti Loot, you can use the given methods:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-3 text-gaming-accent text-center">Live Chat</h3>
              <p className="text-gray-300 text-sm">3 Patti Loot provides you with a live chat feature inside the app so that you can directly talk to the support team if you face any problems. Live chat is the fastest way to get support without leaving the app.</p>
            </div>
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-3 text-gaming-accent text-center">WhatsApp</h3>
              <p className="text-gray-300 text-sm">You can also contact the support team through WhatsApp. Use the number provided in the app to send your problem. This support team replies with instructions or solutions.</p>
            </div>
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-gaming font-bold mb-3 text-gaming-accent text-center">FAQs</h3>
              <p className="text-gray-300 text-sm">This app also dedicates a FAQs section where common questions are given with their answers. Check this section before contacting support to save time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-gaming font-bold mb-8 gradient-text text-center">Pros & Cons of using 3Patti Loot</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-lg p-6">
            <h3 className="text-xl font-gaming font-bold mb-4 text-gaming-accent text-center">Pros</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Very simple and fun to play</li>
              <li>• Earn money with a small investment</li>
              <li>• Jazzcash and Easypaisa make payment easy</li>
              <li>• Many different games for enjoyment</li>
              <li>• Fast withdrawal of your money</li>
              <li>• Very easy to use and quick to start</li>
              <li>• Daily rewards and bonuses</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-6">
            <h3 className="text-xl font-gaming font-bold mb-4 text-red-400 text-center">Cons</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Risk of losing money</li>
              <li>• Sometimes withdrawals take time</li>
              <li>• Gameplay can be addictive</li>
              <li>• Run slow on weak phones</li>
              <li>• No legal Support</li>
              <li>• No Financial Freedom</li>
              <li>• Gameplay can be complicated</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-16 px-4 bg-gaming-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-gaming font-bold mb-6 gradient-text">
            Final Thoughts
          </h2>
          <div className="glass rounded-lg p-8 text-left">
            <p className="text-lg text-gray-300 mb-4">
              3 Patti Loot is one of the most popular online card games in the world. It not only provides you with fun or entertainment but also provides you with a great chance to earn money if you play games wisely. This app provides you with a simple and user-friendly interface that can make it easy, especially for beginners, to play games.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              The deposit or withdrawal system through JazzCash or EasyPaisa is very convenient, which makes this platform very easy to use. If you play responsibly, make plans with smart strategies, and focus on your skill rather than luck, 3 Patti Loot can become a more exciting or rewarding gaming experience.
            </p>
            <p className="text-lg text-gray-300">
              So, download the game, and start playing your favorite games to earn real cash for free. With its attractive design, fun background music, and engaging look, 3 Patti Loot is the perfect app for both entertainment and earning.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gaming-accent/20 to-gaming-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download 3 Patti Loot APK now and get 100% deposit bonus instantly!
          </p>
          <a href="https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000" className="btn-primary text-lg px-12 py-6 mb-4 inline-block">
            📱 Download 3 Patti Loot APK - FREE
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Android 5.0+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>49MB File Size</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Free Download</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gaming-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>100% Bonus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

