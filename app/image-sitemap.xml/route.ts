import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';

export async function GET() {
  const images = [
    {
      loc: `${SITE_URL}/`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot - Official Logo | Pakistan Card Game APK Download',
          caption: '3 Patti Loot official logo and app icon. Download 3 Patti Loot APK free for Android - Teen Patti, Rummy, Dragon vs Tiger, Slots. JazzCash & EasyPaisa.',
        },
        {
          url: `${SITE_URL}/3-patti-loot-game-interface.webp`,
          title: '3 Patti Loot Game Interface',
          caption: '3 Patti Loot app game interface - Easy to use design',
        },
        {
          url: `${SITE_URL}/3-patti-loot-refer-and-earn.webp`,
          title: '3 Patti Loot Refer and Earn Program',
          caption: 'Earn commission on every referral - PKR bonus rewards',
        },
      ],
    },
    {
      loc: `${SITE_URL}/about`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Logo - Official App Icon',
          caption: '3 Patti Loot logo - Pakistan gaming app. Teen Patti, Rummy, card games. Free download.',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Blog — All Guides',
          caption: '3 Patti Loot official featured image for blog guides Pakistan',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/best-games`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot - Best 3 Patti Games Comparison',
          caption: '3 Patti Loot vs other apps. Compare Teen Patti, Rummy, Dragon Tiger games in Pakistan.',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/signup-login`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Signup and Login Guide',
          caption: '3 Patti Loot - Create account, login, bind email. Official APK download.',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/deposit-withdraw`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Deposit and Withdraw',
          caption: '3 Patti Loot - JazzCash, EasyPaisa deposits and withdrawals. Pakistan gaming app.',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/tips-tricks`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Tips and Tricks',
          caption: '3 Patti Loot winning strategies - Teen Patti, Rummy, Andar Bahar. Pakistan card game.',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/real-or-fake`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: 'Is 3 Patti Loot Real or Fake',
          caption: '3 Patti Loot legitimacy guide - JazzCash EasyPaisa fake APK Pakistan',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/install-apk-safely`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: 'Install 3 Patti Loot APK Safely',
          caption: '3 Patti Loot safe Android install unknown sources Pakistan',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/earn-money`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: 'How to Earn Money in 3 Patti Loot',
          caption: '3 Patti Loot earn money guide — official featured image',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/features-benefits`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Features and Benefits',
          caption: '3 Patti Loot app features — official featured image',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/payment-methods-jazzcash-easypaisa`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot JazzCash EasyPaisa',
          caption: '3 Patti Loot payment methods — official featured image',
        },
      ],
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
${page.images
  .map(
    (img) => `    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

