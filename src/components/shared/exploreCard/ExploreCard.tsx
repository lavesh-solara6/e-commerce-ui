"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";

function ExploreCard() {
  return (
    <section className="bg-black">
      <h1 className="py-12 text-center text-[2.5rem] leading-tight font-bold text-white">
        There&apos;s more <br />
        to explore.
      </h1>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          focus: "center",
          gap: "1.5rem",
          padding: "15%",
          arrows: false,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
              padding: "20%",
            },
          },
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SplideSlide key={i}>
            <div className="relative mb-4 aspect-[9/16] w-full rounded-3xl shadow-md">
              <Image
                src="https://i.imgur.com/ZANVnHE.jpeg"
                alt="Banner Image"
                className="rounded-3xl object-cover"
                fill
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 px-4 pb-8">
              <h2 className="text-[1.5rem] font-bold text-white">
                Explore More
              </h2>
              <p className="text-center text-sm text-gray-300">
                Discover a variety of products tailored just for you.
              </p>
              <button className="mt-4 rounded-full bg-white px-6 py-2 font-semibold text-black shadow-md transition-all duration-300 hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default ExploreCard;
