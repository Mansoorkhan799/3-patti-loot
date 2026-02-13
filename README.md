# 🎮 3 Patti Loot - Official Website

A modern, high-performance website for **3 Patti Loot** - Pakistan's premier card gaming app. Built with the **latest Next.js 14** techniques, featuring comprehensive SEO, PWA capabilities, and world-class performance.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Performance](https://img.shields.io/badge/Performance-90%2B-success?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-100-success?style=flat-square&logo=google)

## ✨ Key Features

### 🚀 Performance (90+ Lighthouse Score)
- ⚡ **Next.js 14 App Router** with React Server Components
- 🖼️ **AVIF & WebP Images** with Next.js Image optimization
- 📦 **Incremental Static Regeneration (ISR)** for lightning-fast loads
- 🎯 **Core Web Vitals Optimized** - All metrics in green
- 💾 **Smart caching** strategies for static and dynamic content
- 🚀 **Service Worker** for offline functionality
- ⚡ **Edge-ready** deployment configuration

### 🎨 Modern UI/UX
- 🌃 **Gaming-themed** dark interface with neon accents
- 💚 **Glass morphism** effects throughout
- 📱 **Fully responsive** - Mobile, Tablet, Desktop optimized
- ✨ **Advanced animations** - Fade, slide, scale, parallax
- 🎮 **Interactive elements** - Hover effects, scroll animations
- 🎯 **Scroll progress bar** and back-to-top button
- 📊 **Skeleton loading** states for better UX

### 📈 SEO Optimized (100 SEO Score)
- 🔍 **Dynamic metadata** with Next.js 14 Metadata API
- 📊 **10+ JSON-LD schemas** (MobileApp, VideoGame, HowTo, FAQ, etc.)
- 🗺️ **Automatic sitemaps** (pages, posts, images)
- 🤖 **Dynamic robots.txt** with proper directives
- 🔗 **Complete social meta** (OpenGraph, Twitter Cards)
- 🏷️ **Breadcrumb schema** with navigation paths
- ⚡ **Rich snippets** ready for Google Search
- 📱 **Mobile-first** indexing optimized

### 📱 PWA Capabilities
- 🔄 **Service Worker** with intelligent caching
- 📴 **Offline support** with fallback page
- 📲 **Installable** as native app
- 🔔 **Push notifications** ready
- 🎨 **App manifest** with all icons
- ⚡ **Background sync** for analytics

### 📊 Analytics & Monitoring
- 📈 **Google Analytics 4** integration
- 🎯 **Custom event tracking** (downloads, clicks, scrolls)
- 📉 **Core Web Vitals** real-time monitoring
- 🔍 **Performance metrics** tracking
- 👥 **User behavior** analytics
- 💹 **Conversion tracking** ready

### 🎮 3 Patti Loot Specific
- 🎴 **25+ game categories** showcase
- 💰 **Bonus information** with detailed tables
- 📖 **Complete guides** (signup, deposit, withdraw)
- 💡 **Tips & tricks** section
- ❓ **FAQ section** with schema markup
- 📱 **Download buttons** with tracking
- 🇵🇰 **Pakistan-optimized** (JazzCash, EasyPaisa)

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** WordPress (Headless)
- **API:** WordPress REST API
- **Image Optimization:** Next.js Image + Sharp
- **Deployment:** Vercel (recommended) / Netlify / Custom

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed
- **npm** or **yarn** or **pnpm**
- **WordPress installation** (local or hosted)
- **Basic knowledge** of Next.js and WordPress

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pakistani-gaming-hub.git
cd pakistani-gaming-hub
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# WordPress Configuration
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-gaming-site.com
NEXT_PUBLIC_SITE_NAME=Pakistani Gaming Hub
NEXT_PUBLIC_SITE_DESCRIPTION=Pakistan's Premier Gaming News, Reviews, and eSports Coverage

