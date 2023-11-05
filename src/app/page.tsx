import React from "react";
import {
  Header,
  PostCarroussel,
  SectionTitle,
  Posts,
} from "~/components/index";
import { getSortedPostsByPublishDate } from "~/lib/api/posts";
export default function Home() {
  return (
    <main className="space-y-8">
      <Header />
      <SectionCarroussel />
      <SectionMorePosts />
    </main>
  );
}

const SectionCarroussel = async () => {
  const posts = await getSortedPostsByPublishDate();
  if (!posts) throw new Error("No sorted posts");
  return (
    <>
      <SectionTitle title="Spots for true adventures" />
      <PostCarroussel posts={posts} />
    </>
  );
};

const SectionMorePosts = () => {
  return (
    <>
      <SectionTitle title="More Posts" />
      <Posts />
    </>
  );
};
