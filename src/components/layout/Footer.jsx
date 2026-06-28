import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Container from "../ui/Container";

const footerLinks = [
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Dealers", to: "/dealers" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gaib-dark text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <img src="/images/logo/gaib-logo.svg" alt="GAIB Agro Equipment logo" className="h-14 w-14" />
              <span>
                <span className="block font-display text-xl font-bold">GAIB Agro</span>
                <span className="text-sm text-white/65">Har Kisan Ki Bharosemand Pasand</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md leading-8 text-white/68">
              Premium agricultural equipment engineered for dependable field performance,
              manufacturing discipline, and farmer-first service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Company</h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="focus-ring w-fit rounded-full text-white/68 transition hover:text-gaib-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold">Contact</h2>
            <div className="mt-5 grid gap-4 text-white/68">
              <p className="flex gap-3">
                <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-gold" aria-hidden="true" />
                <span>Factory and registered office: GAIB Agro Equipment Pvt. Ltd., India.</span>
              </p>
              <a className="focus-ring flex w-fit items-center gap-3 rounded-full hover:text-gaib-gold" href="tel:+910000000000">
                <FiPhone className="size-5 text-gaib-gold" aria-hidden="true" />
                +91 00000 00000
              </a>
              <a className="focus-ring flex w-fit items-center gap-3 rounded-full hover:text-gaib-gold" href="mailto:info@gaibagro.com">
                <FiMail className="size-5 text-gaib-gold" aria-hidden="true" />
                info@gaibagro.com
              </a>
            </div>
            <Button to="/contact" variant="light" className="mt-7">
              Request Quote
            </Button>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/48">
          © {new Date().getFullYear()} GAIB Agro Equipment Pvt. Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
