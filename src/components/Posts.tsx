import { PostCard } from "./PostCard";
import { PostType } from "~/lib/types";

export const Posts = async ({
  posts,
  className,
}: {
  posts: PostType[];
  className?: string;
}) => {
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
