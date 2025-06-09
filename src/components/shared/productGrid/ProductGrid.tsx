// components/ProductGrid.tsx
import React from "react";
import ProductCard from "../productCard/ProductCard";

interface ProductGridProps {
  products: React.ComponentProps<typeof ProductCard>[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
