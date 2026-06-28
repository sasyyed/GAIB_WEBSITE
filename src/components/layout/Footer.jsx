import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { company, companyContactLinks } from "../../data/company";
import { products } from "../../data/products";
import Container from "../ui/Container";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Why Choose Us", to: "/#why-choose" },
  { label: "Gallery", to: "/gallery" },
  { label: "Dealers", to: "/dealers" },
  { label: "Contact Us", to: "/contact" },
];

const Footer = () => {
  const footerProducts = products.slice(0, 4);

  return (
    <footer className="bg-white text-gaib-dark">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1.1fr_0.75fr]">
          <div>
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <img src="/images/logo/gaib-logo.svg" alt="GAIB Agro Equipment logo" className="h-16 w-16" />
              <span>
                <span className="block font-display text-2xl font-extrabold text-gaib-green">
                  {company.shortName}
                </span>
                <span className="text-sm font-semibold text-gaib-dark">{company.tagline}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm leading-8 text-gaib-gray">
              {company.name} is dedicated to empowering farmers with high quality, reliable,
              and innovative agricultural machinery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-bold uppercase text-gaib-dark">Quick Links</h2>
            <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer navigation">
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className="focus-ring w-fit rounded-full text-gaib-gray hover:text-gaib-green">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-base font-bold uppercase text-gaib-dark">Our Products</h2>
            <nav className="mt-5 grid gap-3 text-sm" aria-label="Footer products">
              {footerProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="focus-ring w-fit rounded-full text-gaib-gray hover:text-gaib-green"
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-base font-bold uppercase text-gaib-dark">Contact Info</h2>
            <div className="mt-5 grid gap-4 text-sm text-gaib-gray">
              <p className="flex gap-3">
                <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                <span>{company.registeredAddress}</span>
              </p>
              <p className="flex gap-3">
                <FiMapPin className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                <span>{company.factoryAddress}</span>
              </p>
              <a className="focus-ring flex w-fit items-center gap-3 rounded-full hover:text-gaib-green" href={companyContactLinks.phone}>
                <FiPhone className="size-5 text-gaib-green" aria-hidden="true" />
                {company.phones.join(" | ")}
              </a>
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

          <div>
            <h2 className="font-display text-base font-bold uppercase text-gaib-dark">Scan to Locate Us</h2>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-5 block overflow-hidden rounded-[8px] border border-gaib-green/20 bg-gaib-cream p-3 shadow-sm"
            >
              <img src="/images/icons/scan-to-locate-us.png" alt="Scan to locate GAIB Agro Equipment" className="w-full" loading="lazy" />
            </a>
          </div>
        </div>
      </Container>
      <div className="bg-gaib-green py-4 text-white">
        <Container className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="text-white/74">Privacy Policy | Terms & Conditions</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
