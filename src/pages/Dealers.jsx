import { useState } from "react";
import { FiBarChart2, FiMap, FiPackage, FiUsers } from "react-icons/fi";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Textarea from "../components/ui/Textarea";
import { usePageSeo } from "../hooks/usePageSeo";

const dealerBenefits = [
  {
    title: "Focused Range",
    description: "A clear product lineup led by threshers, seed drills, and cultivators.",
    icon: FiPackage,
  },
  {
    title: "Regional Growth",
    description: "Dealer conversations organized around territory, demand, and support capacity.",
    icon: FiMap,
  },
  {
    title: "Farmer Trust",
    description: "A brand voice centered on reliability, product clarity, and field performance.",
    icon: FiUsers,
  },
  {
    title: "Long-Term Support",
    description: "A partnership mindset built around service, repeat buyers, and seasonal readiness.",
    icon: FiBarChart2,
  },
];

const Dealers = () => {
  const [submitted, setSubmitted] = useState(false);

  usePageSeo({
    title: "Dealers",
    description:
      "Become a GAIB Agro Equipment dealer and partner with a focused agricultural equipment brand.",
    image: "/images/gallery/workshop-line.svg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Dealers"
        title="Partner with GAIB Agro Equipment."
        description="Dealer inquiries are welcomed from businesses that understand farmers, service, and regional agricultural demand."
        image="/images/gallery/workshop-line.svg"
        imageAlt="GAIB workshop production line"
      />
      <Section className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dealerBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-[24px] bg-gaib-cream p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold text-gaib-dark">{benefit.title}</h2>
                <p className="mt-3 leading-7 text-gaib-gray">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Tell us about your dealership interest.
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              Share your region, current business profile, and the product categories you want to represent.
            </p>
          </div>
          <form className="rounded-[24px] bg-white p-6 shadow-card sm:p-8" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="rounded-2xl bg-gaib-green/10 p-5 text-gaib-green" role="status">
                Thank you. The GAIB team will review your dealer inquiry.
              </div>
            ) : null}
            <div className="mt-0 grid gap-5 sm:grid-cols-2">
              <Input id="dealer-name" label="Name" name="name" autoComplete="name" required />
              <Input id="dealer-phone" label="Phone" name="phone" type="tel" autoComplete="tel" required />
              <Input id="dealer-business" label="Business Name" name="business" autoComplete="organization" required />
              <Input id="dealer-region" label="Region / City" name="region" autoComplete="address-level2" required />
              <div className="sm:col-span-2">
                <Textarea id="dealer-message" label="Message" name="message" required />
              </div>
            </div>
            <Button type="submit" className="mt-6" size="lg">
              Send Dealer Inquiry
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Dealers;
