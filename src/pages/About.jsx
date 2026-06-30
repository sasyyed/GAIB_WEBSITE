import {
  FiCheckCircle,
  FiCpu,
  FiMapPin,
  FiPhone,
  FiSettings,
  FiShield,
  FiTool,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { company, companyContactLinks } from "../data/company";
import { getProductPath, products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, siteUrl } from "../utils/seo";

const manufacturingEquipment = [
  "CNC Plasma Cutting Machine",
  "Hydraulic Power Press",
  "Vertical Slotter Machine",
  "Lathe Machines",
  "Power Hacksaw",
  "Drill Machines",
  "Industrial Testing Equipment",
];

const designBenefits = [
  "Precision engineering with exact tolerances",
  "Optimal weight-to-strength design",
  "Consistent quality in every unit",
  "Continuous improvement through digital design",
];

const productGroups = [
  {
    title: "Threshing & Grain Processing",
    products: ["Multi Crop Thresher", "Mini Thresher", "Chaff Cutter"],
  },
  {
    title: "Planting & Soil Preparation",
    products: ["Seed Drill", "Seed Cum Fertilizer Drill", "Cultivator", "Bund Former"],
  },
  {
    title: "Specialized Processing & Transport",
    products: ["Maize Sheller", "Tractor Trolley", "Tractor Operated Sprayer"],
  },
];

const subsidyRows = [
  { farmer: "General Farmers", benefit: "40-50% subsidy on equipment cost" },
  { farmer: "SC/ST Farmers", benefit: "50-80% subsidy" },
  { farmer: "Women Farmers", benefit: "50-80% subsidy" },
  { farmer: "Small & Marginal Farmers", benefit: "50-80% subsidy" },
];

const reasons = [
  {
    title: "Direct Manufacturer - No Middleman",
    text: "GAIB manufactures its own equipment from raw material to finished product, helping farmers get direct pricing, faster delivery and better quality control.",
    icon: FiTool,
  },
  {
    title: "13+ Years of Experience",
    text: "Since 2010, GAIB has continuously refined its designs and manufacturing process to deliver field-tested equipment.",
    icon: FiSettings,
  },
  {
    title: "Government Approved & Certified",
    text: "Products are promoted as SMAM subsidy approved, with Multi Crop Thresher performance testing by FMTTI.",
    icon: FiShield,
  },
  {
    title: "Pan-India Availability",
    text: "GAIB supports farmers, dealers and custom hiring centres with product guidance, delivery support and spare parts.",
    icon: FiTruck,
  },
];

const spareSupport = [
  "Genuine spare parts always in stock",
  "Parts dispatch support within 24-48 hours",
  "Affordable direct manufacturer pricing",
  "Technical guidance for installation and troubleshooting",
  "Manufacturer warranty and product support",
];

const About = () => {
  usePageSeo({
    title: "About GAIB Agro Equipment Pvt Ltd | Agricultural Equipment Manufacturer India",
    description:
      "Learn about GAIB Agro Equipment - India's trusted agricultural equipment manufacturer since 2010. FMTTI tested, Govt. subsidy approved. Located in Bundi, Rajasthan.",
    image: "/images/pages/about-us.webp",
    canonical: "/about/",
    keywords: [
      "GAIB Agro Equipment Pvt Ltd",
      "agricultural equipment manufacturer India",
      "thresher manufacturer Rajasthan",
      "SMAM approved implements Bundi",
      "farm equipment manufacturer since 2010",
      "FMTTI tested thresher",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About", url: "/about/" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About GAIB Agro Equipment Pvt Ltd",
        url: `${siteUrl}/about/`,
        description:
          "About GAIB Agro Equipment Pvt Ltd, agricultural equipment manufacturer since 2010 based in Bundi, Rajasthan.",
        mainEntity: {
          "@type": "Organization",
          name: "GAIB Agro Equipment Pvt Ltd",
          foundingDate: "2010",
          url: siteUrl,
          knowsAbout: [
            "Multi Crop Thresher",
            "Seed Drill",
            "Cultivator",
            "Chaff Cutter",
            "Maize Sheller",
            "Agricultural Equipment Manufacturing",
          ],
        },
      },
    ],
  });

  const featuredLinks = products.filter((product) =>
    ["baba-super-multi-crop-thresher", "seed-cum-fertilizer-drill", "cultivator"].includes(product.id),
  );

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About GAIB Agro Equipment Pvt Ltd - Trusted Agricultural Equipment Manufacturer Since 2010"
        description="Based in Bundi, Rajasthan, GAIB Agro manufactures subsidy-approved agricultural implements for farmers, dealers, custom hiring centres and agricultural cooperatives."
        image="/images/pages/about-us.webp"
        imageAlt="GAIB Agro Equipment manufacturing facility in Bundi Rajasthan with agricultural implements"
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
              Trusted Since 2010
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-gaib-dark sm:text-5xl">
              Agricultural equipment built for Indian farmers.
            </h1>
            <div className="mt-6 grid gap-5 leading-8 text-gaib-gray">
              <p>
                GAIB Agro Equipment Pvt Ltd is a leading agricultural equipment manufacturer based in
                Bundi, Rajasthan, just 35 km from Kota on National Highway 52. Since 2010, the company
                has focused on designing, manufacturing and delivering reliable agricultural implements
                that empower farmers across India.
              </p>
              <p>
                The journey began with farming innovation, thresher repair experience and a commitment
                to quality. Under the guidance of experienced family members with deep roots in agriculture
                and machinery, GAIB has grown into a trusted farm equipment brand.
              </p>
              <p>
                Today, GAIB Agro serves farmers, custom hiring centres and agricultural cooperatives with
                a comprehensive range of modern farm equipment. Products are promoted as Government
                Subsidy Approved under the SMAM scheme, making quality machinery accessible to farmers.
              </p>
            </div>
          </div>
          <div className="grid aspect-[3/2] place-items-center rounded-[24px] bg-gaib-cream p-3 shadow-card">
            <img
              src="/images/pages/about-us.webp"
              alt="GAIB Agro Equipment product range and mission"
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <FiCpu className="size-11 text-gaib-green" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Our Manufacturing Excellence
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              Quality begins with precision manufacturing. GAIB Agro uses modern machinery, tested
              processes and skilled workmanship to keep every product field-ready.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {manufacturingEquipment.map((item) => (
              <div key={item} className="rounded-[18px] bg-white p-5 shadow-sm">
                <FiCheckCircle className="size-5 text-gaib-green" aria-hidden="true" />
                <p className="mt-3 font-semibold text-gaib-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[24px] bg-gaib-cream p-7 shadow-sm">
            <h2 className="font-display text-3xl font-bold text-gaib-dark">CAD/CAM Design Precision</h2>
            <p className="mt-4 leading-8 text-gaib-gray">
              Every important component used in GAIB threshers and agricultural equipment is developed
              with CAD/CAM design support for accuracy, assembly fit and consistent production.
            </p>
            <div className="mt-6 grid gap-3">
              {designBenefits.map((item) => (
                <p key={item} className="flex gap-3 leading-7 text-gaib-gray">
                  <FiCheckCircle className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="rounded-[24px] bg-gaib-green p-7 text-white shadow-card">
            <h2 className="font-display text-3xl font-bold">FMTTI Tested & Approved</h2>
            <p className="mt-4 leading-8 text-white/82">
              GAIB's Multi Crop Thresher has been performance tested and certified by FMTTI
              for a capacity of 4 tons/hour. This third-party testing supports verified
              performance, national standards compliance and suitability for commercial farming.
            </p>
            <Button to="/products/multi-crop-thresher" variant="gold" className="mt-6">
              View Multi Crop Thresher
            </Button>
          </article>
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Product Range
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
            Comprehensive range of agricultural equipment.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {productGroups.map((group) => (
            <article key={group.title} className="rounded-[24px] bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-gaib-dark">{group.title}</h3>
              <div className="mt-5 grid gap-3">
                {group.products.map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-semibold text-gaib-gray">
                    <FiCheckCircle className="mt-0.5 size-4 shrink-0 text-gaib-green" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {featuredLinks.map((product) => (
            <Button key={product.id} to={getProductPath(product)} variant="secondary">
              {product.seoName || product.name}
            </Button>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
              SMAM Scheme
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Government Subsidy Approved Equipment
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              GAIB Agro products are promoted as approved under the Government of India's SMAM
              (Sub-Mission on Agricultural Mechanization) scheme. Equipment is registered through
              the government agricultural machinery system for transparent subsidy processing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/government-subsidy" variant="gold">
                Learn About Subsidy
              </Button>
              <a
                href="https://agrimachinery.nic.in/"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-gaib-green bg-white px-5 font-semibold text-gaib-green hover:bg-gaib-green hover:text-white"
              >
                SMAM Portal
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[24px] bg-gaib-cream shadow-card">
            {subsidyRows.map((row) => (
              <div key={row.farmer} className="grid gap-2 border-b border-gaib-dark/10 p-5 last:border-b-0 sm:grid-cols-[0.8fr_1fr]">
                <strong className="text-gaib-dark">{row.farmer}</strong>
                <span className="font-semibold text-gaib-green">{row.benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Always Available Spare Parts & Service Support
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              Farming seasons cannot wait. GAIB maintains genuine spare parts and support so farmers
              can reduce downtime and keep machines running efficiently.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spareSupport.map((item) => (
              <div key={item} className="rounded-[18px] bg-white p-5 shadow-sm">
                <FiCheckCircle className="size-5 text-gaib-green" aria-hidden="true" />
                <p className="mt-3 font-semibold text-gaib-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Why Choose GAIB Agro?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
            Why farmers and dealers choose GAIB Agro Equipment.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="rounded-[24px] bg-gaib-cream p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gaib-dark">{reason.title}</h3>
                <p className="mt-3 leading-7 text-gaib-gray">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gaib-green text-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <FiMapPin className="size-11 text-gaib-gold" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Manufacturing Facility Location</h2>
            <p className="mt-5 leading-8 text-white/82">
              GAIB Agro Equipment Pvt Ltd is located in Bundi, Rajasthan, 35 km from Kota, with
              direct access from National Highway 52 for easy farmer visits, demonstrations and deliveries.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/10 p-6">
            <p className="flex gap-3 leading-8 text-white/86">
              <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-gold" aria-hidden="true" />
              {company.factoryAddress}
            </p>
            <p className="mt-4 flex gap-3 leading-8 text-white/86">
              <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-gold" aria-hidden="true" />
              {company.registeredAddress}
            </p>
            <Button href={company.mapsUrl} target="_blank" rel="noreferrer" variant="gold" className="mt-6">
              Locate GAIB Agro
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Commitment To Farmers
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
            Ready to upgrade your farming operations?
          </h2>
          <p className="mt-5 leading-8 text-gaib-gray">
            GAIB Agro is committed to reducing farming costs, increasing productivity and improving
            farmer incomes through accessible, reliable agricultural equipment. Contact the team for
            a free price quote, subsidy eligibility guidance or a factory visit.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact" icon={FiPhone}>
              Contact GAIB Agro
            </Button>
            <Button href={companyContactLinks.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
              WhatsApp
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold text-gaib-gray">
            <Link to="/products" className="focus-ring rounded-full hover:text-gaib-green">
              Complete Product Range
            </Link>
            <Link to="/government-subsidy" className="focus-ring rounded-full hover:text-gaib-green">
              Government Subsidy Eligibility
            </Link>
            <Link to="/contact" className="focus-ring rounded-full hover:text-gaib-green">
              Contact Information
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
