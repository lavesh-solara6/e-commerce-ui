import "@splidejs/react-splide/css";
import Navbar from "@/components/layout/header/Navbar";
import Banner from "@/components/ui/banner/Banner";
import ProductBanner from "@/components/ui/productBanner/ProductBanner";
import ProductDisplay from "@/components/ui/productDisplay/ProductDisplay";
import ExploreCard from "@/components/shared/exploreCard/ExploreCard";
import Footer from "@/components/layout/footer/Footer";

// app/page.tsx
const Home: React.FC = () => {
  return (
    <main className="mx-auto max-w-[425px]">
      {/* Navigation */}
      <Navbar />
      {/* Banner Section */}
      <Banner />
      {/* Product Banner Section */}
      <ProductBanner />

      <ProductDisplay />
      <ExploreCard />

      <Footer />
    </main>
  );
};

export default Home;
