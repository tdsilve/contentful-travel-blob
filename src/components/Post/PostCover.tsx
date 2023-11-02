import Image from "next/image";
import { formatImageSrc } from "../../utils/formatImageSrc";
export const PostCover = ({
  src,
  alt = "post cover image",
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <Image
      src={formatImageSrc(src)}
      alt={alt}
      width={400}
      height={400}
      className="aspect-video"
    />
  );
};
