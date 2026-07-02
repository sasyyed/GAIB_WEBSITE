import Heading from "../ui/Heading";
import Section from "../ui/Section";

const factoryImages = [
  {
    src: "/images/gallery/manufacturing-excellence-1.webp",
    alt: "GAIB Agro manufacturing excellence with plasma cutting, lathe, drilling, welding and gas cutting",
    width: 1400,
    height: 700,
  },
  {
    src: "/images/gallery/manufacturing-excellence-2.webp",
    alt: "GAIB Agro manufacturing excellence with thresher assembly and precision components",
    width: 1400,
    height: 747,
  },
];

const Factory = () => {
  return (
    <Section className="bg-white">
      <Heading
        title="Manufacturing Excellence"
        description="Quality is built in from raw material to final inspection with CNC plasma cutting, hydraulic power press, CAD/CAM design, and rigorous quality testing."
        align="center"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {factoryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-[12px] bg-gaib-cream shadow-card"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
};

export default Factory;
