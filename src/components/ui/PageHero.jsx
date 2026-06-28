import { motion } from "framer-motion";
import Badge from "./Badge";
import Container from "./Container";

const PageHero = ({ eyebrow, title, description, image, imageAlt, dark = false }) => {
  return (
    <section className={`${dark ? "bg-gaib-dark text-white" : "bg-gaib-cream text-gaib-dark"} pt-28`}>
      <Container className="grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {eyebrow ? (
            <Badge className={dark ? "border-white/15 bg-white/10 text-white" : ""}>{eyebrow}</Badge>
          ) : null}
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className={`mt-5 max-w-2xl text-lg leading-8 ${dark ? "text-white/70" : "text-gaib-gray"}`}>
              {description}
            </p>
          ) : null}
        </motion.div>
        {image ? (
          <motion.div
            className="overflow-hidden rounded-[24px] bg-white shadow-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <img src={image} alt={imageAlt || title} className="aspect-[16/10] w-full object-cover" loading="eager" />
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
};

export default PageHero;
