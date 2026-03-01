import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h1>Blog</h1>
          <p>Artículos técnicos sobre plantas eléctricas y buenas prácticas.</p>
        </div>

        <div className="grid3">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <div className="cardImg">
                <img src={p.cover} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <Link className="btnGhost" href={`/blog/${p.slug}`}>
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
