import { useMemo, useState } from "react";
import { FiGlobe, FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import Textarea from "../components/ui/Textarea";
import { company, companyContactLinks } from "../data/company";
import { products } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";

const contactCards = [
  {
    title: "Phone",
    value: company.phones.join(" | "),
    href: companyContactLinks.phone,
    icon: FiPhone,
  },
  {
    title: "Email",
    value: company.email,
    href: companyContactLinks.email,
    icon: FiMail,
  },
  {
    title: "Website",
    value: company.website,
    href: companyContactLinks.website,
    icon: FiGlobe,
  },
  {
    title: "WhatsApp",
    value: "Chat with sales",
    href: companyContactLinks.whatsapp,
    icon: FiMessageCircle,
  },
];

const Contact = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const selectedProduct = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return products.find((product) => product.id === params.get("product"));
  }, [location.search]);

  usePageSeo({
    title: "Contact",
    description:
      "Contact GAIB Agro Equipment Private Limited for product quotes, dealer inquiries, service, and WhatsApp assistance.",
    image: "/images/gallery/factory-floor.svg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with GAIB Agro Equipment."
        description={`${company.englishTagline}. ${company.promise}`}
        image="/images/products/baba-super-multi-crop-thresher.jpg"
        imageAlt="Baba Super Multi Crop Thresher"
      />
      <Section className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className="focus-ring rounded-[24px] bg-gaib-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold text-gaib-dark">{card.title}</h2>
                <p className="mt-2 break-words text-gaib-gray">{card.value}</p>
              </a>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-5">
            <div className="rounded-[24px] bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-gaib-dark">Registered Office</h2>
              <p className="mt-3 flex gap-3 leading-8 text-gaib-gray">
                <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                <span>{company.registeredAddress}</span>
              </p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-bold text-gaib-dark">Factory</h2>
              <p className="mt-3 flex gap-3 leading-8 text-gaib-gray">
                <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                <span>{company.factoryAddress}</span>
              </p>
            </div>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid min-h-72 place-items-center rounded-[24px] border border-dashed border-gaib-green/30 bg-white p-8 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <FiMapPin className="mx-auto size-10 text-gaib-green" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-bold text-gaib-dark">Google Map</h2>
                <p className="mt-2 text-gaib-gray">Factory and office location</p>
              </div>
            </a>
          </div>

          <form className="rounded-[24px] bg-white p-6 shadow-card sm:p-8" onSubmit={handleSubmit}>
            <h2 className="font-display text-3xl font-bold text-gaib-dark">Request a quote</h2>
            {selectedProduct ? (
              <p className="mt-3 rounded-2xl bg-gaib-green/10 px-4 py-3 text-sm font-semibold text-gaib-green">
                Selected product: {selectedProduct.name}
              </p>
            ) : null}
            {submitted ? (
              <div className="mt-5 rounded-2xl bg-gaib-green/10 p-5 text-gaib-green" role="status">
                Thank you. Your inquiry has been noted.
              </div>
            ) : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Input id="name" label="Name" name="name" autoComplete="name" required />
              <Input id="phone" label="Phone" name="phone" type="tel" autoComplete="tel" required />
              <Input id="email" label="Email" name="email" type="email" autoComplete="email" />
              <Input
                id="product"
                label="Product Interest"
                name="product"
                defaultValue={selectedProduct?.name || ""}
              />
              <div className="sm:col-span-2">
                <Textarea id="message" label="Message" name="message" required />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg">
                Send Inquiry
              </Button>
              <Button href={companyContactLinks.whatsapp} target="_blank" rel="noreferrer" variant="secondary" size="lg">
                WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Contact;
