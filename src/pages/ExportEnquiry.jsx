import { useState } from "react";
import { FiGlobe, FiMail, FiMessageCircle, FiPackage } from "react-icons/fi";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Textarea from "../components/ui/Textarea";
import { company, companyContactLinks } from "../data/company";
import { products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema } from "../utils/seo";

const exportPoints = [
  "Agricultural equipment export enquiry",
  "Product catalog and specifications",
  "Bulk order discussion",
  "Direct manufacturer communication",
];

const ExportEnquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  usePageSeo({
    title: "Export Enquiry | GAIB Agro Equipment Pvt Ltd",
    description:
      "Send an export enquiry to GAIB Agro Equipment Pvt Ltd for agricultural equipment, threshers, seed drills, cultivators, chaff cutters and farm implements.",
    image: "/images/pages/dealership.webp",
    canonical: "/export-enquiry/",
    keywords: [
      "GAIB Agro export enquiry",
      "agricultural equipment export India",
      "farm machinery exporter India",
      "agricultural implements export enquiry",
    ],
    structuredData: buildBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact/" },
      { name: "Export Enquiry", url: "/export-enquiry/" },
    ]),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Export Enquiry"
        title="Export enquiry for GAIB Agro equipment."
        description="Share your country, product requirement, quantity and contact details with the GAIB Agro team."
        image="/images/pages/dealership.webp"
        imageAlt="GAIB Agro Equipment export enquiry and agricultural equipment dealership"
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
              International Buyers
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark sm:text-4xl">
              Send your export requirement directly.
            </h2>
            <p className="mt-5 leading-8 text-gaib-gray">
              GAIB Agro Equipment can discuss product specifications, quantity, packing, documentation,
              and commercial requirements for export enquiries.
            </p>
            <div className="mt-7 grid gap-3">
              {exportPoints.map((point) => (
                <p key={point} className="flex gap-3 rounded-[16px] bg-gaib-cream p-4 font-semibold text-gaib-dark">
                  <FiPackage className="mt-0.5 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                  {point}
                </p>
              ))}
            </div>
            <div className="mt-7 grid gap-3 text-sm text-gaib-gray">
              <a className="focus-ring flex w-fit items-center gap-3 rounded-full hover:text-gaib-green" href={companyContactLinks.email}>
                <FiMail className="size-5 text-gaib-green" aria-hidden="true" />
                {company.email}
              </a>
              <a className="focus-ring flex w-fit items-center gap-3 rounded-full hover:text-gaib-green" href={companyContactLinks.website}>
                <FiGlobe className="size-5 text-gaib-green" aria-hidden="true" />
                {company.website}
              </a>
            </div>
          </div>

          <form className="rounded-[24px] bg-gaib-cream p-6 shadow-card sm:p-8" onSubmit={handleSubmit}>
            <h2 className="font-display text-3xl font-bold text-gaib-dark">Export enquiry form</h2>
            {submitted ? (
              <div className="mt-5 rounded-2xl bg-gaib-green/10 p-5 text-gaib-green" role="status">
                Thank you. Your export enquiry has been noted.
              </div>
            ) : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Input id="export-name" label="Name" name="name" autoComplete="name" required />
              <Input id="export-company" label="Company Name" name="company" autoComplete="organization" />
              <Input id="export-phone" label="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" required />
              <Input id="export-email" label="Email" name="email" type="email" autoComplete="email" required />
              <Input id="export-country" label="Country" name="country" autoComplete="country-name" required />
              <select
                id="export-product"
                name="product"
                className="min-h-12 rounded-[8px] border border-gaib-dark/15 bg-white px-4 text-sm text-gaib-dark outline-none transition focus:border-gaib-green focus:ring-4 focus:ring-gaib-green/10"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Product Interest
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.seoName || product.name}>
                    {product.seoName || product.name}
                  </option>
                ))}
              </select>
              <Input id="export-quantity" label="Quantity" name="quantity" />
              <Input id="export-port" label="Destination Port / City" name="destination" />
              <div className="sm:col-span-2">
                <Textarea id="export-message" label="Message" name="message" required />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg">
                Send Export Enquiry
              </Button>
              <Button href={companyContactLinks.whatsapp} target="_blank" rel="noreferrer" variant="secondary" size="lg" icon={FiMessageCircle}>
                WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default ExportEnquiry;
