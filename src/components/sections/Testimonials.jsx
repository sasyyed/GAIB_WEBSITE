import { FiStar } from "react-icons/fi";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Farmer, Rajasthan",
    quote:
      "The Multi Crop Thresher from GAIB Agro reduced my labor cost and increased output. With SMAM subsidy, it became a practical investment.",
  },
  {
    name: "Priya Singh",
    location: "Women Farmer, Madhya Pradesh",
    quote:
      "GAIB Agro's Seed Drill improved germination and saved seed. The government subsidy made it affordable and support was excellent.",
  },
  {
    name: "Vikram Patel",
    location: "CHC Owner, Rajasthan",
    quote:
      "We operate a Custom Hiring Centre. GAIB Agro equipment is durable, easy to maintain, and spare parts are always available.",
  },
];

const Testimonials = () => {
  return (
    <Section className="bg-gaib-cream">
      <Heading title="What Farmers Say" align="center" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[8px] border border-gaib-dark/10 bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-gaib-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} className="size-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-5 leading-7 text-gaib-gray">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-full bg-gaib-green font-display font-bold text-white">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-display font-bold text-gaib-dark">{item.name}</p>
                <p className="text-sm text-gaib-gray">{item.location}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
