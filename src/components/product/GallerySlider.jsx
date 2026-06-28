import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = ({ images, productName }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      className="overflow-hidden rounded-[24px] bg-white shadow-card"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image}>
          <div className="aspect-[4/3] bg-gaib-cream">
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
