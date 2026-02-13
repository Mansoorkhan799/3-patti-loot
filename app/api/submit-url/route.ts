import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow, pingSitemap } from '@/lib/quick-indexing';

/**
 * API Route to submit URLs for quick indexing
 * POST /api/submit-url
 */
export async function POST(request: NextRequest) {
  try {
    const { url, secret } = await request.json();

    // Verify secret to prevent abuse
    if (secret !== process.env.SUBMIT_URL_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Submit to IndexNow
    const indexNowResult = await submitToIndexNow(url);

    // Ping sitemap
    const sitemapResults = await pingSitemap();

    return NextResponse.json({
      success: true,
      url,
      results: {
        indexNow: indexNowResult,
        sitemap: sitemapResults,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Submit URL error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint to check status
 */
export async function GET() {
  return NextResponse.json({
    message: 'URL submission endpoint',
    method: 'POST',
    requiredFields: ['url', 'secret'],
  });
}
