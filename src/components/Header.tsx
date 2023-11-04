import { BlogTitle } from "./index";

export const Header = () => {
  return (
    <div className="text-center">
      <BlogTitle small />
      <div className="relative overflow-hidden max-h-[574px] mt-4">
        <video src="/video/cover-video.mp4" autoPlay muted loop />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-3">
          <h3 className="text-lg sm:text-3xl text-shadow-md">
            Passport to Adventures
          </h3>
          <p className="text-base hidden sm:block text-shadow-md max-w-md">
            Join us as we explore the world &apos;s most breathtaking
            destinations, share insider tips, and inspire your wanderlust.
          </p>
        </div>
      </div>
    </div>
  );
};
