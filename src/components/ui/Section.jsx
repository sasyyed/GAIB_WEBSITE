import Container from "./Container";

const Section = ({
  children,
  className = "",
  containerClassName = "",
  as: Component = "section",
  id,
}) => {
  return (
    <Component id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
};

export default Section;
