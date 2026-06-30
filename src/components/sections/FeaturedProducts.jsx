import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const FeaturedProducts = () => {
  return (
    <Section className="bg-gaib-cream">
      <Heading
        eyebrow="Products"
        title="Our agricultural equipment products."
        description="Explore GAIB Agro implements for threshing, sowing, tillage, spraying, fodder, land preparation and transport."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProducts;
