// Quick Indexing Utilities for Fast Google Rankings

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';

/**
 * Generate IndexNow API request for instant indexing
 * IndexNow is supported by Bing, Yandex, and others
 */
export async function submitToIndexNow(url: string) {
  const indexNowKey = process.env.INDEXNOW_KEY;
  
  if (!indexNowKey) {
    console.warn('IndexNow key not configured');
    return null;
  }

  const endpoint = 'https://api.indexnow.org/indexnow';
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: new URL(SITE_URL).hostname,
        key: indexNowKey,
        keyLocation: `${SITE_URL}/${indexNowKey}.txt`,
        urlList: [url],
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return false;
  }
}

/**
 * Generate Google Indexing API request
 * Requires Google Cloud project and service account
 */
export async function submitToGoogleIndexing(url: string, type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED') {
  // This requires server-side implementation with Google service account
  // For now, return instructions
  
  return {
    instructions: `
    To use Google Indexing API:
    1. Create project at console.cloud.google.com
    2. Enable "Web Search Indexing API"
    3. Create service account
    4. Download JSON key
    5. Add email to Search Console
    6. Implement server-side endpoint
    `,
    url,
    type,
  };
}

/**
 * Generate sitemap ping URLs for search engines
 */
export function getSitemapPingUrls() {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const encodedSitemap = encodeURIComponent(sitemapUrl);

  return {
    google: `https://www.google.com/ping?sitemap=${encodedSitemap}`,
    bing: `https://www.bing.com/ping?sitemap=${encodedSitemap}`,
    yandex: `https://webmaster.yandex.com/ping?sitemap=${encodedSitemap}`,
    // Can be pinged via fetch or manual visit
  };
}

/**
 * Ping sitemap to search engines
 */
export async function pingSitemap() {
  const urls = getSitemapPingUrls();
  const results = [];

  for (const [engine, url] of Object.entries(urls)) {
    try {
      const response = await fetch(url);
      results.push({
        engine,
        success: response.ok,
        status: response.status,
      });
    } catch (error) {
      results.push({
        engine,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return results;
}

/**
 * Generate robots.txt content optimized for quick indexing
 */
export function generateOptimizedRobotsTxt() {
  return `# Optimized for quick indexing
User-agent: *
Allow: /
Crawl-delay: 0

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-index.xml

# Specific bots
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

# Disallow admin/private paths if any
# Disallow: /admin/
# Disallow: /private/
`;
}

/**
 * Check if page is indexed in Google
 */
export function getGoogleIndexCheckUrl(url: string) {
  return `https://www.google.com/search?q=site:${encodeURIComponent(url)}`;
}

/**
 * Generate URL inspection link for Google Search Console
 */
export function getGSCInspectionUrl(url: string) {
  const property = encodeURIComponent(SITE_URL);
  const inspectUrl = encodeURIComponent(url);
  return `https://search.google.com/search-console/inspect?resource_id=${property}&id=${inspectUrl}`;
}

/**
 * Quick indexing checklist
 */
export const QUICK_INDEXING_CHECKLIST = {
  immediate: [
    'Submit URL to Google Search Console',
    'Submit URL to Bing Webmaster Tools',
    'Ping sitemap to search engines',
    'Submit to IndexNow',
    'Create and submit XML sitemap',
  ],
  daily: [
    'Check indexing status in Search Console',
    'Monitor Core Web Vitals',
    'Check for crawl errors',
    'Update sitemap if content changed',
  ],
  weekly: [
    'Analyze search performance',
    'Check backlinks',
    'Review site speed',
    'Update content',
  ],
};

/**
 * Generate submission script for multiple URLs
 */
export async function bulkSubmitUrls(urls: string[]) {
  const results = {
    indexNow: [] as any[],
    sitemap: null as any,
  };

  // Submit to IndexNow (supports bulk submission)
  if (process.env.INDEXNOW_KEY) {
    try {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: new URL(SITE_URL).hostname,
          key: process.env.INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${process.env.INDEXNOW_KEY}.txt`,
          urlList: urls,
        }),
      });
      
      results.indexNow.push({
        success: response.ok,
        urls: urls.length,
      });
    } catch (error) {
      console.error('Bulk IndexNow error:', error);
    }
  }

  // Ping sitemap
  results.sitemap = await pingSitemap();

  return results;
}

/**
 * Priority URLs for quick indexing
 */
export function getPriorityUrls() {
  return [
    `${SITE_URL}/`, // Homepage (highest priority)
    `${SITE_URL}/about`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/blog`,
    `${SITE_URL}/blog/signup-login`,
    `${SITE_URL}/blog/deposit-withdraw`,
    `${SITE_URL}/blog/tips-tricks`,
    `${SITE_URL}/blog/best-games`,
  ];
}

/**
 * Generate meta tags for faster crawling
 */
export function getFastCrawlMetaTags() {
  return {
    // Request frequent crawling
    revisit: '1 days',
    'revisit-after': '1 days',
    
    // Encourage indexing
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    'googlebot-news': 'index, follow',
    
    // Speed up discovery
    'bingbot': 'index, follow',
    'slurp': 'index, follow',
    
    // Fresh content indicator
    'article:published_time': new Date().toISOString(),
    'article:modified_time': new Date().toISOString(),
  };
}

/**
 * Schema.org tags for news/blog content (gets indexed faster)
 */
export function generateNewsArticleSchema(data: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: data.title,
    description: data.description,
    image: [data.image],
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: '3 Patti Loot',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/3-patti-loot.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
    // News-specific properties for faster indexing
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.content'],
    },
    inLanguage: 'en-PK',
    about: {
      '@type': 'Thing',
      name: 'Gaming',
    },
  };
}
