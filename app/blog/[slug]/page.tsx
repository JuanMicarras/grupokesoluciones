import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Marcas from "@/app/components/Marcas";
import Callout from "@/app/components/Callout";
import CTA from "@/app/components/CTA";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

const mdxComponents = {
  Marcas,
  Callout,
  CTA,
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);

    return (
      <main className="section">
        <div className="container">
          <p style={{ opacity: 0.7 }}>{post.date}</p>
          <h1>{post.title}</h1>

          <article className="mdxContent">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}
