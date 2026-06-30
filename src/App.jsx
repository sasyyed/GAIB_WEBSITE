import { Suspense, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Container from "./components/ui/Container";
import { companyContactLinks } from "./data/company";
import { pageRoutes } from "./routes/pageRoutes";

const RouteFallback = () => (
  <div className="bg-gaib-cream pt-28">
    <Container className="py-20">
      <div className="h-2 w-40 overflow-hidden rounded-full bg-gaib-green/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gaib-green" />
      </div>
    </Container>
  </div>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {pageRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <a
        href={companyContactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="focus-ring fixed bottom-5 right-5 z-[70] flex size-14 items-center justify-center rounded-full bg-gaib-green text-white shadow-[0_18px_38px_rgb(11_93_42_/_0.32)] hover:bg-gaib-gold hover:text-gaib-dark"
        aria-label="Chat with GAIB Agro on WhatsApp"
      >
        <FiMessageCircle className="size-6" aria-hidden="true" />
      </a>
      <Footer />
    </>
  );
};

export default App;
