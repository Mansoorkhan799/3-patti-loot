// Additional SEO schemas for geo-targeting
// Import this in files that need LocalBusiness schema

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '3 Patti Loot';
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 
  "Download 3 Patti Loot APK - New Earning App in Pakistan 2026. Play Teen Patti, Dragon vs Tiger, Rummy, Slots and 25+ games with attractive design. Earn real money with instant withdrawals via JazzCash & EasyPaisa. Get 100% deposit bonus!";

/**
 * Generate JSON-LD structured data for Local Business (Pakistan)
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    alternateName: 'Teen Patti Loot',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/3-patti-loot.webp`,
    image: `${SITE_URL}/3-patti-loot.webp`,
    priceRange: 'Free',
    paymentAccepted: ['JazzCash', 'EasyPaisa', 'Bank Transfer'],
    currenciesAccepted: 'PKR',
    areaServed: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    knowsLanguage: ['en', 'ur'],
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
    sameAs: [
      'https://www.facebook.com/people/3-Patti-Loot/61564386613680/',
      'https://x.com/3pattiloot',
    ],
  };
}
