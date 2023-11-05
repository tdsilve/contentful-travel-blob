import { getPostBySlug } from "~/lib/api/posts";
import { PostItem } from "~/components/Post/PostItem";
export async function generateMetadata() {
  return {
    title: "Travel Post",
  };
}

export default async function Post({ params }: { params: { post: string } }) {
  const post = await getPostBySlug(params.post);
  if (!post) throw new Error("The post does not exists");
  return <PostItem post={post} />;
}
