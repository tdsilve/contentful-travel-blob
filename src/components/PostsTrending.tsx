import { PostType } from "~/lib/types";
import { Posts } from "./Posts";
import { SectionTitle } from "./SectionTitle";
export const PostsTrending = ({ posts }: { posts: PostType[] }) => {
  return (
    <div>
      <SectionTitle title={"Trending on Travel Blog"} />
      <Posts posts={posts} className="mt-9" />
    </div>
  );
};
