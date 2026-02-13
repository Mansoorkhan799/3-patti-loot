import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';

export async function GET() {
  const images = [
    {
      loc: `${SITE_URL}/`,
      images: [
        {
          url: `${SITE_URL}/3%20Patti%20Loot.webp`,
          title: '3 Patti Loot Logo - Pakistan Online Gaming App',
          caption: '3 Patti Loot official logo - Play Teen Patti, Dragon vs Tiger, Rummy, Slots and 25+ games',
        },
        {
          url: `${SITE_URL}/og-image.jpg`,
          title: '3 Patti Loot App Screenshot',
          caption: 'Play and earn real money with 3 Patti Loot gaming app',
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
          url: `${SITE_URL}/3%20Patti%20Loot.webp`,
          title: '3 Patti Loot Logo',
          caption: 'About 3 Patti Loot - Pakistan most trusted gaming platform',
        },
      ],
    },
    {
      loc: `${SITE_URL}/blog/best-games`,
      images: [
        {
          url: `${SITE_URL}/3%20Patti%20Loot.webp`,
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

