import fs from "fs";
import path from "path";
import { getAllPosts } from "../lib/posts";

const BASE_URL = "https://grupokesoluciones.com"; 

function generateSitemap() {
  const posts = getAllPosts();

  const staticPages = [
    "",
    "/blog",
  ];

  const urls = [
    ...staticPages.map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
  </url>`
    ),

    ...posts.map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
  </url>`
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    sitemap.trim()
  );
}

generateSitemap();
