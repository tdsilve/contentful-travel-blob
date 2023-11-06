import React from "react";

import {
  Header,
  PostCarroussel,
  SectionTitle,
  Posts,
} from "~/components/index";
import { getSortedPostsByPublishDate } from "~/lib/api/posts";
import { FadeUp } from "~/components/Animations/FadeUp";
export default function Home() {
  return (
    <main className="space-y-8">
      <FadeUp>
        <Header />
      </FadeUp>
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
      <FadeUp>
        <PostCarroussel posts={posts} />
      </FadeUp>
    </>
  );
};

const SectionMorePosts = () => {
  return (
    <>
      <SectionTitle title="More Posts" />
      <FadeUp>
        <Posts />
      </FadeUp>
    </>
  );
};
