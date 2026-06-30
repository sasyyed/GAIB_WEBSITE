import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { getProductPath, products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, buildFaqSchema } from "../utils/seo";

const faqs = [
  {
    question: "Are GAIB Agro products approved under government subsidy?",
    answer:
      "GAIB Agro promotes its agricultural equipment as Govt. SMAM subsidy approved. Farmers should confirm current eligibility for their state, category and selected implement before purchase.",
  },
  {
    question: "How do I apply for subsidy on GAIB Agro equipment?",
    answer:
      "Choose the right implement, confirm eligibility, apply through the official agriculture machinery subsidy portal, and complete the approval and purchase process as per state rules.",
  },
  {
    question: "What crops can the Multi Crop Thresher process?",
    answer:
      "The GAIB Agro Multi Crop Thresher is suitable for wheat, paddy, gram, soybean, mustard and other compatible crops.",
  },
  {
    question: "Which seed drill variants are available?",
    answer:
      "GAIB Agro Seed Cum Fertilizer Drill is listed with 9 furrow and 11 furrow variants for precision seed and fertilizer placement.",
  },
  {
    question: "Does GAIB Agro provide spare parts and service support?",
    answer:
      "Yes. GAIB Agro focuses on genuine spare parts, after-sales support and dealer-assisted service for farmers.",
  },
  {
    question: "Can I get a direct manufacturer price quote?",
    answer:
      "Yes. Farmers and dealers can contact GAIB Agro directly by phone, WhatsApp or the website form for the latest price and product guidance.",
  },
  {
    question: "Where is GAIB Agro Equipment located?",
    answer:
      "GAIB Agro Equipment is located in Bundi, Rajasthan. Registered office and factory details are available on the contact page.",
  },
  {
    question: "Which GAIB products are useful for small farmers?",
    answer:
      "Mini Thresher, Seed Drill, Chaff Cutter, Cultivator and Bund Former are common choices depending on crop, tractor HP and farm requirement.",
  },
];

const Faq = () => {
  usePageSeo({
    title: "Agricultural Equipment FAQ | Subsidy, Products & Price - GAIB Agro",
    description:
      "Find answers about GAIB Agro agricultural equipment, SMAM subsidy approval, product prices, seed drill, thresher, chaff cutter, cultivator and service support.",
    image: "/images/products/baba-super-multi-crop-thresher-square.webp",
    canonical: "/faq/",
    keywords: [
      "agricultural equipment FAQ subsidy",
      "SMAM subsidy FAQ",
      "GAIB Agro product price",
      "farm machinery questions India",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq/" },
      ]),
      buildFaqSchema(faqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Agricultural equipment FAQ for farmers."
        description="Clear answers on subsidy, product selection, price enquiry, support, and GAIB Agro product range."
        image="/images/products/seed-cum-fertilizer-drill-main.webp"
        imageAlt="Seed Drill machine manufactured by GAIB Agro Equipment - Govt subsidy approved"
      />

      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[20px] bg-gaib-cream p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-gaib-dark">{faq.question}</h2>
              <p className="mt-3 leading-7 text-gaib-gray">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="mb-10">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Product FAQs
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark">
            Explore product pages for specifications and variants.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={getProductPath(product)}
              className="focus-ring rounded-[18px] bg-white p-5 font-display text-lg font-bold text-gaib-dark shadow-sm hover:text-gaib-green"
            >
              {product.seoName || product.name}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Faq;
