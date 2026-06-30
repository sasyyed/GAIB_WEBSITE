import { FiCheckCircle, FiClipboard, FiMessageCircle } from "react-icons/fi";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { companyContactLinks } from "../data/company";
import { getProductPath, products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, buildFaqSchema } from "../utils/seo";

const subsidyFaqs = [
  {
    question: "What is the SMAM subsidy scheme?",
    answer:
      "SMAM means Sub-Mission on Agricultural Mechanization. It supports farmers in buying approved agricultural machinery and implements.",
  },
  {
    question: "How much subsidy can farmers get?",
    answer:
      "Subsidy usually depends on state rules and farmer category. General farmers may receive 40%-50%, while SC/ST, women, small and marginal farmers may receive higher support up to 80%.",
  },
  {
    question: "Are GAIB Agro products subsidy approved?",
    answer:
      "GAIB Agro promotes its equipment as Govt. SMAM subsidy approved. Farmers should confirm current eligibility with GAIB Agro and the official portal before purchase.",
  },
  {
    question: "Where can farmers apply online?",
    answer:
      "Farmers can apply through the official agricultural machinery subsidy portal and select an approved manufacturer and implement as per their state process.",
  },
  {
    question: "Can GAIB Agro help with product selection?",
    answer:
      "Yes. GAIB Agro can guide farmers on the right machine, variant, specifications and price quote before subsidy application.",
  },
];

const subsidyTable = [
  { category: "General Farmers", support: "Usually 40%-50%", note: "Depends on state rules and equipment category" },
  { category: "SC/ST Farmers", support: "Up to 50%-80%", note: "Higher assistance may apply under eligible schemes" },
  { category: "Women Farmers", support: "Up to 50%-80%", note: "Category benefits vary by state and scheme" },
  { category: "Small/Marginal Farmers", support: "Up to 50%-80%", note: "Eligibility is verified through the official process" },
];

const GovernmentSubsidy = () => {
  usePageSeo({
    title: "Govt Subsidy on Agricultural Equipment India | SMAM Scheme - GAIB Agro",
    description:
      "GAIB Agro products are Govt. Subsidy Approved under SMAM. Get 40%-80% subsidy on Thresher, Seed Drill, Cultivator & more. Learn how to apply.",
    image: "/images/products/baba-super-multi-crop-thresher-square.webp",
    canonical: "/government-subsidy/",
    keywords: [
      "agricultural equipment subsidy India SMAM",
      "SMAM scheme agricultural equipment",
      "thresher subsidy India",
      "seed drill subsidy government",
      "farm equipment subsidy apply",
      "krishi yantra yojana approved manufacturer",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Government Subsidy", url: "/government-subsidy/" },
      ]),
      buildFaqSchema(subsidyFaqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Government Subsidy"
        title="Government Subsidy on Agricultural Equipment | SMAM Scheme 2025-26"
        description="GAIB Agro helps farmers choose subsidy-approved agricultural equipment with clear product information and direct manufacturer support."
        image="/images/products/baba-super-multi-crop-thresher-square.webp"
        imageAlt="GAIB Agro SMAM Government Subsidy approved agricultural equipment India"
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
              What is SMAM?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Subsidy support for modern farm mechanization.
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              The Sub-Mission on Agricultural Mechanization supports farmers in buying approved farm
              machinery and implements. GAIB Agro products are promoted as subsidy-approved options
              for farmers looking for threshers, seed drills, cultivators, chaff cutters and more.
            </p>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-gaib-cream shadow-card">
            {subsidyTable.map((row) => (
              <div key={row.category} className="grid gap-2 border-b border-gaib-dark/10 p-5 last:border-b-0 sm:grid-cols-[0.8fr_0.7fr_1fr]">
                <strong className="text-gaib-dark">{row.category}</strong>
                <span className="font-bold text-gaib-green">{row.support}</span>
                <span className="text-sm leading-6 text-gaib-gray">{row.note}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="mb-10">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Eligible Product Range
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
            GAIB Agro products for subsidy enquiry.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              href={getProductPath(product)}
              className="focus-ring flex items-center gap-3 rounded-[18px] bg-white p-5 font-semibold text-gaib-dark shadow-sm hover:text-gaib-green"
            >
              <FiCheckCircle className="size-5 shrink-0 text-gaib-green" aria-hidden="true" />
              {product.seoName || product.name}
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <FiClipboard className="size-10 text-gaib-green" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark">How to apply for subsidy</h2>
            <p className="mt-4 leading-8 text-gaib-gray">
              Keep your basic documents ready, choose the right implement, confirm eligibility, and apply through
              the official state or national machinery subsidy process.
            </p>
          </div>
          <div className="grid gap-4">
            {["Confirm product and model with GAIB Agro", "Check state subsidy eligibility and farmer category", "Apply online through the official agriculture machinery portal", "Complete approval, billing and delivery process"].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[18px] bg-gaib-cream p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gaib-green font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-semibold leading-7 text-gaib-dark">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gaib-green text-white">
        <div className="rounded-[24px] bg-white/10 p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Confirm your subsidy eligibility</h2>
            <p className="mt-3 max-w-2xl leading-8 text-white/78">
              Share your product requirement, state, farmer category and phone number with GAIB Agro.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button href={companyContactLinks.whatsapp} target="_blank" rel="noreferrer" variant="gold" icon={FiMessageCircle}>
              WhatsApp
            </Button>
            <Button to="/contact" variant="light">
              Contact Sales
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Subsidy FAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark">Common farmer questions.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {subsidyFaqs.map((faq) => (
            <article key={faq.question} className="rounded-[20px] bg-gaib-cream p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gaib-dark">{faq.question}</h3>
              <p className="mt-3 leading-7 text-gaib-gray">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default GovernmentSubsidy;
