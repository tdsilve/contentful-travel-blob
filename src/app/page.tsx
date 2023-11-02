import { getPosts } from "~/lib/api/posts";
import { BlogMainContent } from "~/components/BlogMainContent";
import React from "react";
export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="space-y-8">
      <BlogMainContent posts={posts} />
    </main>
  );
}
