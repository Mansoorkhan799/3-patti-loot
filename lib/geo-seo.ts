// Geo-targeting and Local SEO Utilities for Pakistan Market

/**
 * Pakistan-specific keywords for SEO
 */
export const PAKISTAN_KEYWORDS = {
  primary: [
    '3 patti loot pakistan',
    'teen patti pakistan',
    'online earning app pakistan',
    'card games pakistan',
    'rummy game pakistan',
    '3 patti game pakistan',
  ],
  secondary: [
    'jazzcash earning app',
    'easypaisa game app',
    'pakistani gaming app',
    'teen patti apk pakistan',
    'real money earning pakistan',
    'online card games pk',
  ],
  cities: [
    'karachi card games',
    'lahore teen patti',
    'islamabad gaming app',
    'rawalpindi card games',
    'faisalabad gaming',
    'multan card games',
    'peshawar gaming app',
    'quetta card games',
  ],
  languages: [
    'teen patti urdu',
    '3 patti loot urdu',
    'card game urdu',
    'اردو کارڈ گیم',
  ],
  providers: [
    'jazzcash card game',
    'easypaisa gaming',
    'jazz digital wallet game',
    'easypaisa earn money',
  ],
};

/**
 * Generate Pakistan-specific meta tags
 */
export function generatePakistanMetaTags() {
  return {
    'geo.region': 'PK',
    'geo.placename': 'Pakistan',
    'geo.position': '30.3753;69.3451', // Center of Pakistan
    'ICBM': '30.3753, 69.3451',
    'DC.title': '3 Patti Loot - Pakistan Premier Card Gaming App',
    'DC.creator': '3 Patti Loot',
    'DC.subject': 'Card Games, Teen Patti, Rummy, Pakistan Gaming',
    'DC.description': 'Download 3 Patti Loot APK - Pakistan best card gaming app with JazzCash and EasyPaisa support',
    'DC.publisher': '3 Patti Loot',
    'DC.contributor': '3 Patti Loot Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.type': 'Interactive Resource',
    'DC.format': 'text/html',
    'DC.language': 'en-PK',
    'DC.coverage': 'Pakistan',
  };
}

/**
 * Generate hreflang tags for language/region targeting
 */
export function generateHreflangTags(currentPath: string = '/') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';
  
  return [
    {
      rel: 'alternate',
      hreflang: 'en-pk',
      href: `${baseUrl}${currentPath}`,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${baseUrl}${currentPath}`,
    },
    {
      rel: 'alternate',
      hreflang: 'ur-pk',
      href: `${baseUrl}/ur${currentPath}`,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${baseUrl}${currentPath}`,
    },
  ];
}

/**
 * Generate location-based schema for major Pakistani cities
 */
export function generateCitySchema(city: string) {
  const cityData: Record<string, { lat: string; lon: string; population: string }> = {
    Karachi: { lat: '24.8607', lon: '67.0011', population: '16000000' },
    Lahore: { lat: '31.5204', lon: '74.3587', population: '11000000' },
    Islamabad: { lat: '33.6844', lon: '73.0479', population: '1000000' },
    Rawalpindi: { lat: '33.5651', lon: '73.0169', population: '2000000' },
    Faisalabad: { lat: '31.4180', lon: '73.0790', population: '3200000' },
    Multan: { lat: '30.1575', lon: '71.5249', population: '1900000' },
    Peshawar: { lat: '34.0151', lon: '71.5249', population: '1970000' },
    Quetta: { lat: '30.1798', lon: '66.9750', population: '1001000' },
  };

  const data = cityData[city];
  if (!data) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'City',
    name: city,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: city,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.lat,
      longitude: data.lon,
    },
    population: {
      '@type': 'QuantitativeValue',
      value: data.population,
    },
  };
}

/**
 * Generate Service schema with Pakistan-specific details
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Online Gaming Platform',
    provider: {
      '@type': 'Organization',
      name: '3 Patti Loot',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      requiredMinAge: 18,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk',
      servicePhone: 'Available in app',
      availableLanguage: ['English', 'Urdu'],
    },
    category: 'Gaming, Entertainment, Card Games',
    description: 'Online card gaming platform with JazzCash and EasyPaisa integration for Pakistani users',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PKR',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Card Games',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Game',
            name: 'Teen Patti',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Game',
            name: 'Rummy',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Game',
            name: 'Dragon vs Tiger',
          },
        },
      ],
    },
  };
}

/**
 * Generate WebPage schema with geo-targeting
 */
export function generateWebPageSchema(data: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    description: data.description,
    url: data.url,
    inLanguage: 'en-PK',
    isPartOf: {
      '@type': 'WebSite',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk',
      name: '3 Patti Loot',
    },
    about: {
      '@type': 'Thing',
      name: 'Card Games Pakistan',
      sameAs: 'https://en.wikipedia.org/wiki/Card_game',
    },
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
  };
}

/**
 * Get Pakistan-specific structured data for quick indexing
 */
export function getQuickIndexingData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#website`,
        url: process.env.NEXT_PUBLIC_SITE_URL,
        name: '3 Patti Loot',
        description: 'Pakistan Premier Card Gaming App',
        inLanguage: 'en-PK',
      },
      {
        '@type': 'Organization',
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
        name: '3 Patti Loot',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        logo: `${process.env.NEXT_PUBLIC_SITE_URL}/3-patti-loot.webp`,
        areaServed: 'Pakistan',
      },
    ],
  };
}

/**
 * Generate meta tags for quick Google indexing
 */
export function getQuickIndexingMetaTags() {
  return {
    // Google-specific
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    googlebot: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    'bingbot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    
    // Pakistan-specific
    'geo.region': 'PK',
    'geo.placename': 'Pakistan',
    'target-country': 'PK',
    'content-language': 'en-PK',
    
    // Mobile-specific (important for Pakistan market)
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  };
}

/**
 * Generate Pakistan city-specific keywords
 */
export function getCityKeywords(city?: string): string[] {
  const baseKeywords = [
    '3 patti loot',
    'teen patti pakistan',
    'card games pakistan',
    'jazzcash game',
    'easypaisa gaming',
  ];

  if (!city) return baseKeywords;

  return [
    ...baseKeywords,
    `${city} card games`,
    `${city} teen patti`,
    `${city} online gaming`,
    `3 patti loot ${city}`,
    `best card game ${city}`,
  ];
}

/**
 * Get Pakistani Rupee price formatting for schema
 */
export function formatPKRPrice(amount: number): object {
  return {
    '@type': 'PriceSpecification',
    price: amount,
    priceCurrency: 'PKR',
    valueAddedTaxIncluded: false,
  };
}

/**
 * Generate offer schema for bonuses (Pakistan-specific)
 */
export function generateBonusOfferSchema(data: {
  name: string;
  amount: number;
  description: string;
  validFrom?: string;
  validThrough?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: data.name,
    description: data.description,
    price: data.amount,
    priceCurrency: 'PKR',
    availability: 'https://schema.org/InStock',
    validFrom: data.validFrom || new Date().toISOString(),
    validThrough: data.validThrough,
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    eligibleRegion: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    availableAtOrFrom: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
    },
  };
}
