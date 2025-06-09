import ProductCard from "@/components/shared/productCard/ProductCard";
import Image from "next/image";
import React from "react";

const ProductDisplay: React.FC = () => {
  const productData = [
    {
      title: "Nolita",
      price: "$450",
      imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      title: "Nolita",
      price: "$450",
      imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      title: "Nolita",
      price: "$450",
      imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      title: "Nolita",
      price: "$450",
      imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
    },
    {
      title: "Nolita",
      price: "$450",
      imageUrl: "https://i.imgur.com/ZANVnHE.jpeg",
    },
  ];
  return (
    <section className="bg-white">
      <BannerImage
        src="https://i.imgur.com/ZANVnHE.jpeg"
        alt="Banner Image"
        showIcon
        iconClass="fa-solid fa-pause text-[1.5rem] text-black"
      />

      <BannerText
        title={
          <>
            Build your
            <br />
            Nolita&apos;s wardrobe.
          </>
        }
        subtitle="(Every charm fits.)"
      />

      <BannerImage src="https://i.imgur.com/ZANVnHE.jpeg" alt="Banner Image" />

      <ProductCarousel products={productData.slice(0, 2)} />

      <select className="mx-auto mb-8 block text-[1.25rem]" defaultValue="all">
        <option value="all" disabled>
          View More Charms
        </option>
        <option value="new">New Arrivals</option>
        <option value="sale">Sale</option>
        <option value="top-rated">Top Rated</option>
      </select>

      <ProductCarousel products={productData.slice(0, 2)} />

      <PromoBlock />

      <SnapCarousel
        products={[productData[0], productData[1], productData[3]]}
      />
      <ProductCarousel
        products={[productData[0], productData[1], productData[3]]}
      />

      <BannerText
        title={<>It&apos;s a no-regret gift.</>}
        subtitle="The reviews say it all."
        size="3xl"
      />

      <BannerImage src="https://i.imgur.com/ZANVnHE.jpeg" alt="Banner Image" />

      <h1 className="bg-white p-8 text-center text-2xl font-medium text-black">
        &quot;I love this bag!! Perfect size, a good price, super cute, and very
        well made.&quot;
        <br />- Alyssa B.
      </h1>
    </section>
  );
};

export default ProductDisplay;

interface BannerImageProps {
  src: string;
  alt: string;
  showIcon?: boolean;
  iconClass?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({
  src,
  alt,
  showIcon = false,
  iconClass = "",
}) => (
  <div className="relative aspect-square w-full shadow-md">
    <Image src={src} alt={alt} className="object-cover" fill />
    {showIcon && (
      <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <i className={iconClass} />
      </div>
    )}
  </div>
);

interface BannerTextProps {
  title: React.ReactNode;
  subtitle: string;
  size?: string; // e.g. '3xl', '2xl'
}

const BannerText: React.FC<BannerTextProps> = ({
  title,
  subtitle,
  size = "3xl",
}) => (
  <h1 className={`bg-white p-8 text-center text-${size} font-bold text-black`}>
    {title}
    <br />
    <span className="text-xl font-normal">{subtitle}</span>
  </h1>
);

interface ProductCarouselProps {
  products: {
    title: string;
    price: string;
    imageUrl: string;
  }[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => (
  <div className="flex w-full overflow-auto">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

interface SnapCarouselProps {
  products: {
    title: string;
    price: string;
    imageUrl: string;
  }[];
}

const SnapCarousel: React.FC<SnapCarouselProps> = ({ products }) => (
  <div className="snap-x-1 snap-y-0 flex w-full snap-x snap-mandatory snap-center snap-always overflow-auto">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

const PromoBlock: React.FC = () => (
  <div>
    <div className="relative mb-4 aspect-square w-full shadow-md">
      <Image
        src="https://i.imgur.com/ZANVnHE.jpeg"
        alt="Banner Image"
        className="object-cover"
        fill
      />
      <button className="absolute top-[1rem] left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)] px-8 py-2 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg">
        Top Rated
        <span className="absolute bottom-0 left-1/2 h-[12px] w-[12px] -translate-x-1/2 translate-y-1/2 rotate-45 bg-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:bg-white"></span>
      </button>
    </div>
    <h2 className="mb-1 text-center text-[1.25rem]">Nolita</h2>
    <h2 className="mb-4 text-center text-[1.125rem] font-bold">$450</h2>
    <button className="mx-auto flex items-center gap-x-3 rounded-full border border-gray-300 px-4 py-2">
      <i className="fa-solid fa-bag-shopping" />
      <span className="whitespace-nowrap">Add to Bag</span>
    </button>
  </div>
);
