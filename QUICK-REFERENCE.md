# 🚀 Quick Reference Guide - 3 Patti Loot

Quick commands and references for common tasks.

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local    # Then edit with your values

# Run development server
npm run dev
```

## 🎯 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Type checking
npm run type-check      # Check TypeScript types (if configured)
```

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── loading.tsx          # Loading UI
│   ├── not-found.tsx        # 404 page
│   ├── offline.tsx          # Offline page
│   └── [your-pages]/        # Other pages
│
├── components/              # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Analytics.tsx        # Analytics tracker
│   ├── ScrollProgress.tsx   # Scroll progress bar
│   └── ScrollToTop.tsx      # Back to top button
│
├── lib/                     # Utilities
│   ├── seo.ts              # SEO functions
│   ├── analytics.ts        # Analytics functions
│   ├── performance.ts      # Performance utilities
│   ├── utils.ts            # General utilities
│   └── hooks/              # Custom React hooks
│       ├── useScrollAnimation.ts
│       └── useMediaQuery.ts
│
├── public/                  # Static assets
│   ├── sw.js               # Service worker
│   ├── manifest.json       # PWA manifest
│   └── [images]            # Images
│
└── Configuration files
    ├── next.config.js      # Next.js config
    ├── tailwind.config.ts  # Tailwind config
    ├── tsconfig.json       # TypeScript config
    └── package.json        # Dependencies
```

## 🎨 Adding New Pages

```typescript
// app/your-page/page.tsx
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Your Page Title",
  description: "Your page description",
  keywords: ["keyword1", "keyword2"],
});

export default function YourPage() {
  return (
    <div className="min-h-screen">
      <h1>Your Page</h1>
    </div>
  );
}
```

## 📊 Using Analytics

```typescript
import { 
  trackEvent, 
  trackDownload, 
  trackButtonClick 
} from '@/lib/analytics';

// Track custom event
trackEvent('action', 'category', 'label', value);

// Track download
trackDownload('Button Location');

// Track button click
trackButtonClick('Button Name', 'Page Location');
```

## 🎭 Using Animations

### CSS Classes

```html
<!-- Fade in from bottom -->
<div className="animate-fade-in-up">Content</div>

<!-- Scale in -->
<div className="animate-scale-in">Content</div>

<!-- Skeleton loading -->
<div className="skeleton h-8 w-full"></div>

<!-- Glass effect -->
<div className="glass p-6 rounded-lg">Content</div>

<!-- Gradient text -->
<h1 className="gradient-text">Gradient Title</h1>
```

### React Hooks

```typescript
import { useScrollAnimation, useScrollProgress } from '@/lib/hooks/useScrollAnimation';

function MyComponent() {
  // Trigger animation on scroll
  const { ref, isVisible } = useScrollAnimation();
  
  // Track scroll progress
  const progress = useScrollProgress();
  
  return (
    <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
      Content appears on scroll
    </div>
  );
}
```

## 🔍 SEO Configuration

### Page Metadata

```typescript
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Page Title",
  description: "Page description (150-160 chars)",
  image: "/og-image.jpg",
  keywords: ["keyword1", "keyword2"],
  noindex: false, // Set true for pages you don't want indexed
});
```

### Adding Schema Markup

```typescript
import { generateFAQSchema, generateHowToSchema } from '@/lib/seo';

// In your page component
const faqSchema = generateFAQSchema([
  {
    question: "Question here?",
    answer: "Answer here."
  }
]);

// Add to page
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

## 🎨 Tailwind Classes

### Gaming Theme Colors

```css
bg-gaming-dark        /* Dark background */
bg-gaming-darker      /* Darker background */
text-gaming-accent    /* Accent green (#00ff88) */
text-gaming-purple    /* Purple accent (#8b5cf6) */
```

### Common Patterns

```html
<!-- Button Primary -->
<button className="btn-primary">Download</button>

<!-- Button Secondary -->
<button className="btn-secondary">Learn More</button>

<!-- Card with hover effect -->
<div className="glass gaming-card rounded-lg p-6">
  Card content
</div>

<!-- Gradient heading -->
<h2 className="text-4xl font-gaming font-bold gradient-text">
  Heading
</h2>
```

## 📱 Responsive Design

```html
<!-- Mobile first approach -->
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<!-- Hidden on mobile -->
<div className="hidden md:block">Desktop only</div>

<!-- Show only on mobile -->
<div className="block md:hidden">Mobile only</div>

<!-- Responsive grid -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Grid items
</div>
```

## 🔐 Environment Variables

```env
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=3 Patti Loot

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX     # Google Analytics
REVALIDATE_TIME=3600                # ISR revalidation (seconds)
```

## 🚀 Deployment Checklist

- [ ] Update `.env.local` with production values
- [ ] Test `npm run build` locally
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test analytics tracking
- [ ] Check SEO metadata
- [ ] Verify images load
- [ ] Test service worker
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test 404 and offline pages
- [ ] Verify sitemap.xml
- [ ] Check robots.txt

## 🐛 Debugging

### Common Issues

**Port already in use**
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Clear Next.js cache**
```bash
rm -rf .next
npm run dev
```

**Type errors**
```bash
# Regenerate types
rm -rf .next
npm run dev
```

**Service worker not updating**
1. Open DevTools > Application > Service Workers
2. Click "Unregister"
3. Refresh page

## 📊 Performance Monitoring

### Check Lighthouse Scores

1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories to audit
4. Click "Analyze page load"

### Monitor Core Web Vitals

- Go to [PageSpeed Insights](https://pagespeed.web.dev/)
- Enter your URL
- Check FCP, LCP, CLS, FID metrics

## 📚 Documentation Files

- `README.md` - Project overview
- `LATEST-TECHNIQUES.md` - All techniques explained
- `FEATURES.md` - Complete feature list
- `SETUP-GUIDE.md` - Detailed setup instructions
- `QUICK-REFERENCE.md` - This file
- `PROJECT-SUMMARY.md` - Project summary
- `DEPLOYMENT.md` - Deployment guides

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **React Docs**: https://react.dev
- **Vercel**: https://vercel.com

## 💡 Pro Tips

1. **Use React DevTools** - Install Chrome extension for debugging
2. **Check mobile first** - Always test on mobile viewport
3. **Monitor bundle size** - Keep an eye on build output
4. **Optimize images** - Use WebP/AVIF formats
5. **Test offline mode** - Enable service worker in production
6. **Use TypeScript** - Leverage type safety
7. **Follow SEO best practices** - Use proper headings, alt text
8. **Track user behavior** - Use analytics effectively
9. **Test on real devices** - Don't rely only on DevTools
10. **Keep dependencies updated** - Regular maintenance

## 🎯 Quick Fixes

### Add new game to homepage
Edit `app/page.tsx` and add to arrays:
```typescript
const multiplayerGames = [...existing, "New Game"];
```

### Change site colors
Edit `tailwind.config.ts`:
```typescript
gaming: {
  accent: '#YOUR_COLOR',
  purple: '#YOUR_COLOR',
}
```

### Add Google Analytics
1. Get GA ID from analytics.google.com
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-YOUR-ID
   ```
3. Rebuild and redeploy

### Fix broken images
1. Check file exists in `public/` folder
2. Verify file extension (.webp, .png, .jpg)
3. Check for typos in file path
4. Clear cache and reload

---

**Need more help?** Check the detailed documentation files!

**Quick Links**:
- Setup: `SETUP-GUIDE.md`
- All Features: `FEATURES.md`
- Techniques: `LATEST-TECHNIQUES.md`
