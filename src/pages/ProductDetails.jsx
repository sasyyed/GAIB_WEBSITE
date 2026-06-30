import { FiCheckCircle, FiShield } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import GallerySlider from "../components/product/GallerySlider";
import ProductCard from "../components/product/ProductCard";
import SpecificationTable from "../components/product/SpecificationTable";
import VariantTable from "../components/product/VariantTable";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { findProductBySlug, getImageSrc, getProductImages, getProductPath, products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "../utils/seo";

const toAbsoluteUrl = (path) => {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const buildProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.seoName || product.name,
  brand: {
    "@type": "Brand",
    name: "GAIB Agro",
  },
  manufacturer: {
    "@type": "Organization",
    name: "GAIB Agro Equipment Pvt Ltd",
    url: siteUrl,
  },
  countryOfOrigin: "India",
  category: product.category,
  description: `${product.description} Govt. SMAM Subsidy Approved and available direct from manufacturer.`,
  image: getProductImages(product).map(toAbsoluteUrl),
  url: `${siteUrl}${getProductPath(product)}/`,
  offers: {
    "@type": "Offer",
    url: `${siteUrl}${getProductPath(product)}/`,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "GAIB Agro Equipment Pvt Ltd",
    },
  },
  additionalProperty: product.specifications.map((item) => ({
    "@type": "PropertyValue",
    name: item.label,
    value: item.value,
  })),
  ...(product.variants?.length
    ? {
        hasVariant: product.variants.map((variant) => ({
          "@type": "Product",
          name: `${product.name} ${variant.name}`,
          description: variant.specifications,
          additionalProperty: [
            { "@type": "PropertyValue", name: "Variant", value: variant.name },
            { "@type": "PropertyValue", name: "Power", value: variant.power },
            { "@type": "PropertyValue", name: "Weight", value: variant.weight },
          ],
        })),
      }
    : {}),
});

const getSpecValue = (product, terms) =>
  product.specifications.find((item) =>
    terms.some((term) => item.label.toLowerCase().includes(term)),
  )?.value;

const buildProductFaqs = (product) => [
  {
    question: `Is ${product.seoName || product.name} eligible for government subsidy?`,
    answer: `Yes. GAIB Agro promotes ${product.seoName || product.name} as Govt. SMAM subsidy approved. Farmers can contact GAIB Agro to confirm subsidy eligibility for their state and category.`,
  },
  {
    question: `What is the price of ${product.seoName || product.name}?`,
    answer: "Price depends on model, variant, configuration, location and subsidy eligibility. Contact GAIB Agro directly for the latest manufacturer quote.",
  },
  {
    question: `What is the power requirement for ${product.seoName || product.name}?`,
    answer: getSpecValue(product, ["power", "required hp"]) || "Power requirement depends on the selected model and field application. GAIB Agro can recommend the right option.",
  },
  {
    question: `Why buy ${product.seoName || product.name} from GAIB Agro?`,
    answer: "GAIB Agro is a direct manufacturer offering tested equipment, genuine spare parts, after-sales support and farmer-focused product guidance.",
  },
  {
    question: `How can I enquire about ${product.seoName || product.name}?`,
    answer: "Use the quote form, call GAIB Agro, or send a WhatsApp message with your name, state and product requirement.",
  },
];

const processStepsByCategory = {
  Threshing: ["Feed harvested crop into the machine", "Threshing drum separates grain", "Blower helps clean output", "Collect clean grain for bagging"],
  Sowing: ["Fill seed and fertilizer boxes", "Set furrow spacing and depth", "Operate through tractor linkage", "Place seed uniformly for better germination"],
  Tillage: ["Attach implement to tractor", "Adjust working depth", "Work across field rows", "Prepare soil for sowing and irrigation"],
  Spraying: ["Fill tank with spray solution", "Connect PTO drive", "Use hose and spray gun", "Apply uniform crop coverage"],
  "Land Preparation": ["Attach to tractor linkage", "Adjust bund size", "Run along field boundary", "Create bunds for irrigation management"],
  "Post Harvest": ["Feed crop into shelling chamber", "Machine separates grain", "Screens help clean output", "Collect shelled maize for storage"],
  Fodder: ["Feed fodder material", "Rollers guide crop", "Blades cut fodder", "Collect chopped feed for cattle"],
  Transport: ["Load crop or farm material", "Secure trolley sides", "Attach to tractor", "Transport safely across farm or road"],
};

