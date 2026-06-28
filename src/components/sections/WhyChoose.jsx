import { motion } from "framer-motion";
import { FiCpu, FiHeadphones, FiShield, FiTool } from "react-icons/fi";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const features = [
  {
    title: "Heavy Duty",
    description: "Strong frames and reliable assemblies built for demanding seasonal workloads.",
    icon: FiTool,
  },
  {
    title: "Precision Engineering",
    description: "Clean mechanisms, measured fitment, and thoughtful maintenance access.",
    icon: FiCpu,
  },
  {
    title: "Farmer Trusted",
    description: "Equipment shaped around everyday field realities and long ownership cycles.",
    icon: FiShield,
  },
  {
    title: "Reliable Support",
    description: "Dealer-led support that keeps machines productive when the season matters most.",
    icon: FiHeadphones,
  },
];

const WhyChoose = () => {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Heading
          eyebrow="Why GAIB"
          title="Industrial discipline with farmer-first practicality."
          description="Every touchpoint is designed to feel premium, but the machine still has one job: perform reliably in the field."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                className="rounded-[24px] border border-gaib-dark/10 bg-gaib-cream p-6 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gaib-dark">{feature.title}</h3>
                <p className="mt-3 leading-7 text-gaib-gray">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WhyChoose;
