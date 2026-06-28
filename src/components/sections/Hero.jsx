import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../data/products";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gaib-dark text-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        speed={650}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="min-h-[82svh] lg:min-h-[88svh]"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative min-h-[82svh] lg:min-h-[88svh]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(216,163,26,0.18),transparent_28%),linear-gradient(135deg,rgba(11,93,42,0.95),rgba(27,27,27,0.98))]" />
              <Container className="relative grid min-h-[82svh] items-center gap-7 pb-10 pt-24 sm:gap-10 lg:min-h-[88svh] lg:grid-cols-[0.95fr_1.05fr] lg:pb-16 lg:pt-24">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  <Badge className="border-white/15 bg-white/10 text-white">{product.tagline}</Badge>
                  <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.04] sm:mt-6 sm:text-6xl lg:text-7xl">
                    {product.name}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/74 sm:mt-5 sm:text-xl">
                    {product.shortDescription}
                  </p>
                  <div className="mt-6 flex flex-row flex-wrap gap-3 sm:mt-8">
                    <Button to={`/products/${product.id}`} variant="light" size="md">
                      View Product
                    </Button>
                    <Button to="/contact" variant="outlineLight" size="md">
                      Get Quote
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative mx-auto w-full max-w-[320px] sm:max-w-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
                >
                  <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-black/30 blur-3xl" />
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="relative mx-auto h-auto w-full drop-shadow-[0_35px_55px_rgba(0,0,0,0.28)]"
                    loading={product.id === "baba-super-thresher" ? "eager" : "lazy"}
                  />
                </motion.div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
