import { galleryImages } from "../../data/products";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const GalleryPreview = () => {
  return (
    <Section className="bg-gaib-cream">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Heading
          eyebrow="Gallery"
          title="Factory, products, and details."
          description="A closer look at GAIB manufacturing, product details, and equipment-ready workmanship."
        />
        <Button to="/gallery" variant="secondary">
          Open Gallery
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.slice(0, 4).map((image, index) => (
          <figure
            key={image.src}
            className={`overflow-hidden rounded-[24px] bg-white shadow-card ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-5 py-4 text-sm font-semibold text-gaib-dark">
              {image.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default GalleryPreview;
