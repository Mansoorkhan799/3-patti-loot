// SEO Utilities and Metadata Generators
import { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '3 Patti Loot';
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 
  "Download 3 Patti Loot APK - New Earning App in Pakistan 2026. Play Teen Patti, Dragon vs Tiger, Rummy, Slots and 25+ games with attractive design. Earn real money with instant withdrawals via JazzCash & EasyPaisa. Get 100% deposit bonus!";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  keywords?: string[];
  noindex?: boolean;
}

/**
 * Generate metadata for pages
 */
export function generateSEO({
  title,
  description = SITE_DESCRIPTION,
  image = `${SITE_URL}/og-image.jpg`,
  url = SITE_URL,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags,
  keywords,
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    applicationName: SITE_NAME,
    generator: 'Next.js',
    keywords: keywords || tags || [
      '3 patti loot',
      '3 patti loot apk',
      'teen patti',
      'rummy',
      'dragon vs tiger',
      'online earning app pakistan',
      'card games pakistan',
      '3 patti game',
      'jazz cash games',
      'easypaisa games',
      'real money earning',
      'slots games',
      'andar bahar',
      'pakistani gaming app',
      'teen patti loot',
    ],
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      locale: 'en_PK',
      type: type,
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        tags: tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@3pattiloot',
      site: '@3pattiloot',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };

  return metadata;
}

/**
 * Generate JSON-LD structured data for articles
 */
export function generateArticleSchema(data: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url?: string;
  };
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/3-patti-loot.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
  };
}

/**
 * Generate JSON-LD structured data for website
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'Teen Patti Loot',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/3-patti-loot.webp`,
    image: `${SITE_URL}/3-patti-loot.webp`,
    sameAs: [
      'https://www.facebook.com/people/3-Patti-Loot/61564386613680/',
      'https://x.com/3pattiloot',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      availableLanguage: ['English', 'Urdu'],
    },
  };
}

/**
 * Generate JSON-LD breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD review schema (for game reviews)
 */
export function generateReviewSchema(data: {
  gameName: string;
  rating: number;
  reviewBody: string;
  author: string;
  datePublished: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'VideoGame',
      name: data.gameName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.rating,
      bestRating: 10,
      worstRating: 0,
    },
    reviewBody: data.reviewBody,
    author: {
      '@type': 'Person',
      name: data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    datePublished: data.datePublished,
    url: data.url,
  };
}

/**
 * Strip HTML tags from content
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, length = 160): string {
  const stripped = stripHtml(content);
  return stripped.length > length
    ? `${stripped.substring(0, length)}...`
    : stripped;
}

/**
 * Get reading time in minutes
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate JSON-LD for ImageObject (helps Google Image search)
 */
export function generateImageObjectSchema(data: {
  url: string;
  name: string;
  description?: string;
  contentUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: data.url,
    name: data.name,
    ...(data.description && { description: data.description }),
    ...(data.contentUrl && { contentUrl: data.contentUrl }),
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for Mobile Application
 */
export function generateMobileAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: '3 Patti Loot',
    alternateName: 'Teen Patti Loot',
    description: 'Download 3 Patti Loot APK - New Earning App in Pakistan 2026. Play Teen Patti, Dragon vs Tiger, Rummy, Slots and 25+ casino games. Earn real money with instant withdrawals.',
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '300000',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: '3 patti loot dev',
    },
    downloadUrl: 'https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000',
    softwareVersion: 'V1.199(1)',
    fileSize: '49MB',
    installUrl: 'https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000',
    screenshot: `${SITE_URL}/3-patti-loot.webp`,
    image: `${SITE_URL}/3-patti-loot.webp`,
    inLanguage: ['en', 'ur'],
    countriesSupported: 'PK',
  };
}

/**
 * Generate JSON-LD structured data for Video Game (for specific games)
 */
export function generateVideoGameSchema(data: {
  name: string;
  description: string;
  image: string;
  genre: string[];
  playMode?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: data.name,
    description: data.description,
    image: data.image,
    gamePlatform: 'Android',
    genre: data.genre,
    playMode: data.playMode || ['MultiPlayer', 'SinglePlayer'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '50000',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
    },
  };
}

/**
 * Generate JSON-LD structured data for HowTo (for guides)
 */
export function generateHowToSchema(data: {
  name: string;
  description: string;
  image?: string;
  steps: Array<{ name: string; text: string; url?: string }>;
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    image: data.image,
    totalTime: data.totalTime,
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  };
}

/**
 * Generate JSON-LD structured data for SoftwareApplication (alternative to MobileApplication)
 */
export function generateSoftwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '3 Patti Loot',
    alternateName: 'Teen Patti Loot',
    description: 'Download 3 Patti Loot APK v1.199(1) - New Earning App in Pakistan 2026. Play 25+ card games including Teen Patti, Rummy, Dragon vs Tiger. Instant withdrawals via JazzCash & EasyPaisa.',
    operatingSystem: 'Android 5.0 and above',
    applicationCategory: 'Game',
    applicationSubCategory: 'Card Game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '300000',
      reviewCount: '50000',
      bestRating: '5',
      worstRating: '1',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    downloadUrl: 'https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000',
    softwareVersion: 'V1.199(1)',
    fileSize: '49MB',
    installUrl: 'https://3pattilootpkk1.com?from_gameid=5208127&channelCode=200000',
    screenshot: [
      `${SITE_URL}/3-patti-loot.webp`,
      `${SITE_URL}/3-patti-loot-apk.webp`,
    ],
    image: `${SITE_URL}/3-patti-loot.webp`,
    inLanguage: ['en', 'ur'],
    countriesSupported: 'PK',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    featureList: [
      '25+ Card Games',
      'Real Money Earning',
      'Instant Withdrawals',
      'JazzCash & EasyPaisa Support',
      '100% Deposit Bonus',
      'Daily Login Rewards',
      'Referral Program',
      '24/7 Customer Support',
    ],
  };
}
