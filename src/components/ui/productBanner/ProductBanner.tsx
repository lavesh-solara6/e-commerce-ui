import ProductGrid from "@/components/shared/productGrid/ProductGrid";
import React from "react";

function ProductBanner() {
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
      showTopRated: true,
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
    <section className="w-full bg-[#e5e5e5] pb-2">
      <ProductGrid products={productData.slice(0, 2)} />
      <ProductGrid products={[productData[2]]} />
      <ProductGrid products={productData.slice(3)} />
    </section>
  );
}

export default ProductBanner;
