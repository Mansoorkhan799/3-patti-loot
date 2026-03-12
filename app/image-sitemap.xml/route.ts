import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';

export async function GET() {
  const images = [
    {
      loc: `${SITE_URL}/`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: '3 Patti Loot Pakistan v1.224 - Official App Logo',
          caption: '3 Patti Loot Pakistan - Free download official APK. Play Teen Patti, Dragon vs Tiger, Rummy, Slots and 25+ games',
        },
        {
          url: `${SITE_URL}/og-image.jpg`,
          title: '3 Patti Loot App Screenshot',
          caption: 'Play and earn real money with 3 Patti Loot gaming app',
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
          title: '3 Patti Loot Logo',
          caption: 'About 3 Patti Loot Pakistan - Most trusted gaming platform',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot-account.webp`,
          title: '3 Patti Loot Account',
          caption: 'Create account and login to 3 Patti Loot',
        },
        {
          url: `${SITE_URL}/3-patti-loot-add-money.webp`,
          title: '3 Patti Loot Deposit',
          caption: 'Deposit money via JazzCash and EasyPaisa',
        },
        {
          url: `${SITE_URL}/3-patti-loot-apk.webp`,
          title: '3 Patti Loot Games',
          caption: 'Best 3 Patti games to play - Dragon Tiger, Teen Patti, Rummy',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/best-games`,
      images: [
        {
          url: `${SITE_URL}/3-patti-loot.webp`,
          title: 'Best 3Patti Games Comparison',
          caption: 'Compare 3 Patti Loot with other gaming apps',
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

