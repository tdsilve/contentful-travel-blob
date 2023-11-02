import { clsx } from "clsx";
import Link from "next/link";
export const Title = ({ small = false }: { small?: boolean }) => {
  return (
    <h1
      className={clsx(
        "tracking-tighter font-bold",
        small ? "text-3xl" : "text-6xl",
      )}
    >
      Travel Blog
    </h1>
  );
};

export const TitleLinkToHome = ({ small = false }: { small?: boolean }) => {
  return (
    <Link href={"/"} className="underline">
      <Title small={small} />
    </Link>
  );
};
