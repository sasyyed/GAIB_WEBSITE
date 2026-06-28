import { motion } from "framer-motion";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const AboutPreview = () => {
  return (
    <Section className="bg-gaib-cream">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Heading
          eyebrow="Company"
          title="GAIB Agro Equipment Pvt. Ltd."
          description="A modern agricultural equipment company focused on dependable manufacturing, product clarity, and long-term farmer trust."
        />
        <motion.div
          className="rounded-[24px] bg-white p-7 shadow-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xl font-semibold leading-9 text-gaib-dark">
            Premium machines. Clear specifications. Practical service. A website built around the
            equipment, not noise.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Manufacturing", "Quality", "Support"].map((item) => (
              <div key={item} className="rounded-2xl bg-gaib-cream p-4 text-center">
                <span className="font-display text-lg font-bold text-gaib-green">{item}</span>
              </div>
            ))}
          </div>
          <Button to="/about" className="mt-8">
            About GAIB
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutPreview;
