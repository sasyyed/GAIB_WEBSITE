import DealerCTA from "../components/sections/DealerCTA";
import FeatureStrip from "../components/sections/FeatureStrip";
import Factory from "../components/sections/Factory";
import Hero from "../components/sections/Hero";
import HeroProductSpotlight from "../components/sections/HeroProductSpotlight";
import StatsStrip from "../components/sections/StatsStrip";
import Testimonials from "../components/sections/Testimonials";
import WhyChoose from "../components/sections/WhyChoose";
import { usePageSeo } from "../hooks/usePageSeo";

const Home = () => {
  usePageSeo({
    title: "Premium Agro Equipment",
    description:
      "GAIB Agro Equipment Private Limited builds premium threshers, seed drills, cultivators, and agricultural equipment trusted by farmers.",
    image: "/images/hero/hero-1.png",
  });

  return (
    <>
      <Hero />
      <FeatureStrip />
      <WhyChoose />
      <HeroProductSpotlight />
      <StatsStrip />
      <Factory />
      <Testimonials />
      <DealerCTA />
    </>
  );
};

export default Home;
