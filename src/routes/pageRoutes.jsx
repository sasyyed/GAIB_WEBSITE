import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Spares = lazy(() => import("../pages/Spares"));
const SpareCategory = lazy(() => import("../pages/SpareCategory"));
const GovernmentSubsidy = lazy(() => import("../pages/GovernmentSubsidy"));
const About = lazy(() => import("../pages/About"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Dealers = lazy(() => import("../pages/Dealers"));
const Jobs = lazy(() => import("../pages/Jobs"));
const Contact = lazy(() => import("../pages/Contact"));
const ExportEnquiry = lazy(() => import("../pages/ExportEnquiry"));
const Faq = lazy(() => import("../pages/Faq"));
const Blog = lazy(() => import("../pages/Blog"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const pageRoutes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:productId", element: <ProductDetails /> },
  { path: "/spares", element: <Spares /> },
  { path: "/spares/:categorySlug", element: <SpareCategory /> },
  { path: "/government-subsidy", element: <GovernmentSubsidy /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/dealers", element: <Dealers /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/export-enquiry", element: <ExportEnquiry /> },
  { path: "/faq", element: <Faq /> },
  { path: "/blog", element: <Blog /> },
  { path: "*", element: <NotFound /> },
];
