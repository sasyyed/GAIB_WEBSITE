import ProductCard from "../components/product/ProductCard";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { getImageSrc, getProductPath, products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, siteUrl } from "../utils/seo";

const Products = () => {
  usePageSeo({
    title: "Agricultural Implements India | GAIB Agro Equipment Products",
    description:
      "Explore GAIB Agro Equipment products including Multi Crop Thresher, Seed Drill, Cultivator, Chaff Cutter, Maize Sheller, Disc Harrow, Bund Former and Tractor Trolley.",
    image: "/images/products/baba-super-multi-crop-thresher-square.webp",
    canonical: "/products/",
    keywords: [
      "agricultural implements India",
      "GAIB Agro Equipment products",
      "agricultural equipment manufacturer",
      "farm machinery India",
      "seed drill cultivator thresher sprayer trolley",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products/" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "GAIB Agro Equipment Product Catalog",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}${getProductPath(product)}/`,
          item: {
            "@type": "Product",
            name: product.seoName || product.name,
            image: `${siteUrl}${getImageSrc(product.image)}`,
            description: product.shortDescription,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "GAIB Agro",
            },
          },
        })),
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="GAIB agricultural equipment product catalog."
        description="Compare product photos, variants, and technical specifications from the GAIB range."
        image="/images/products/baba-super-multi-crop-thresher-square.webp"
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
