import { clsx } from "clsx";

export const Title = ({ small = false }: { small?: boolean }) => {
  return (
    <div
      className={clsx(
        "tracking-tighter font-bold",
        small ? "text-3xl" : "text-6xl",
      )}
    >
      Travel Blog
    </div>
  );
};
