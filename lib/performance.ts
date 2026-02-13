// Performance Optimization Utilities

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  
  // Preload critical images
  const imagePreload = document.createElement('link');
  imagePreload.rel = 'preload';
  imagePreload.as = 'image';
  imagePreload.href = '/3-patti-loot-logo.webp';
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Prefetch routes on hover
 */
export function prefetchOnHover() {
  if (typeof window === 'undefined') return;

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && link.href) {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = link.href;
      document.head.appendChild(prefetchLink);
    }
  });
}

/**
 * Optimize third-party scripts
 */
export function optimizeThirdPartyScripts() {
  if (typeof window === 'undefined') return;

  // Delay third-party scripts until page is idle
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      loadThirdPartyScripts();
    });
  } else {
    setTimeout(() => {
      loadThirdPartyScripts();
    }, 2000);
  }
}

function loadThirdPartyScripts() {
  // Load analytics after page is idle
  if ((window as any).gtag) {
    (window as any).gtag('js', new Date());
  }
}

/**
 * Service Worker registration
 */
export function registerServiceWorker() {
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    process.env.NODE_ENV === 'production'
  ) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
}

/**
 * Cache API responses
 */
export class ResponseCache {
  private cache: Map<string, { data: any; timestamp: number }>;
  private ttl: number;

  constructor(ttl = 5 * 60 * 1000) {
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key: string, data: any) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    
    const isExpired = Date.now() - cached.timestamp > this.ttl;
    
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  clear() {
    this.cache.clear();
  }
}

/**
 * Optimize animations for performance
 */
export function optimizeAnimations() {
  if (typeof window === 'undefined') return;

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
  }
}

/**
 * Monitor performance metrics
 */
export function monitorPerformance() {
  if (typeof window === 'undefined' || !window.performance) return;

  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const connectTime = perfData.responseEnd - perfData.requestStart;
  const renderTime = perfData.domComplete - perfData.domLoading;

  console.log('Performance Metrics:', {
    pageLoadTime: `${pageLoadTime}ms`,
    connectTime: `${connectTime}ms`,
    renderTime: `${renderTime}ms`,
  });
}

/**
 * Defer non-critical CSS
 */
export function deferNonCriticalCSS() {
  if (typeof window === 'undefined') return;

  const links = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
  
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href) {
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = href;
      document.head.appendChild(newLink);
    }
  });
}

/**
 * Initialize all performance optimizations
 */
export function initPerformance() {
  if (typeof window === 'undefined') return;

  preloadCriticalResources();
  lazyLoadImages();
  prefetchOnHover();
  optimizeThirdPartyScripts();
  optimizeAnimations();
  
  window.addEventListener('load', () => {
    monitorPerformance();
    deferNonCriticalCSS();
  });
}
