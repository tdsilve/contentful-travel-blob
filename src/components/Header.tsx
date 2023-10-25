import { Title } from "./Title";
export const Header = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row items-center text-center justify-center">
      <Title />
      <p className="text-gray-400 max-w-lg">
        Welcome to our travel blog, a passport to adventures and discoveries.
        Join us as we explore the world &apos;s most breathtaking destinations,
        share insider tips, and inspire your wanderlust.
      </p>
    </div>
  );
};
