/**
 * Helper utility to optimize and cache image URLs through Cloudflare proxy (wsrv.nl).
 * This ensures high-resolution quality without blurriness, fast global CDN delivery,
 * and reliable cross-origin (CORS) loading when deployed on platforms like Vercel.
 */
export function cdn(url: string | undefined, width = 800, quality = 90): string {
  if (!url) return "";
  
  // Return direct URL to avoid third-party proxy delays
  if (url.includes("wsrv.nl")) {
    try {
      const parsed = new URL(url);
      const targetUrl = parsed.searchParams.get("url");
      if (targetUrl) {
        return targetUrl.startsWith("http") ? targetUrl : `https://${targetUrl}`;
      }
    } catch {
      return url;
    }
  }

  return url;
}
