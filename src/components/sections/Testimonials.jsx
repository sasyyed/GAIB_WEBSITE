import { FiStar } from "react-icons/fi";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const testimonials = [
  {
    name: "Ramesh Yadav",
    location: "Farmer, Bundi",
    quote:
      "The Baba Super Thresher has increased our harvesting speed significantly while reducing grain loss.",
  },
  {
    name: "Mahendra Singh",
    location: "Farmer, Kota",
    quote:
      "Low fuel consumption and easy operation. Best thresher we have used so far.",
  },
  {
    name: "Suresh Gurjar",
    location: "Farmer, Chittorgarh",
    quote:
      "Excellent build quality and support. GAIB Agro is a brand we can rely on.",
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
