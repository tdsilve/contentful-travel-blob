"use client";
import { PostType } from "~/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { formatImageSrc } from "../utils/formatImageSrc";
import Image from "next/image";
type IntroProps = {
  posts: PostType[];
};
export const Intro = ({ posts }: IntroProps) => {
  return (
    <div>
      <SectionTitle title={"Spots for true adventures"} />
      <ImageSlider posts={posts} />
    </div>
  );
};

const ImageSlider = ({ posts }: IntroProps) => {
  return (
    <div className="mt-4">
      <Swiper modules={[Navigation]} navigation>
        {posts.map((post) => {
          return (
            <SwiperSlide key={post.id}>
              <ImageSliderItem post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const ImageSliderItem = ({ post }: { post: PostType }) => {
  console.log(formatImageSrc(post.cover.url));
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="relative [@media(hover:hover)]:grayscale transition-all hover:grayscale-0 mx-auto w-[500px] h-[300px]">
        <Image
          src={formatImageSrc(post.cover.url)}
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
          alt={post.cover.title}
          className="peer"
          priority
        />
        <p className="opacity-0 peer-hover:opacity-100 transition-opacity absolute bg-black text-white p-2 bottom-0">
          {post.title}
        </p>
      </div>
    </Link>
  );
};

//
