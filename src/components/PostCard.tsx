import Link from "next/link";
import { PostTitle } from "./Post/PostTitle";
import { PostCover } from "./Post/PostCover";
import { PostTags } from "./Post/PostTags";
import { PostType } from "~/types/types";

type PostCardProps = Pick<PostType, "title" | "cover" | "tags" | "slug">;

export const PostCard = (props: PostCardProps) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <PostCover src={props.cover.url} alt={props.cover.title} />
      <div className="mt-3">
        <PostTags tags={props.tags} />
        <PostTitle title={props.title} />
      </div>
    </Link>
  );
};
