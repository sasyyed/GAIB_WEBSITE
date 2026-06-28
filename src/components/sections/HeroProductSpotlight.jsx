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
        <div className="rounded-[24px] bg-white p-7 shadow-card sm:p-9">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Product Focus
          </p>
          <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-gaib-dark">
            Engineered for harvesting seasons where speed, strength, and clean output matter.
          </h3>
          <div className="mt-7 grid gap-4">
            {product.specifications.slice(0, 5).map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 border-b border-gaib-dark/10 pb-3 text-sm last:border-b-0 last:pb-0">
                <span className="font-bold text-gaib-dark">{item.label}</span>
                <span className="text-right font-semibold text-gaib-gray">{item.value}</span>
              </div>
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
          <Button to={`/products/${product.id}`} variant="gold" className="mt-8">
            Request Price
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroProductSpotlight;
