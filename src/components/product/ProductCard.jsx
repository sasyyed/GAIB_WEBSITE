import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const ProductCard = ({ product }) => {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to={`/products/${product.id}`} className="focus-ring block bg-gaib-cream">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Badge>{product.category}</Badge>
        <h3 className="mt-4 font-display text-2xl font-bold text-gaib-dark">{product.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-gaib-gray">{product.shortDescription}</p>
        <div className="mt-6">
          <Button to={`/products/${product.id}`} variant="secondary">
            View Product
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
