import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SparePartCard = ({ part }) => {
  const enquiryLink = `/contact?spare=${encodeURIComponent(part.name)}`;

  return (
    <article className="group overflow-hidden rounded-[20px] border border-gaib-dark/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link to={enquiryLink} className="focus-ring block bg-gaib-cream p-3">
        <div className="aspect-square overflow-hidden rounded-[16px] bg-white">
          <img
            src={part.image}
            alt={`${part.name} spare part placeholder by GAIB Agro`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-gaib-green">{part.category}</p>
        <h3 className="mt-2 font-display text-xl font-bold leading-tight text-gaib-dark">{part.name}</h3>
        <p className="mt-2 text-sm font-semibold text-gaib-gray">{part.badge}</p>
        <Link
          to={enquiryLink}
          className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-bold text-gaib-green transition hover:text-gaib-gold"
        >
          View Details / Enquiry <FiArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default SparePartCard;
