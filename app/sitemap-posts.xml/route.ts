import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';

export async function GET() {
  // Blog posts with specific dates
  const posts = [
    {
      slug: 'signup-login',
      title: 'How to Signup and Login in 3 Patti Loot',
      date: '2026-03-01',
      priority: 0.8,
    },
    {
      slug: 'deposit-withdraw',
      title: 'How to Deposit and Withdraw Money',
      date: '2026-03-05',
      priority: 0.8,
    },
    {
      slug: 'tips-tricks',
      title: 'Best Tips and Tricks to Win Big',
      date: '2026-03-10',
      priority: 0.8,
    },
    {
      slug: 'best-games',
      title: 'Best 3Patti Games to Play',
      date: '2026-03-15',
      priority: 0.8,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${posts
  .map(
    (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${post.priority}</priority>
    <news:news>
      <news:publication>
        <news:name>3 Patti Loot Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}T00:00:00+00:00</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
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


