import { getPostBySlug } from "~/lib/api/posts";
import { PostItem } from "~/components/PostItem";
export async function generateMetadata() {
  return {
    title: "Travel Post",
  };
}

export default async function Post({ params }: { params: { post: string } }) {
  const post = await getPostBySlug(params.post);
  return <PostItem post={post} />;
}
