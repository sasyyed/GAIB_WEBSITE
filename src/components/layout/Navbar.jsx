import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import Container from "../ui/Container";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Dealers", to: "/dealers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const canFloat =
    location.pathname === "/" ||
    (location.pathname.startsWith("/products/") && location.pathname !== "/products");
  const transparent = canFloat && !scrolled && !menuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        transparent ? "bg-transparent py-4" : "bg-white/95 py-3 shadow-sm backdrop-blur"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between gap-4" aria-label="Primary navigation">
          <Link to="/" className="focus-ring flex items-center gap-3 rounded-full">
            <img src="/images/logo/gaib-logo.svg" alt="GAIB Agro Equipment logo" className="h-12 w-12" />
            <span className="leading-tight">
              <span
                className={`block font-display text-lg font-bold ${
                  transparent ? "text-white" : "text-gaib-dark"
                }`}
              >
                GAIB Agro
              </span>
              <span className={transparent ? "text-xs text-white/80" : "text-xs text-gaib-gray"}>
                Har Kisan Ki Bharosemand Pasand
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `focus-ring rounded-full text-sm font-semibold transition ${
                    transparent
                      ? isActive
                        ? "text-gaib-gold"
                        : "text-white hover:text-gaib-gold"
                      : isActive
                        ? "text-gaib-green"
                        : "text-gaib-dark hover:text-gaib-green"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button to="/contact" variant={transparent ? "light" : "primary"} size="sm">
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-full lg:hidden ${
              transparent ? "bg-white/15 text-white" : "bg-gaib-green text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </nav>
      </Container>

      {menuOpen ? (
        <div className="mt-3 border-t border-gaib-dark/10 bg-white lg:hidden">
          <Container className="py-5">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `focus-ring rounded-2xl px-4 py-3 font-semibold ${
                      isActive ? "bg-gaib-green text-white" : "text-gaib-dark hover:bg-gaib-cream"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-2 w-full" size="lg">
                Get Quote
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
