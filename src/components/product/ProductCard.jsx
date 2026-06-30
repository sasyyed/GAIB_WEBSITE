import { Link } from "react-router-dom";
import { getImageSrc, getProductPath } from "../../data/products";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const ProductCard = ({ product }) => {
  const imageSrc = getImageSrc(product.image);
  const imageFitClass = product.imageFit === "cover" ? "object-cover" : "object-contain p-3";
  const variantCount = product.variants?.length || 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-card">
      <Link to={getProductPath(product)} className="focus-ring block bg-gaib-cream">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={product.imageAlt || product.name}
            loading="lazy"
            className={`h-full w-full ${imageFitClass}`}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{product.category}</Badge>
          {variantCount > 0 && (
            <span className="rounded-full bg-gaib-gold/18 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-gaib-dark">
              {variantCount} {variantCount === 1 ? "variant" : "variants"}
            </span>
          )}
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-gaib-dark">{product.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-gaib-gray">{product.shortDescription}</p>
        <div className="mt-6">
          <Button to={getProductPath(product)} variant="secondary">
            View Product
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
