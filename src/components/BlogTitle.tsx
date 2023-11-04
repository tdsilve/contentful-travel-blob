import { clsx } from "clsx";
import Link from "next/link";
export const BlogTitle = ({ small = false }: { small?: boolean }) => {
  return (
    <h1
      className={clsx(
        "tracking-tighter font-semibold",
        small ? "text-2xl" : "text-6xl",
      )}
    >
      Travel Blog
    </h1>
  );
};

export const BlogTitleLinkToHome = ({ small = false }: { small?: boolean }) => {
  return (
    <Link href={"/"} className="underline">
      <BlogTitle small={small} />
    </Link>
  );
};
