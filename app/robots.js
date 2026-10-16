import { siteUrl } from "../lib/site";

export const dynamic = "force-static";

// Site de página única: tudo liberado, incluindo /_next/ (CSS e JS que o
// Google precisa para renderizar a página).
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
