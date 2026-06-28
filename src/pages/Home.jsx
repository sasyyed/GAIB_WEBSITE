import AboutPreview from "../components/sections/AboutPreview";
import ContactPreview from "../components/sections/ContactPreview";
import DealerCTA from "../components/sections/DealerCTA";
import Factory from "../components/sections/Factory";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import GalleryPreview from "../components/sections/GalleryPreview";
import Hero from "../components/sections/Hero";
import WhyChoose from "../components/sections/WhyChoose";
import { usePageSeo } from "../hooks/usePageSeo";

const Home = () => {
  usePageSeo({
    title: "Premium Agro Equipment",
    description:
      "GAIB Agro Equipment Pvt. Ltd. builds premium threshers, seed drills, cultivators, and agricultural equipment trusted by farmers.",
  });

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChoose />
      <AboutPreview />
      <Factory />
      <GalleryPreview />
      <DealerCTA />
      <ContactPreview />
    </>
  );
};

export default Home;
