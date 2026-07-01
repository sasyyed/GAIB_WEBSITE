import { FiCpu, FiHeadphones, FiShield, FiTrendingUp, FiTruck, FiUserCheck } from "react-icons/fi";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const features = [
  {
    title: "Manufacturing Excellence",
    description: "State-of-the-art facility with CNC machinery, CAD/CAM design, and FMTTI-tested performance.",
    icon: FiCpu,
  },
  {
    title: "Govt. Approved",
    description: "Products are promoted as SMAM subsidy approved, helping farmers access 40%-80% benefits.",
    icon: FiShield,
  },
  {
    title: "Spare Parts Available",
    description: "Genuine replacement parts and service support help reduce equipment downtime.",
    icon: FiHeadphones,
  },
  {
    title: "Pan-India Delivery",
    description: "Supporting farmers, dealers, CHCs, and agricultural regions across India.",
    icon: FiTruck,
  },
  {
    title: "Farmer-Centric Design",
    description: "Built for Indian farming conditions, crop needs, and practical field use.",
    icon: FiUserCheck,
  },
  {
    title: "Direct Manufacturer",
    description: "Best pricing, clear quality control, and no unnecessary middleman markups.",
    icon: FiTrendingUp,
  },
];

const WhyChoose = () => {
  return (
    <Section id="why-choose" className="bg-white">
      <Heading title="Why Choose GAIB Agro Equipment?" align="center" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.title}
              className="rounded-[8px] border border-gaib-dark/12 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gaib-green text-white shadow-[0_16px_35px_rgb(11_93_42_/_0.18)]">
                <Icon className="size-9" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-gaib-dark">{feature.title}</h3>
              <p className="mt-3 leading-7 text-gaib-gray">{feature.description}</p>
            </article>
          );
        })}
        </div>
    </Section>
  );
};

export default WhyChoose;
