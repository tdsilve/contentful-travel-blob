import { TitleLinkToHome } from "~/components/Title";
import notFoundImage from "../assets/not-found.jpeg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center text-center gap-y-4">
      <Image
        src={notFoundImage}
        width={400}
        height={400}
        alt="not found image"
      />
      <p>Could not find requested resource</p>
      <div>
        Please click here to view all posts <TitleLinkToHome />
      </div>
    </div>
  );
}
