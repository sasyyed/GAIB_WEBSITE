import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { galleryImages } from "../data/products";
import { usePageSeo } from "../hooks/usePageSeo";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  usePageSeo({
    title: "Gallery",
    description:
      "View GAIB Agro Equipment product, factory, and manufacturing gallery visuals.",
    image: "/images/gallery/factory-floor.svg",
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A clean visual archive for products and manufacturing."
        description="Browse GAIB equipment details, manufacturing views, and quality-focused visuals."
        image="/images/gallery/workshop-line.svg"
        imageAlt="GAIB workshop line"
      />
      <Section className="bg-white">
        <div className="masonry">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="masonry-item focus-ring block w-full overflow-hidden rounded-[24px] bg-gaib-cream text-left shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                loading="lazy"
              />
              <span className="block px-5 py-4 font-semibold text-gaib-dark">{image.title}</span>
            </button>
          ))}
        </div>
      </Section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-gaib-dark/88 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="focus-ring absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-white text-gaib-dark"
            aria-label="Close gallery image"
            onClick={() => setActiveImage(null)}
          >
            <FiX className="size-5" />
          </button>
          <figure
            className="max-h-[86vh] w-full max-w-5xl overflow-hidden rounded-[24px] bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[76vh] w-full object-contain" />
            <figcaption className="px-5 py-4 font-semibold text-gaib-dark">{activeImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
