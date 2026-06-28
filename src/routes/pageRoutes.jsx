import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const About = lazy(() => import("../pages/About"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Dealers = lazy(() => import("../pages/Dealers"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const pageRoutes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:productId", element: <ProductDetails /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/dealers", element: <Dealers /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];
