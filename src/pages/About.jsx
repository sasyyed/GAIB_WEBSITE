import { FiAward, FiFlag, FiTarget, FiTool } from "react-icons/fi";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { usePageSeo } from "../hooks/usePageSeo";

const values = [
  {
    title: "Company Story",
    description:
      "GAIB Agro Equipment Pvt. Ltd. is presented as a focused manufacturer of practical, premium farm equipment.",
    icon: FiAward,
  },
  {
    title: "Mission",
    description:
      "Deliver dependable agricultural equipment that helps farmers work with confidence across every season.",
    icon: FiTarget,
  },
  {
    title: "Vision",
    description:
      "Build a modern Indian agro equipment brand recognized for quality, clarity, and dealer-led reach.",
    icon: FiFlag,
  },
  {
    title: "Quality",
    description:
      "Keep manufacturing, inspection, and serviceability visible so buyers understand the product promise.",
    icon: FiTool,
  },
];

const About = () => {
  usePageSeo({
    title: "About",
    description:
      "Learn about GAIB Agro Equipment Pvt. Ltd., its mission, manufacturing focus, quality promise, and farmer-first vision.",
    image: "/images/gallery/factory-floor.svg",
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A modern agro equipment brand built around trust."
        description="GAIB keeps its promise focused on manufacturing discipline, dependable support, and products farmers can understand quickly."
        image="/images/gallery/factory-floor.svg"
        imageAlt="GAIB manufacturing"
      />
      <Section className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="rounded-[24px] bg-gaib-cream p-7 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-gaib-dark">{value.title}</h2>
                <p className="mt-3 leading-8 text-gaib-gray">{value.description}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Manufacturing and service are part of the brand experience.
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              Clear product information, visible quality checks, and dealer support help farmers and partners
              make confident decisions.
            </p>
          </div>
          <img
            src="/images/gallery/quality-check.svg"
            alt="GAIB quality inspection"
            className="rounded-[24px] bg-white shadow-card"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
};

export default About;
