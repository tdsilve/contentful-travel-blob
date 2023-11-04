"use client";
import { PostType } from "~/lib/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { formatImageSrc } from "../../utils/formatImageSrc";
import Image from "next/image";
import React from "react";
import { useSlidesPerView } from "~/hooks/useSlidesPerView";
type IntroProps = {
  posts: PostType[];
};

export const PostCarroussel = ({ posts }: IntroProps) => {
  const slides = useSlidesPerView();

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={slides}
      spaceBetween={0}
    >
      {posts.map((post) => {
        return (
          <SwiperSlide key={post.id}>
            <PostCarrousselItem post={post} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const PostCarrousselItem = ({ post }: { post: PostType }) => {
  return (
    <div className="relative [@media(hover:hover)]:grayscale transition-all hover:grayscale-0 h-[300px]">
      <Link href={`/post/${post.slug}`}>
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
        <p className="opacity-0 peer-hover:opacity-100 transition ease-in-out duration-300 absolute bg-black text-white p-2 bottom-0">
          {post.title}
        </p>
      </Link>
    </div>
  );
};
