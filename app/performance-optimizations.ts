// Performance optimizations to prevent back/forward cache issues

/**
 * Disable unload listeners that prevent bfcache
 */
if (typeof window !== 'undefined') {
  // Remove any unload event listeners
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      // Page was loaded from cache
      // Reinitialize any necessary state
    }
  });

  // Avoid using beforeunload which prevents bfcache
  // Only use if absolutely necessary
}

/**
 * Optimize font loading
 */
export function optimizeFonts() {
  if (typeof document !== 'undefined') {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }
}
