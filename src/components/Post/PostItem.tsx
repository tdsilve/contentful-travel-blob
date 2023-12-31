import { PostType } from "~/lib/types";
import { RichText } from "../index";
import Image from "next/image";
import { formatImageSrc } from "../../utils/formatImageSrc";
import { format } from "date-fns";
import { ScrollBar } from "../Animations/ScrollBar";
export const PostItem = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col gap-y-4 mx-auto w-[80%] relative">
      <ScrollBar />
      <PostItemTitle title={post.title} />
      <PostItemCover src={post.cover.url} />
      <AuthorAndPublishDate post={post} />
      <RichText content={post.content} />
    </div>
  );
};

const AuthorAndPublishDate = ({ post }: { post: PostType }) => {
  return (
    <div className="flex items-center gap-3 mx-auto">
      <Avatar pictureSrc={post.author.picture} />
      <div>
        <p>{post.author.name}</p>
        <time className="text-gray-500">
          {format(new Date(post.publishDate), "MMM dd")}
        </time>
      </div>
    </div>
  );
};
const Avatar = ({ pictureSrc }: { pictureSrc: string }) => {
  return (
    <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden">
      <Image src={formatImageSrc(pictureSrc)} fill alt="Author picture" />
    </div>
  );
};

const PostItemTitle = ({ title }: { title: string }) => {
  return <h2 className="text-center text-5xl font-extrabold">{title}</h2>;
};

const PostItemCover = ({
  src,
  alt = "Post Cover",
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <Image
      src={formatImageSrc(src)}
      alt={alt}
      width={1000}
      height={1000}
      className="mx-auto"
    />
  );
};
