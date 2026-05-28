import { getPostBySlug, getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import BrandsMarquee from "@/components/BrandsMarquee";
import Callout from "@/components/Callout";
import CTA from "@/components/CTA";
import PostImage from "@/components/PostImage";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

const mdxComponents = {
  BrandsMarquee,
  Callout,
  CTA,
  PostImage,
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
          {/* ✅ Schema Article */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                datePublished: post.date,
                author: {
                  "@type": "Organization",
                  name: "Grupo KeSoluciones",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Grupo KeSoluciones",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://grupokesoluciones.com/img/Logo_principal.png",
                  },
                },
              }),
            }}
          />

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    // 1. Intentamos obtener el post
    const post = getPostBySlug(slug);

    // 2. Si todo sale bien, devolvemos la data dinámica
    return {
      title: `${post.title} | Grupo KeSoluciones`,
      description: post.excerpt ?? post.title,
    };
  } catch (error) {
    // 3. Si getPostBySlug falla (el post no existe), 
    // devolvemos metadata genérica de "No encontrado".
    // Esto evita el Error 500 y permite que Next.js pase al 
    // componente principal para lanzar el notFound() correctamente.
    return {
      title: "Artículo no encontrado | Grupo KeSoluciones",
      description: "El artículo que buscas no se encuentra disponible.",
    };
  }
}
