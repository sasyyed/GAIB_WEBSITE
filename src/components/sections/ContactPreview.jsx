import { FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const contactItems = [
  { label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000", icon: FiPhone },
  { label: "Email", value: "info@gaibagro.com", href: "mailto:info@gaibagro.com", icon: FiMail },
  { label: "WhatsApp", value: "Chat with sales", href: "https://wa.me/910000000000", icon: FiMessageCircle },
];

const ContactPreview = () => {
  return (
    <Section className="bg-gaib-cream">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Heading
          eyebrow="Contact"
          title="Ready for a quote, dealership, or product discussion?"
          description="Reach the GAIB team through phone, email, WhatsApp, or the contact form."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring rounded-[24px] bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-gaib-gray">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-gaib-dark">{item.value}</p>
              </a>
            );
          })}
          <div className="sm:col-span-3">
            <Button to="/contact" size="lg">
              Open Contact Page
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPreview;
