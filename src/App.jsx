import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Container from "./components/ui/Container";
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
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

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
      <Footer />
    </>
  );
};

export default App;
