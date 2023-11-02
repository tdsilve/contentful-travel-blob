import { PostType } from "~/lib/types";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { PostsTrending } from "./PostsTrending";

export const BlogMainContent = ({ posts }: { posts: PostType[] }) => {
  return (
    <>
      <BlogMainItem>
        <Header />
      </BlogMainItem>
      <BlogMainItem>
        <Intro posts={posts} />
      </BlogMainItem>
      <BlogMainItem>
        <PostsTrending posts={posts} />
      </BlogMainItem>
    </>
  );
};

const BlogMainItem = ({ children }) => {
  return <>{children}</>;
};
