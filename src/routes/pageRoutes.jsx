import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Dealers from "../pages/Dealers";
import ExportEnquiry from "../pages/ExportEnquiry";
import Faq from "../pages/Faq";
import Gallery from "../pages/Gallery";
import GovernmentSubsidy from "../pages/GovernmentSubsidy";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import SpareCategory from "../pages/SpareCategory";
import Spares from "../pages/Spares";

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
