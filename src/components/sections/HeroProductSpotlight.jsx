import { FiCheckCircle } from "react-icons/fi";
import { getImageSrc, getProductPath, products } from "../../data/products";
import Button from "../ui/Button";
import Section from "../ui/Section";

const crops = ["Wheat", "Mustard", "Barley", "Gram", "Soybean", "Other Crops"];
const benefits = [
  "Higher Output",
  "Lower Fuel Consumption",
  "Less Grain Damage",
  "Easy Operation",
  "Heavy Duty Body",
  "Long Life",
];

const HeroProductSpotlight = () => {
  const product = products.find((item) => item.id === "baba-super-multi-crop-thresher");
  const supportingProducts = products.filter((item) =>
    ["seed-cum-fertilizer-drill", "cultivator"].includes(item.id),
  );

  return (
    <Section className="bg-[linear-gradient(90deg,#fbfbf5,#f1f5df)]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="overflow-hidden rounded-[24px] bg-white p-5 shadow-card sm:p-7">
            <img
              src={getImageSrc(product.image)}
              alt={product.imageAlt || product.name}
              className="aspect-[4/3] w-full object-contain"
              loading="lazy"
            />
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
                  Product Focus
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-gaib-dark">
                  {product.name}
                </h3>
              </div>
              <Button to={getProductPath(product)} variant="secondary">
                View More
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {supportingProducts.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[24px] bg-white p-4 shadow-card">
                <img
                  src={getImageSrc(item.image)}
                  alt={item.imageAlt || item.name}
                  className="aspect-[4/3] w-full object-contain"
                  loading="lazy"
                />
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-gaib-green">{item.category}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-gaib-dark">{item.name}</h3>
                  <Button to={getProductPath(item)} variant="secondary" size="sm" className="mt-4">
                    View More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Our Hero Product
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-gaib-dark">
            {product.name}
          </h2>
          <p className="mt-2 text-2xl font-semibold text-gaib-dark/80">Multi-Crop Thresher</p>
          <p className="mt-5 max-w-2xl leading-8 text-gaib-gray">
            Designed to deliver maximum output with minimum effort, this thresher is suitable for
            a wide range of crops and ensures superior grain separation with low grain loss.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-gaib-dark">Compatible Crops</h3>
              <div className="mt-4 grid gap-3">
                {crops.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-semibold text-gaib-gray">
                    <FiCheckCircle className="size-4 text-gaib-green" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-gaib-dark">Key Benefits</h3>
              <div className="mt-4 grid gap-3">
                {benefits.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm font-semibold text-gaib-gray">
                    <FiCheckCircle className="size-4 text-gaib-green" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Button to={getProductPath(product)} variant="gold" className="mt-8">
            Request Price
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroProductSpotlight;
