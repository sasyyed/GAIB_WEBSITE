import { motion } from "framer-motion";
import { FiDroplet, FiGrid, FiSettings, FiShield } from "react-icons/fi";

const featureItems = [
  {
    title: "FMTTI Tested",
    text: "Multi Crop Thresher tested for 4 ton/hour capacity.",
    icon: FiSettings,
  },
  {
    title: "SMAM Subsidy Approved",
    text: "Farmers can enquire for 40%-80% subsidy eligibility.",
    icon: FiGrid,
  },
  {
    title: "Direct Manufacturer",
    text: "No middleman markups, direct pricing and support.",
    icon: FiShield,
  },
  {
    title: "Spare Parts Support",
    text: "Genuine replacement parts available for seasonal uptime.",
    icon: FiDroplet,
  },
];

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gaib-dark pt-20">
      <h1 className="sr-only">Agricultural Equipment Manufacturer India | GAIB Agro Equipment Pvt Ltd</h1>

      <div className="bg-gaib-cream md:hidden">
        <img
          src="/images/hero/hero-3.webp"
          alt="GAIB Agro Baba Super Multi Crop Thresher hero banner"
          className="block w-full"
          loading="eager"
        />
        <div className="px-5 py-7">
          <p className="inline-flex rounded-[8px] bg-[#f3c21b] px-3 py-1.5 font-display text-[0.72rem] font-extrabold uppercase tracking-[0.04em] text-black shadow-[0_10px_20px_rgb(216_163_26_/_0.24)]">
            Govt. Subsidy Approved
          </p>
          <h2 className="hero-grit-title mt-3 font-display text-[2.85rem] font-black uppercase leading-[0.88]">
            Thresher
          </h2>
          <p className="mt-3 max-w-sm font-display text-[1.05rem] font-medium leading-snug text-gaib-dark">
            Direct from <span className="font-extrabold text-[#c20f16]">Manufacturer.</span> Built for{" "}
            <span className="font-extrabold text-[#c20f16]">Farmers.</span>
          </p>

          <div className="mt-6 grid gap-3">
            {featureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3 rounded-[16px] bg-white/88 p-3 shadow-sm">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gaib-dark/15 bg-gaib-cream text-gaib-dark">
                    <Icon className="size-5 stroke-[2.2]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-extrabold uppercase leading-tight text-gaib-dark">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs font-semibold leading-snug text-gaib-gray">{item.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[620px] md:block md:aspect-[1764/880] md:min-h-0">
        <img
          src="/images/hero/hero-3.webp"
          alt="GAIB Agro Baba Super Multi Crop Thresher hero banner"
          className="absolute inset-0 h-full w-full object-cover object-[63%_center] md:object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,224,0.45)_0%,rgba(255,248,224,0.28)_26%,rgba(255,248,224,0.08)_47%,rgba(255,248,224,0)_66%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.08)_31%,rgba(255,255,255,0)_53%)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-5 py-10 sm:px-6 md:h-full md:min-h-0 lg:px-8">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="inline-flex rounded-[8px] bg-[#f3c21b] px-4 py-1.5 font-display text-sm font-extrabold uppercase tracking-[0.08em] text-black shadow-[0_14px_28px_rgb(216_163_26_/_0.3)] sm:px-5 sm:text-base"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              Govt. Subsidy Approved Implements
            </motion.p>
            <motion.h1
              className="hero-grit-title mt-3 font-display text-[2.35rem] font-black uppercase leading-[0.86] sm:text-[3.8rem] lg:text-[4.7rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              Thresher
            </motion.h1>
            <motion.p
              className="hero-copy-shadow mt-3 max-w-md font-display text-base font-medium leading-tight text-gaib-dark sm:text-xl lg:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              Direct from <span className="font-extrabold text-[#c20f16]">Manufacturer.</span> Built for{" "}
              <span className="font-extrabold text-[#c20f16]">Farmers.</span>
            </motion.p>

            <div className="mt-7 space-y-3.5 sm:mt-8">
              {featureItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="hero-copy-shadow group flex max-w-sm items-start gap-3.5"
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.42, delay: 0.4 + index * 0.08 }}
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-black/90 bg-white/10 text-black shadow-[0_8px_18px_rgb(0_0_0_/_0.07)] backdrop-blur-[1px]">
                      <Icon className="size-5 stroke-[2.2]" aria-hidden="true" />
                    </span>
                    <span className="pt-1">
                      <span className="block font-display text-sm font-extrabold uppercase leading-none text-black sm:text-base">
                        {item.title}
                      </span>
                      <span className="mt-1 block max-w-xs text-xs font-semibold leading-snug text-black/82 sm:text-sm">
                        {item.text}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
