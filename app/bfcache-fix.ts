// Fix back/forward cache issues
// This file helps prevent bfcache blocking

if (typeof window !== 'undefined') {
  // Remove any unload listeners that block bfcache
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      // Page was loaded from bfcache
      // Reinitialize any necessary state here
    }
  });

  // Avoid using beforeunload which blocks bfcache
  // Only use if absolutely necessary for data loss prevention
}
