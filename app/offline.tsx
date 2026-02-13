import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Offline - 3 Patti Loot',
  description: 'You are currently offline. Please check your internet connection.',
  noindex: true,
});

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="glass rounded-lg p-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gaming-accent/20 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gaming-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-gaming font-bold mb-4 gradient-text">
            You're Offline
          </h1>
          
          <p className="text-gray-300 mb-6">
            Oops! It looks like you've lost your internet connection. Please check your connection and try again.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="btn-primary w-full"
            >
              Try Again
            </button>
            
            <Link href="/" className="btn-secondary w-full block">
              Go to Homepage
            </Link>
          </div>
          
          <div className="mt-8 p-4 bg-white/5 rounded-lg">
            <h2 className="font-bold mb-2 text-gaming-accent">Troubleshooting Tips:</h2>
            <ul className="text-sm text-gray-400 text-left space-y-2">
              <li>• Check your WiFi or mobile data connection</li>
              <li>• Try turning airplane mode on and off</li>
              <li>• Restart your device</li>
              <li>• Check if other websites are loading</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
