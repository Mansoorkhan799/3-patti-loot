import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { generateSEO, generateWebsiteSchema, generateOrganizationSchema, generateMobileAppSchema } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/seo-additions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = generateSEO({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const mobileAppSchema = generateMobileAppSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <head>
        {/* Critical CSS - Inline for faster rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{margin:0;padding:0;background-color:#060812;color:#fff;font-family:system-ui,-apple-system,sans-serif}
            .min-h-screen{min-height:100vh}
            *{box-sizing:border-box}
          `
        }} />
        
        {/* Favicon / Site Icon */}
        <link rel="icon" href="/3-patti-loot.webp" type="image/webp" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00FF88" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo-targeting Meta Tags for Pakistan */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        <meta name="target-country" content="PK" />
        <meta name="content-language" content="en-PK" />
        
        {/* Quick Indexing Tags */}
        <meta name="revisit-after" content="1 days" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Language alternates for hreflang */}
        <link rel="alternate" hrefLang="en-pk" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk'} />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://3pattilootapk.com.pk'} />
        
        {/* JSON-LD Structured Data for SEO and AI Bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Google Analytics - Load after page load to prevent blocking */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Load GA after page load to prevent blocking
                window.addEventListener('load', function() {
                  var script1 = document.createElement('script');
                  script1.async = true;
                  script1.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}';
                  document.head.appendChild(script1);
                  
                  script1.onload = function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                      page_path: window.location.pathname,
                    });
                  };
                });
              `,
            }}
          />
        )}
      </head>
      <body className="bg-gaming-darker text-white antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <ScrollProgress />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

