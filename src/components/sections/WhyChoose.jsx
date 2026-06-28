import { motion } from "framer-motion";
import { FiCpu, FiHeadphones, FiShield, FiTrendingUp } from "react-icons/fi";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const features = [
  {
    title: "Strong & Durable",
    description: "Heavy duty build quality for long life and tough performance.",
    icon: FiShield,
  },
  {
    title: "Advanced Engineering",
    description: "Latest technology for better efficiency and higher output.",
    icon: FiCpu,
  },
  {
    title: "Reliable Service Support",
    description: "Dedicated after-sales service and genuine spare parts.",
    icon: FiHeadphones,
  },
  {
    title: "Trusted by Farmers",
    description: "Preferred choice of thousands of farmers across India.",
    icon: FiTrendingUp,
  },
];

const WhyChoose = () => {
  return (
    <Section id="why-choose" className="bg-white">
      <Heading title="Why Choose GAIB Agro Equipment?" align="center" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              className="rounded-[8px] border border-gaib-dark/12 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gaib-green text-white shadow-[0_16px_35px_rgb(11_93_42_/_0.18)]">
                <Icon className="size-9" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-gaib-dark">{feature.title}</h3>
              <p className="mt-3 leading-7 text-gaib-gray">{feature.description}</p>
            </motion.article>
          );
        })}
        </div>
    </Section>
  );
};

export default WhyChoose;
