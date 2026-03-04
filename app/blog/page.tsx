import { getAllPosts } from "@/lib/posts";
import BlogCards from "@/components/ui/blogs";

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogCards posts={posts} />;
}
