// Analytics and Performance Monitoring Utilities

/**
 * Track page view
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Track download click
 */
export function trackDownload(source: string) {
  trackEvent('download_click', 'Engagement', source);
}

/**
 * Track navigation
 */
export function trackNavigation(destination: string) {
  trackEvent('navigation', 'Navigation', destination);
}

/**
 * Track button click
 */
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent('button_click', 'Engagement', `${buttonName} - ${location}`);
}

/**
 * Track game card click
 */
export function trackGameClick(gameName: string) {
  trackEvent('game_click', 'Games', gameName);
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', 'Engagement', `${depth}%`, depth);
}

/**
 * Track time on page
 */
let pageStartTime: number;

export function startTimeTracking() {
  if (typeof window !== 'undefined') {
    pageStartTime = Date.now();
  }
}

export function trackTimeOnPage(pageName: string) {
  if (typeof window !== 'undefined' && pageStartTime) {
    const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
    trackEvent('time_on_page', 'Engagement', pageName, timeSpent);
  }
}

/**
 * Track Core Web Vitals
 */
export function trackWebVitals(metric: {
  id: string;
  name: string;
  label: string;
  value: number;
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Performance observer for monitoring
 */
export function observePerformance() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    // Observe Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        trackWebVitals({
          id: 'lcp',
          name: 'LCP',
          label: 'web-vital',
          value: lastEntry.renderTime || lastEntry.loadTime,
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Observe First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        trackWebVitals({
          id: 'fid',
          name: 'FID',
          label: 'web-vital',
          value: entry.processingStart - entry.startTime,
        });
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Observe Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: any[] = [];

    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsEntries.push(entry);
          clsValue += entry.value;
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Report CLS when page is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        trackWebVitals({
          id: 'cls',
          name: 'CLS',
          label: 'web-vital',
          value: clsValue,
        });
      }
    });
  } catch (error) {
    console.error('Performance observer error:', error);
  }
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string) {
  trackEvent('outbound_click', 'Engagement', url);
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string) {
  trackEvent('form_submit', 'Engagement', formName);
}

/**
 * Track search
 */
export function trackSearch(searchTerm: string) {
  trackEvent('search', 'Engagement', searchTerm);
}

/**
 * Track social share
 */
export function trackSocialShare(platform: string, url: string) {
  trackEvent('social_share', 'Engagement', `${platform} - ${url}`);
}

/**
 * Initialize analytics
 */
export function initAnalytics() {
  if (typeof window !== 'undefined') {
    observePerformance();
    startTimeTracking();

    // Track scroll depth
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths: number[] = [];

    window.addEventListener('scroll', () => {
      const scrollPercentage = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      scrollDepths.forEach((depth) => {
        if (scrollPercentage >= depth && !trackedDepths.includes(depth)) {
          trackedDepths.push(depth);
          trackScrollDepth(depth);
        }
      });
    });

    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        trackTimeOnPage(window.location.pathname);
      }
    });
  }
}
