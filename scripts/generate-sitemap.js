const fs = require("fs");
const path = require("path");

const BASE_URL = "https://grupokesoluciones.com"; // 🔴 CAMBIA ESTO
const postsDir = path.join(process.cwd(), "content", "blog");

function getPostSlugs() {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function generateSitemap() {
  const slugs = getPostSlugs();

  const staticPages = ["", "/blog", "/contacto"]; // ajusta si quieres

  const urls = [
    ...staticPages.map(
      (p) => `
  <url>
    <loc>${BASE_URL}${p}</loc>
  </url>`
    ),
    ...slugs.map(
      (slug) => `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
  </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, sitemap.trim(), "utf8");

  console.log(`✅ sitemap.xml generado (${staticPages.length + slugs.length} URLs)`);
}

generateSitemap();
