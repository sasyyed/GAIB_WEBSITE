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
        description="Quality is built in from raw material to final inspection with CNC plasma cutting, hydraulic power press, CAD/CAM design, and rigorous quality testing."
        align="center"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {factoryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-[8px] bg-gaib-cream shadow-card"
          >
            <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default Factory;
