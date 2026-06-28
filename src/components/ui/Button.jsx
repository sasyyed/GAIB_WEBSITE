import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const variants = {
  primary:
    "bg-gaib-green text-white shadow-[0_16px_35px_rgb(11_93_42_/_0.22)] hover:bg-gaib-green-dark",
  secondary:
    "border border-gaib-green bg-white text-gaib-green hover:bg-gaib-green hover:text-white",
  outlineLight:
    "border border-white bg-transparent text-white hover:bg-white hover:text-gaib-green",
  ghost: "bg-transparent text-gaib-green hover:bg-gaib-green/10",
  light: "bg-white text-gaib-green hover:bg-gaib-gold hover:text-gaib-dark",
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm sm:text-base",
  lg: "min-h-14 px-6 text-base",
};

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon = FiArrowRight,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const classes = [
    "focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition duration-300",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon aria-hidden="true" className="size-4" /> : null}
      <span className="whitespace-nowrap">{children}</span>
      {Icon && iconPosition === "right" ? <Icon aria-hidden="true" className="size-4" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={props.type || "button"} {...props}>
      {content}
    </button>
  );
};

export default Button;
