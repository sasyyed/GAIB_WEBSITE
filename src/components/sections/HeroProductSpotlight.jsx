import { FiCheckCircle } from "react-icons/fi";
import { products } from "../../data/products";
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
  const product = products.find((item) => item.id === "baba-super-thresher");

  return (
    <Section className="bg-[linear-gradient(90deg,#fbfbf5,#f1f5df)]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <img
          src={product.heroImage}
          alt={product.name}
          className="aspect-[4/3] w-full rounded-[24px] object-cover shadow-soft"
          loading="lazy"
        />
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
          <Button to={`/products/${product.id}`} variant="gold" className="mt-8">
            Request Price
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroProductSpotlight;
