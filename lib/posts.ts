import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(postsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    return {
      slug,
      title: data.title ?? "Sin título",
      date: data.date ?? "",
      excerpt: data.excerpt ?? data.description ?? "",
      cover: data.cover ?? "/default-cover.jpg",
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    ...(data as {
      title: string;
      date: string;
      excerpt?: string;
    }),
  };
}
