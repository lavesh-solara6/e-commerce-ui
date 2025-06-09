import Image from "next/image";
import React from "react";

function Banner() {
  const imageUrl = "https://i.imgur.com/ZANVnHE.jpeg";
  return (
    <main>
      <HeroSection />
      <section className="w-full bg-black pb-12">
        <ContentBlock
          imageUrl={imageUrl}
          text="Feel put together no matter where you're going."
          align="left"
        />
        <ContentBlock
          imageUrl={imageUrl}
          text="Keep your hands free for any moment."
          align="right"
        />
        <ContentBlock
          imageUrl={imageUrl}
          text="A bag to slip inside your other bag - for your essentials on the go."
          align="left"
        />
      </section>
    </main>
  );
}

export default Banner;

// Layered Title Component
interface LayeredTitleProps {
  text: string;
  layers?: number;
}

const LayeredTitle: React.FC<LayeredTitleProps> = ({ text, layers = 4 }) => {
  return (
    <>
      {Array.from({ length: layers }).map((_, index) => (
        <h2
          key={index}
          className={`text-[2.75rem] font-bold text-white opacity-${(index + 1) * 25}`}
        >
          {text}
        </h2>
      ))}
    </>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute h-screen w-full">
        <Image
          src="https://i.imgur.com/ZANVnHE.jpeg"
          alt="Hero"
          className="object-cover"
          fill
        />
      </div>
      <div className="absolute z-10 flex h-screen w-full flex-col items-center justify-end bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-black px-8 py-12">
        <div className="relative flex flex-col items-center gap-y-2">
          <LayeredTitle text="NOLITA" />
          <p className="mt-4 text-center text-[2rem] font-bold text-white">
            A little more with <br />
            limitless possibilities.
          </p>
          <button className="absolute bottom-[1.5rem] left-1/2 -translate-x-1/2 cursor-pointer rounded-full bg-white px-4 py-2 text-[1rem] font-semibold text-black shadow-md">
            Shop All Nolitas
          </button>
        </div>
      </div>
    </section>
  );
};

// Content Block
interface ContentBlockProps {
  imageUrl: string;
  text: string;
  align: "left" | "right";
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  imageUrl,
  text,
  align,
}) => {
  const isRight = align === "right";
  const containerClass = isRight ? "ml-auto" : "mr-auto";
  const borderRadius = isRight
    ? "rounded-tl-4xl rounded-bl-4xl"
    : "rounded-tr-4xl rounded-br-4xl";
  const iconPosition = isRight ? "bottom-4 left-4" : "right-4 bottom-4";

  return (
    <div className={`${containerClass} mb-8 w-[80%]`}>
      <div className="relative aspect-square w-full">
        <Image
          src={imageUrl}
          alt="Content Image"
          className={`object-cover ${borderRadius}`}
          fill
        />
        <div
          className={`absolute ${iconPosition} flex h-12 w-12 items-center justify-center rounded-full bg-white`}
        >
          <i className="fa-solid fa-pause text-[1.5rem] text-black" />
        </div>
      </div>
      <h2
        className={`w-full p-4 ${isRight ? "pl-0" : ""} text-[1.5rem] text-white`}
      >
        {text}
      </h2>
    </div>
  );
};
