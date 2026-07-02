import Badge from "./Badge";
import Container from "./Container";

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  dark = false,
  compactTitle = false,
  imageWrapClassName,
  imageClassName,
}) => {
  const titleSizeClass = compactTitle ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl";
  const defaultImageWrapClass =
    "grid aspect-[3/2] place-items-center overflow-hidden rounded-[24px] bg-white p-3 shadow-card";
  const defaultImageClass = "max-h-full max-w-full object-contain";

  return (
    <section className={`${dark ? "bg-gaib-dark text-white" : "bg-gaib-cream text-gaib-dark"} pt-28`}>
      <Container className="grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <div>
          {eyebrow ? (
            <Badge className={dark ? "border-white/15 bg-white/10 text-white" : ""}>{eyebrow}</Badge>
          ) : null}
          <h1 className={`mt-5 max-w-3xl font-display font-bold leading-tight ${titleSizeClass}`}>
            {title}
          </h1>
          {description ? (
            <p className={`mt-5 max-w-2xl text-lg leading-8 ${dark ? "text-white/70" : "text-gaib-gray"}`}>
              {description}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className={imageWrapClassName || defaultImageWrapClass}>
            <img src={image} alt={imageAlt || title} className={imageClassName || defaultImageClass} loading="eager" />
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default PageHero;
