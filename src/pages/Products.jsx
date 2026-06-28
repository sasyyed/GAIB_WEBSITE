import ProductCard from "../components/product/ProductCard";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";

const Products = () => {
  usePageSeo({
    title: "Products",
    description:
      "Explore GAIB Agro Equipment products including Baba Super Multi Crop Thresher, Seed Cum Fertilizer Drill, Cultivator, and more farm equipment.",
    image: "/images/products/baba-super-multi-crop-thresher.jpg",
  });

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Agricultural equipment with every product front and center."
        description="Compare the complete GAIB range and choose the right machine for your field work."
        image="/images/products/baba-super-multi-crop-thresher.jpg"
        imageAlt="GAIB Baba Super Multi Crop Thresher"
      />
      <Section className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Products;
