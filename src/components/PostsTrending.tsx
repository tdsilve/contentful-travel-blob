import { PostType } from "~/lib/types";
import { Posts, SectionTitle } from "./index";

export const PostsTrending = ({ posts }: { posts: PostType[] }) => {
  return (
    <div>
      <SectionTitle title={"Trending on Travel Blog"} />
      {/* <Posts posts={posts} className="mt-9" /> */}
    </div>
  );
};
