import { getImageAlt, getImageSrc } from "../../data/products";

const GallerySlider = ({ images, productName }) => {
  return (
    <div className="grid gap-5">
      {images.map((image, index) => {
        const imageSrc = getImageSrc(image);
        const imageAlt = getImageAlt(image, `${productName} view ${index + 1}`);

        return (
          <figure key={imageSrc} className="overflow-hidden rounded-[24px] bg-white p-3 shadow-card">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-contain"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </figure>
        );
      })}
    </div>
  );
};

export default GallerySlider;
