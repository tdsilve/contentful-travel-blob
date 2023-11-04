import { getPosts } from "~/lib/api/posts";
import { PostCard } from "./index";

export const Posts = async ({ className }: { className?: string }) => {
  const posts = await getPosts();
  if (posts) {
    throw new Error("no posts");
  }
  return (
    <div className={`flex flex-wrap gap-8 justify-center mx-auto ${className}`}>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            tags={post.tags}
            cover={post.cover}
            slug={post.slug}
          />
        );
      })}
    </div>
  );
};
