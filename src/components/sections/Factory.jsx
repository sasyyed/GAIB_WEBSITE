import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const factoryImages = [
  { src: "/images/gallery/factory-floor.svg", alt: "GAIB factory floor" },
  { src: "/images/gallery/workshop-line.svg", alt: "GAIB workshop production line" },
  { src: "/images/gallery/quality-check.svg", alt: "GAIB quality inspection" },
  { src: "/images/gallery/thresher-detail.svg", alt: "GAIB thresher detail" },
];

const Factory = () => {
  return (
    <Section className="bg-white">
      <Heading
        title="Manufacturing Excellence"
        description="Our manufacturing unit is equipped with advanced technology and skilled workforce to deliver world-class machinery."
        align="center"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {factoryImages.map((image, index) => (
          <motion.figure
            key={image.src}
            className="overflow-hidden rounded-[8px] bg-gaib-cream shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
};

export default Factory;
