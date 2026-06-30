import DealerCTA from "../components/sections/DealerCTA";
import Factory from "../components/sections/Factory";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";
import HeroProductSpotlight from "../components/sections/HeroProductSpotlight";
import StatsStrip from "../components/sections/StatsStrip";
import Testimonials from "../components/sections/Testimonials";
import WhyChoose from "../components/sections/WhyChoose";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildFaqSchema, buildLocalBusinessSchema } from "../utils/seo";

const homeFaqs = [
  {
    question: "Are GAIB Agro products approved under government subsidy?",
    answer:
      "Yes. GAIB Agro products are promoted as SMAM government subsidy approved. Farmers can apply online and may receive 40%-80% subsidy depending on category and state rules.",
  },
  {
    question: "Which products does GAIB Agro manufacture?",
    answer:
      "GAIB Agro manufactures Multi Crop Thresher, Mini Thresher, Seed Drill, Seed Cum Fertilizer Drill, Cultivator, Chaff Cutter, Maize Sheller, Bund Former, Tractor Trolley and other farm implements.",
  },
  {
    question: "Can farmers buy directly from GAIB Agro?",
    answer:
      "Yes. GAIB Agro is a direct manufacturer, so farmers and dealers can enquire directly for pricing, specifications, spare parts support and subsidy guidance.",
  },
  {
    question: "What is the capacity of GAIB Multi Crop Thresher?",
    answer:
      "The FMTTI-tested Multi Crop Thresher is promoted for 4 ton/hour capacity and is suitable for wheat, paddy, maize, soybean, millet, pulses and more.",
  },
  {
    question: "Do you provide spare parts?",
    answer:
      "Yes. GAIB Agro maintains genuine spare parts for its equipment and supports quick dispatch to reduce seasonal downtime.",
  },
];

const Home = () => {
  usePageSeo({
    title: "GAIB Agro Equipment Pvt Ltd | Agricultural Equipment Manufacturer India",
    description:
      "GAIB Agro Equipment - Manufacturer of Multi Crop Thresher, Seed Drill, Cultivator, Chaff Cutter & more. All products Govt. Subsidy Approved under SMAM. Buy direct from manufacturer.",
    image: "/images/hero/hero-3.webp",
    canonical: "/",
    keywords: [
      "agricultural equipment manufacturer India",
      "GAIB Agro",
      "farm equipment manufacturer",
      "SMAM approved implements",
    ],
    structuredData: [buildLocalBusinessSchema(), buildFaqSchema(homeFaqs)],
  });

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChoose />
      <Section className="bg-gaib-cream">
        <div className="grid gap-8 rounded-[24px] bg-white p-7 shadow-card lg:grid-cols-[1fr_0.75fr] lg:items-center lg:p-10">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
              Government Subsidy Scheme
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-gaib-dark sm:text-4xl">
              Get up to 80% subsidy on GAIB Agro equipment.
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              All GAIB Agro equipment is promoted as Govt. Subsidy Approved under SMAM. Farmers can apply
              online, choose the approved implement, and receive subsidy support as per category and state rules.
            </p>
          </div>
          <div className="rounded-[18px] border border-gaib-gold/50 bg-gaib-gold/12 p-6">
            {["General farmers: 40%-50%", "SC/ST, women, small and marginal farmers: 50%-80%", "Apply through agrimachinery.nic.in", "Direct manufacturer quote assistance"].map((item) => (
              <p key={item} className="border-b border-gaib-dark/10 py-3 font-semibold text-gaib-dark last:border-b-0">
                {item}
              </p>
            ))}
            <Button to="/government-subsidy" variant="gold" className="mt-5">
              View Subsidy Guide
            </Button>
          </div>
        </div>
      </Section>
      <HeroProductSpotlight />
      <StatsStrip />
      <Factory />
      <Testimonials />
      <Section className="bg-white">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
            Answers for farmers comparing GAIB Agro equipment.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {homeFaqs.map((faq) => (
            <article key={faq.question} className="rounded-[20px] bg-gaib-cream p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gaib-dark">{faq.question}</h3>
              <p className="mt-3 leading-7 text-gaib-gray">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>
      <DealerCTA />
    </>
  );
};

export default Home;
