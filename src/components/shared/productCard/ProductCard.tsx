// components/ProductCard.tsx
import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
  showTopRated?: boolean;
  progress?: number; // e.g., 20 for 20%
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imageUrl,
  showTopRated = false,
  progress = 20,
}) => {
  return (
    <div className="flex-1 p-4">
      <div className="w-full p-4">
        {showTopRated && (
          <button className="mx-auto mb-8 flex items-center gap-x-3 rounded-full bg-white px-8 py-2">
            <span>Top Rated</span>
          </button>
        )}
        <div className="relative mb-4 aspect-square w-full">
          <Image
            src={imageUrl}
            alt={`${title} Image`}
            className="object-cover"
            fill
          />
        </div>
        <div className="mb-4 h-[4px] w-full rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gray-400"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h2 className="mb-1 text-center text-[1.25rem]">{title}</h2>
        <h2 className="mb-4 text-center text-[1.125rem] font-bold">{price}</h2>
        <button className="mx-auto flex items-center gap-x-3 rounded-full border border-gray-300 px-4 py-2">
          <i className="fa-solid fa-bag-shopping" />
          <span className="whitespace-nowrap">Add to Bag</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
