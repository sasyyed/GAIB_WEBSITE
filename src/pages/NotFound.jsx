import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import { usePageSeo } from "../hooks/usePageSeo";

const NotFound = () => {
  usePageSeo({
    title: "Page Not Found",
    description: "The requested GAIB Agro Equipment page could not be found.",
  });

  return (
    <Section className="min-h-[70vh] bg-gaib-cream pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>404</Badge>
        <h1 className="mt-5 font-display text-4xl font-bold text-gaib-dark sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-4 leading-8 text-gaib-gray">
          Return to the homepage or explore the GAIB product catalog.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Home</Button>
          <Button to="/products" variant="secondary">
            Products
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;
