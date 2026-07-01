import Badge from "./Badge";

const Heading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}) => {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight text-gaib-dark sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-gaib-gray sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
};

export default Heading;
