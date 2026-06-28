import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const FeaturedProducts = () => {
  return (
    <Section className="bg-gaib-cream">
      <Heading
        eyebrow="Products"
        title="Field-ready machines, refined for serious work."
        description="Explore the primary GAIB range built around harvest, sowing, and soil preparation needs."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {products
          .filter((product) => product.featured)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Section>
  );
};

export default FeaturedProducts;