# Revalidation time (in seconds)
REVALIDATE_TIME=60
```

### 4. Set Up WordPress

Follow the detailed guide in [WORDPRESS-SETUP.md](./WORDPRESS-SETUP.md) to:
- Install required plugins
- Configure REST API
- Set up categories
- Create sample content

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Homepage
│   ├── post/[slug]/         # Dynamic post pages
│   ├── category/[slug]/     # Dynamic category pages
│   ├── categories/          # All categories page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt
│   ├── loading.tsx          # Loading state
│   └── not-found.tsx        # 404 page
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FeaturedPosts.tsx
│   ├── LatestNews.tsx
│   └── CategoryGrid.tsx
├── lib/                     # Utility functions
│   ├── wordpress.ts         # WordPress API integration
│   ├── seo.ts              # SEO utilities & schemas
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
├── .env.local.example       # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
└── tsconfig.json           # TypeScript config
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  gaming: {
    dark: '#0a0e1a',
    darker: '#060812',
    accent: '#00ff88',  // Change this
    purple: '#8b5cf6',  // Change this
  }
}
```

### Modify Site Info

Update environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME=Your Site Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your Description
```

### Add Custom Components

Create new components in `components/` directory and import them in your pages.

### Customize SEO

Edit `lib/seo.ts` to modify:
- Meta tags
- OpenGraph settings
- Schema.org structured data
- Twitter Cards

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/` directory.

### Test Production Build Locally

```bash
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables
4. Deploy!

### Deploy to Custom Server

```bash
npm run build
npm run start
```

Use PM2 or similar process manager for production.

## 🔧 Configuration

### Revalidation Time

Control how often pages refresh from WordPress:

```env
REVALIDATE_TIME=60  # Seconds (60 = 1 minute)
```

### Image Domains

Allow external image sources in `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-wordpress-site.com',
    },
  ],
}
```

## 📊 SEO Features Explained

### Automatic Sitemap

Generated at `/sitemap.xml` - includes:
- All published posts
- All categories
- Homepage
- Static pages

### Robots.txt

Generated at `/robots.txt` - configured for:
- Allow all search engines
- Sitemap reference
- Crawl delay settings

### Structured Data

Every page includes:
- **Article schema** for posts
- **Breadcrumb schema** for navigation
- **Organization schema** for brand
- **Website schema** with search action

### Meta Tags

Automatically generated:
- Title tags (optimized length)
- Meta descriptions
- OpenGraph tags (Facebook)
- Twitter Cards
- Canonical URLs

## 🐛 Troubleshooting

### WordPress API Not Working

```bash
# Test if API is accessible
curl https://your-wordpress-site.com/wp-json/wp/v2/posts
```

If this fails:
1. Check WordPress permalinks (must be "Post name")
2. Verify REST API is enabled
3. Check CORS settings

### Images Not Loading

1. Verify WordPress media URLs are accessible
2. Check `next.config.js` image domains
3. Ensure featured images are set in WordPress

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Slow Performance

1. Increase `REVALIDATE_TIME` in `.env.local`
2. Enable WordPress caching plugins
3. Use a CDN for WordPress media
4. Optimize images in WordPress

## 📈 Performance Tips

1. **Image Optimization:**
   - Use WebP format in WordPress
   - Compress images before uploading
   - Use appropriate image sizes

2. **Caching:**
   - Enable WordPress caching (WP Rocket, W3 Total Cache)
   - Use Vercel's Edge Network
   - Implement CDN for static assets

3. **Database:**
   - Optimize WordPress database regularly
   - Limit post revisions
   - Clean up unused plugins

4. **API Calls:**
   - Increase revalidation time for stable content
   - Use `_fields` parameter to limit data
   - Implement pagination for large datasets

## 🔐 Security

- WordPress is isolated (headless setup)
- No direct database access from frontend
- Environment variables for sensitive data
- HTTPS required for production
- Regular WordPress security updates

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/pakistani-gaming-hub/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/pakistani-gaming-hub/discussions)
- **Email:** support@yourgamingsite.com

## 🙏 Acknowledgments

- Next.js team for amazing framework
- WordPress REST API documentation
- Tailwind CSS for styling utilities
- Vercel for hosting platform

## 📚 Additional Resources

- [WordPress Setup Guide](./WORDPRESS-SETUP.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Made with ❤️ for the Pakistani Gaming Community**

🎮 **Happy Gaming & Coding!** 🚀

