import { useEffect, useState } from "react";
import { FiChevronDown, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getProductPath, products } from "../../data/products";
import Button from "../ui/Button";
import Container from "../ui/Container";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Jobs", to: "/jobs" },
  { label: "Gallery", to: "/gallery" },
];

const contactLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "Export Enquiry", to: "/export-enquiry" },
];

const getNavLabelKey = (label) => label.toLowerCase().replace(/\s+/g, "");

const translations = {
  en: {
    home: "Home",
    products: "Products",
    allProducts: "All Products",
    spares: "Spares",
    aboutus: "About Us",
    jobs: "Jobs",
    gallery: "Gallery",
    subsidy: "Subsidy",
    contact: "Contact Us",
    export: "Export Enquiry",
    catalogue: "Catalogue",
    quote: "Get Quote",
  },
  hi: {
    home: "होम",
    products: "उत्पाद",
    allProducts: "सभी उत्पाद",
    aboutus: "हमारे बारे में",
    jobs: "नौकरियां",
    gallery: "गैलरी",
    subsidy: "सब्सिडी",
    contact: "संपर्क करें",
    export: "एक्सपोर्ट इंक्वायरी",
    catalogue: "Catalogue",
    quote: "Get Quote",
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem("gaib-language") || "en");
  const location = useLocation();
  const labels = translations[language] || translations.en;
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileContactOpen(false);
  };

  useEffect(() => {
    let ticking = false;
    const updateScrollState = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollState);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileContactOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi-IN" : "en-IN";
    localStorage.setItem("gaib-language", language);
  }, [language]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-3 shadow-sm"
      }`}
    >
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <Link to="/" className="focus-ring inline-flex shrink-0 items-center rounded-md">
            <img
              src="/images/logo/gaib-logo.webp"
              alt="GAIB Agro Equipment Pvt Ltd Logo - Agricultural Equipment Manufacturer India"
              width="420"
              height="176"
              className="h-12 w-auto object-contain sm:h-14"
              decoding="async"
            />
          </Link>

          <div className="hidden items-center gap-4 xl:flex xl:gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `focus-ring rounded-full text-xs font-extrabold uppercase tracking-[0.04em] transition xl:text-sm ${
                  isActive ? "text-gaib-green" : "text-gaib-dark hover:text-gaib-green"
                }`
              }
            >
              {labels.home}
            </NavLink>

            <div className="group relative">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `focus-ring inline-flex items-center gap-1 rounded-full py-2 text-xs font-extrabold uppercase tracking-[0.04em] transition xl:text-sm ${
                    isActive || location.pathname.startsWith("/products")
                      ? "text-gaib-green"
                      : "text-gaib-dark hover:text-gaib-green"
                  }`
                }
            >
                {labels.products} <FiChevronDown className="size-4" aria-hidden="true" />
              </NavLink>
              <div className="invisible absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="border-t-4 border-gaib-green bg-white p-5 shadow-[0_22px_50px_rgb(0_0_0_/_0.14)]">
                  <Link
                    to="/products"
                    className="focus-ring mb-3 block rounded-md px-3 py-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-gaib-green hover:bg-gaib-cream"
                  >
                    {labels.allProducts}
                  </Link>
                  <div className="grid grid-cols-2 gap-1">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        to={getProductPath(product)}
                        className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-gaib-dark hover:bg-gaib-cream hover:text-gaib-green"
                      >
                        {product.seoName || product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/spares"
              className={({ isActive }) =>
                `focus-ring rounded-full text-xs font-extrabold uppercase tracking-[0.04em] transition xl:text-sm ${
                  isActive || location.pathname.startsWith("/spares")
                    ? "text-gaib-green"
                    : "text-gaib-dark hover:text-gaib-green"
                }`
              }
            >
              {labels.spares || "Spares"}
            </NavLink>

            {navItems.slice(1).map((item) => (
              <NavLink
                  key={item.to}
                  to={item.to}
                className={({ isActive }) =>
                  `focus-ring rounded-full text-xs font-extrabold uppercase tracking-[0.04em] transition xl:text-sm ${
                    isActive ? "text-gaib-green" : "text-gaib-dark hover:text-gaib-green"
                  }`
                }
              >
                {labels[item.label.toLowerCase().replace(/\s+/g, "")] || item.label}
              </NavLink>
            ))}

            <div className="group relative">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `focus-ring inline-flex items-center gap-1 rounded-full py-2 text-xs font-extrabold uppercase tracking-[0.04em] transition xl:text-sm ${
                    isActive || location.pathname === "/export-enquiry"
                      ? "text-gaib-green"
                      : "text-gaib-dark hover:text-gaib-green"
                  }`
                }
              >
                {labels.contact} <FiChevronDown className="size-4" aria-hidden="true" />
              </NavLink>
              <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="border-t-4 border-gaib-green bg-white p-3 shadow-[0_22px_50px_rgb(0_0_0_/_0.14)]">
                  {contactLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="focus-ring block rounded-md px-4 py-3 text-sm font-semibold text-gaib-dark hover:bg-gaib-cream hover:text-gaib-green"
                    >
                      {item.to === "/export-enquiry" ? labels.export : labels.contact}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <div className="flex rounded-full border border-gaib-dark/10 bg-gaib-cream p-1" aria-label="Website language">
              {[
                { code: "en", label: "EN" },
                { code: "hi", label: "हिंदी" },
              ].map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`focus-ring rounded-full px-2.5 py-1 text-xs font-extrabold transition ${
                    language === item.code ? "bg-gaib-green text-white" : "text-gaib-dark hover:text-gaib-green"
                  }`}
                  onClick={() => setLanguage(item.code)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button
              href="/catalogue/gaib-agro-product-catalogue.pdf"
              variant="secondary"
              size="sm"
              icon={FiDownload}
              download
            >
              {labels.catalogue}
            </Button>
            <Button to="/contact" variant="primary" size="sm">
              {labels.quote}
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex size-11 touch-manipulation items-center justify-center rounded-full bg-gaib-green text-white xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </nav>
      </Container>

      {menuOpen ? (
        <div className="mt-3 border-t border-gaib-dark/10 bg-white xl:hidden">
          <Container className="max-h-[calc(100vh-5.75rem)] overflow-y-auto overscroll-contain py-5">
            <div className="grid gap-2">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `focus-ring rounded-2xl px-4 py-3 font-semibold ${
                    isActive ? "bg-gaib-green text-white" : "text-gaib-dark active:bg-gaib-cream"
                  }`
                }
              >
                {labels.home}
              </NavLink>

              <div className="rounded-2xl bg-gaib-cream p-3">
                <button
                  type="button"
                  className="focus-ring flex w-full touch-manipulation items-center justify-between rounded-xl px-3 py-2 text-left font-display font-bold uppercase text-gaib-green active:bg-white"
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products-menu"
                  onClick={() => setMobileProductsOpen((open) => !open)}
                >
                  <span>{labels.products}</span>
                  <FiChevronDown
                    className={`size-5 transition duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {mobileProductsOpen ? (
                  <div id="mobile-products-menu" className="mt-2 grid gap-1">
                    <Link
                      to="/products"
                      onClick={closeMobileMenu}
                      className="focus-ring rounded-xl bg-white px-3 py-2 text-sm font-extrabold uppercase tracking-[0.06em] text-gaib-green"
                    >
                      {labels.allProducts}
                    </Link>
                    {products.map((product) => (
                    <Link
                      key={product.id}
                      to={getProductPath(product)}
                      onClick={closeMobileMenu}
                      className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-gaib-dark active:bg-white"
                    >
                      {product.seoName || product.name}
                    </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <NavLink
                to="/spares"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `focus-ring rounded-2xl px-4 py-3 font-semibold ${
                    isActive || location.pathname.startsWith("/spares")
                      ? "bg-gaib-green text-white"
                      : "text-gaib-dark active:bg-gaib-cream"
                  }`
                }
              >
                {labels.spares || "Spares"}
              </NavLink>

              {navItems.slice(1).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `focus-ring rounded-2xl px-4 py-3 font-semibold ${
                      isActive ? "bg-gaib-green text-white" : "text-gaib-dark active:bg-gaib-cream"
                    }`
                  }
                >
                  {labels[getNavLabelKey(item.label)] || item.label}
                </NavLink>
              ))}

              <div className="rounded-2xl bg-gaib-cream p-3">
                <button
                  type="button"
                  className="focus-ring flex w-full touch-manipulation items-center justify-between rounded-xl px-3 py-2 text-left font-display font-bold uppercase text-gaib-green active:bg-white"
                  aria-expanded={mobileContactOpen}
                  aria-controls="mobile-contact-menu"
                  onClick={() => setMobileContactOpen((open) => !open)}
                >
                  <span>{labels.contact}</span>
                  <FiChevronDown
                    className={`size-5 transition duration-200 ${mobileContactOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {mobileContactOpen ? (
                  <div id="mobile-contact-menu" className="mt-2 grid gap-1">
                    <Link
                      to="/contact"
                      onClick={closeMobileMenu}
                      className="focus-ring rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gaib-dark"
                    >
                      {labels.contact}
                    </Link>
                    <Link
                      to="/export-enquiry"
                      onClick={closeMobileMenu}
                      className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-gaib-dark active:bg-white"
                    >
                      {labels.export}
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-gaib-cream p-3">
                <span className="text-sm font-bold text-gaib-dark">Language</span>
                <button
                  type="button"
                  className={`focus-ring rounded-full px-3 py-1 text-sm font-bold ${language === "en" ? "bg-gaib-green text-white" : "bg-white text-gaib-dark"}`}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={`focus-ring rounded-full px-3 py-1 text-sm font-bold ${language === "hi" ? "bg-gaib-green text-white" : "bg-white text-gaib-dark"}`}
                  onClick={() => setLanguage("hi")}
                >
                  हिंदी
                </button>
              </div>
              <Button href="/catalogue/gaib-agro-product-catalogue.pdf" variant="secondary" className="w-full" size="lg" icon={FiDownload} download>
                {labels.catalogue}
              </Button>
              <Button to="/contact" className="mt-2 w-full" size="lg">
                {labels.quote}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
