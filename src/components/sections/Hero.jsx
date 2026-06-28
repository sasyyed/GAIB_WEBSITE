import { motion } from "framer-motion";
import { FiCheckCircle, FiPhoneCall, FiUsers } from "react-icons/fi";
import { company, companyContactLinks } from "../../data/company";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f3e8] pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(216,163,26,0.22),transparent_30%),linear-gradient(100deg,#fbfaf3_0%,#f8f1d8_52%,#e9f0dc_100%)]" />
      <Container className="grid min-h-[680px] items-center gap-10 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gaib-green">
            {company.englishTagline}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-gaib-green sm:text-5xl lg:text-6xl">
            India&apos;s Trusted Multi-Crop Thresher Manufacturer
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-gaib-dark">
            Maximize Yield. Minimize Effort.
          </p>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-gaib-dark/78">
            GAIB Agro Equipment Private Limited manufactures high-quality agricultural machinery
            designed to improve harvesting efficiency and increase farmer productivity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
            <Button href={companyContactLinks.phone} variant="gold" size="lg" icon={FiPhoneCall}>
              Call Now
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {["R", "M", "S", "G"].map((item) => (
                <span
                  key={item}
                  className="grid size-11 place-items-center rounded-full border-2 border-white bg-gaib-green font-display text-sm font-bold text-white shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="flex items-center gap-2 text-sm font-bold text-gaib-dark">
              <FiUsers className="size-5 text-gaib-gold" aria-hidden="true" />
              Trusted by thousands of farmers
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="rounded-[24px] border border-gaib-green/12 bg-white/82 p-7 shadow-soft backdrop-blur sm:p-9">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-gaib-gold">
              Baba Super Multi Crop Thresher
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-gaib-dark sm:text-4xl">
              Built for high output, clean grain separation, and reliable field performance.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Multi crop compatibility",
                "Superior grain separation",
                "Enhanced fuel efficiency",
                "Rugged construction",
                "Easy maintenance",
                "Farmer friendly design",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-sm font-bold text-gaib-gray">
                  <FiCheckCircle className="size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
      <div className="h-5 bg-gaib-gold" />
    </section>
  );
};

export default Hero;
