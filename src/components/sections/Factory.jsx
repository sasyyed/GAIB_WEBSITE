import { motion } from "framer-motion";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const Factory = () => {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Heading
          eyebrow="Manufacturing"
          title="Built in a disciplined production environment."
          description="From fabrication to finishing, GAIB keeps manufacturing quality close to the product promise."
        />
        <motion.div
          className="overflow-hidden rounded-[24px] bg-gaib-dark shadow-soft"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <img
            src="/images/gallery/factory-floor.svg"
            alt="GAIB manufacturing floor"
            className="aspect-[16/10] w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl leading-7 text-white/72">
              Quality checks, clean assembly flow, and product-focused presentation for dealers and farmers.
            </p>
            <Button to="/gallery" variant="light">
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Factory;