const applicationByCategory = {
  Threshing: "Suitable for wheat, paddy, gram, soybean, mustard and multi-crop threshing work.",
  Sowing: "Useful for wheat, paddy, soybean, chickpea, mustard, gram and other seed drilling applications.",
  Tillage: "Useful for soil preparation, clod breaking, residue mixing and secondary tillage.",
  Spraying: "Useful for crop protection, pesticide spraying and high-pressure field spraying.",
  "Land Preparation": "Useful for bund making, irrigation channel support and water conservation work.",
  "Post Harvest": "Useful for maize shelling, dehusking support and post-harvest grain preparation.",
  Fodder: "Useful for cattle farmers, dairy farms and regular fodder cutting work.",
  Transport: "Useful for crop, input, material and equipment transport.",
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = findProductBySlug(productId);
  const heroImage = product ? getImageSrc(product.heroImage) : undefined;
  const productFaqs = product ? product.faqs || buildProductFaqs(product) : [];

  usePageSeo({
    title: product ? product.seoTitle || `${product.name} Manufacturer India - GAIB Agro` : "Product Not Found | GAIB Agro",
    description: product
      ? product.seoDescription || product.shortDescription
      : "The requested GAIB Agro Equipment product could not be found.",
    image: heroImage,
    canonical: product ? `${getProductPath(product)}/` : "/products/",
    keywords: product ? [product.focusKeyword, ...(product.altKeywords || []), ...(product.keywords || [])].filter(Boolean) : undefined,
    structuredData: product
      ? [
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Products", url: "/products/" },
            { name: product.seoName || product.name, url: `${getProductPath(product)}/` },
          ]),
          buildProductSchema(product),
          buildFaqSchema(productFaqs),
        ]
      : undefined,
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
            <Badge className="ml-0 mt-3 border-gaib-gold/40 bg-gaib-gold text-gaib-dark">
              Govt. Subsidy Approved
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {product.h1 || `${product.seoName || product.name} Manufacturer India`}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">{product.description}</p>
            {product.keyBenefit ? (
              <p className="mt-4 max-w-2xl rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold leading-6 text-white/86">
                {product.keyBenefit}
              </p>
            ) : null}
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
            src={heroImage}
            alt={product.imageAlt || product.name}
            className="mx-auto w-full max-w-2xl drop-shadow-[0_35px_55px_rgba(0,0,0,0.28)]"
            loading="eager"
          />
        </Container>
      </section>

      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="grid gap-10">
            <GallerySlider images={product.gallery} productName={product.name} />
            <VariantTable variants={product.variants} />
            <div className="rounded-[24px] border border-gaib-gold/40 bg-gaib-gold/12 p-7 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <FiShield className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-gaib-dark">SMAM Government Subsidy Approved</h2>
                  <p className="mt-3 leading-8 text-gaib-gray">
                    This product is promoted as eligible under the Government of India SMAM subsidy system.
                    Farmers may receive subsidy benefits depending on state rules and category.
                  </p>
                  <Button to="/government-subsidy" variant="secondary" className="mt-5">
                    Learn About Subsidy
                  </Button>
                </div>
              </div>
            </div>
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
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] bg-white p-7 shadow-card">
                <h2 className="font-display text-3xl font-bold text-gaib-dark">How It Works</h2>
                <div className="mt-6 grid gap-4">
                  {(product.howItWorks || processStepsByCategory[product.category] || product.features).slice(0, 4).map((step, index) => (
                    <p key={step} className="flex gap-3 leading-7 text-gaib-gray">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gaib-green text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      {step}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] bg-white p-7 shadow-card">
                <h2 className="font-display text-3xl font-bold text-gaib-dark">Applications</h2>
                <p className="mt-5 leading-8 text-gaib-gray">
                  {product.applicationText || applicationByCategory[product.category] || product.shortDescription}
                </p>
                <h3 className="mt-6 font-display text-xl font-bold text-gaib-dark">Why GAIB Agro?</h3>
                <div className="mt-4 grid gap-3">
                  {["Direct manufacturer pricing", "Tested quality", "Genuine spare parts", "Pan-India delivery support"].map((item) => (
                    <p key={item} className="flex gap-2 text-sm font-semibold text-gaib-gray">
                      <FiCheckCircle className="mt-0.5 size-4 shrink-0 text-gaib-green" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
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
        <div className="mb-12 rounded-[24px] bg-gaib-cream p-7 shadow-sm">
          <h2 className="font-display text-3xl font-bold text-gaib-dark">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {productFaqs.map((faq) => (
              <article key={faq.question} className="rounded-[16px] bg-white p-5">
                <h3 className="font-display text-lg font-bold text-gaib-dark">{faq.question}</h3>
                <p className="mt-2 leading-7 text-gaib-gray">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
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
