import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

const SparePosterCard = ({ poster, to, ctaLabel = "View spares" }) => {
  return (
    <article className="overflow-hidden rounded-[20px] border border-gaib-dark/10 bg-white shadow-sm">
      <Link to={to} className="focus-ring block bg-white p-2">
        <img
          src={poster.image}
          alt={poster.alt || poster.title}
          className="h-auto w-full rounded-[16px]"
          loading="lazy"
        />
      </Link>
      <div className="p-5">
        {poster.categoryShortName ? <Badge>{poster.categoryShortName}</Badge> : null}
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-gaib-dark">{poster.title}</h3>
        <p className="mt-3 leading-7 text-gaib-gray">{poster.description}</p>
        <Link
          to={to}
          className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-bold uppercase tracking-[0.08em] text-gaib-green transition hover:text-gaib-gold"
        >
          {ctaLabel} <FiArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default SparePosterCard;
