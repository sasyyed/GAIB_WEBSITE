import { FiCheckCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import GallerySlider from "../components/product/GallerySlider";
import ProductCard from "../components/product/ProductCard";
import SpecificationTable from "../components/product/SpecificationTable";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  usePageSeo({
    title: product ? product.name : "Product Not Found",
    description: product
      ? product.shortDescription
      : "The requested GAIB Agro Equipment product could not be found.",
    image: product?.heroImage,
  });

  if (!product) {
    return (
      <Section className="min-h-[65vh] bg-gaib-cream pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Products</Badge>
          <h1 className="mt-5 font-display text-4xl font-bold text-gaib-dark">Product not found</h1>
          <p className="mt-4 leading-8 text-gaib-gray">
            This product may have moved. The full product catalog is available from the products page.
          </p>
          <Button to="/products" className="mt-7">
            View Products
          </Button>
        </div>
      </Section>
    );
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <>
      <section className="bg-gaib-dark pt-28 text-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div>
            <Link to="/products" className="focus-ring rounded-full text-sm font-semibold text-white/70 hover:text-gaib-gold">
              Products
            </Link>
            <Badge className="mt-5 border-white/15 bg-white/10 text-white">{product.category}</Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{product.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={`/contact?product=${product.id}`} variant="light" size="lg">
                Request Quote
              </Button>
              <Button to="/dealers" variant="outlineLight" size="lg">
                Dealer Inquiry
              </Button>
            </div>
          </div>
          <img
            src={product.heroImage}
            alt={product.name}
            className="mx-auto w-full max-w-2xl drop-shadow-[0_35px_55px_rgba(0,0,0,0.28)]"
            loading="eager"
          />
        </Container>
      </section>

      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="grid gap-10">
            <GallerySlider images={product.gallery} productName={product.name} />
            <div className="rounded-[24px] bg-white p-7 shadow-card">
              <h2 className="font-display text-3xl font-bold text-gaib-dark">Product Highlights</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-2xl bg-gaib-cream p-4">
                    <FiCheckCircle className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                    <span className="leading-7 text-gaib-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-gaib-dark">Specifications</h2>
            <SpecificationTable specifications={product.specifications} />
            <Button to={`/contact?product=${product.id}`} className="mt-6 w-full" size="lg">
              Get Quote
            </Button>
          </aside>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge>Related</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark">Explore more GAIB products</h2>
          </div>
          <Button to="/products" variant="secondary">
            All Products
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default ProductDetails;
