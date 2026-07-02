import { FiCheckCircle, FiPackage, FiTool, FiTruck } from "react-icons/fi";
import { Link } from "react-router-dom";
import SparePosterCard from "../components/spares/SparePosterCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import {
  getSpareCategoryPath,
  spareCategories,
  spareIntro,
  sparePosters,
} from "../data/spares";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, siteUrl } from "../utils/seo";

const highlights = [
  {
    title: "Genuine Quality",
    text: "Manufactured by GAIB AGRO EQUIPMENT PVT. LTD. for reliable field performance.",
    icon: FiPackage,
  },
  {
    title: "Custom Sizes",
    text: "Shafts, sieves, buckets, pulleys and fabricated parts can be supplied as per requirement.",
    icon: FiTool,
  },
  {
    title: "Heavy Duty",
    text: "Precision engineered parts made for agricultural implement workloads.",
    icon: FiCheckCircle,
  },
  {
    title: "Dispatch Support",
    text: "Send part name, machine model and photo to get quick spare part assistance.",
    icon: FiTruck,
  },
];

const Spares = () => {
  const featuredPosters = sparePosters.slice(0, 9);

  usePageSeo({
    title: "Agricultural Implement Spare Parts | GAIB Agro Equipment",
    description:
      "Genuine agricultural implement spare parts by GAIB Agro Equipment Pvt Ltd. Multi Crop Thresher, Seed Drill, Cultivator, Sprayer and general spare parts. Custom sizes available.",
    image: "/images/spares/multi-crop-thresher-spare-parts.webp",
    canonical: "/spares/",
    keywords: [
      "agricultural implement spare parts",
      "GAIB Agro spare parts",
      "multi crop thresher spare parts",
      "seed drill spare parts",
      "cultivator spare parts",
      "tractor sprayer spare parts",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Spares", url: "/spares/" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "GAIB Agro Spare Parts Categories",
        itemListElement: spareCategories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}${getSpareCategoryPath(category)}/`,
          item: {
            "@type": "Product",
            name: category.name,
            image: `${siteUrl}${category.image}`,
            description: category.description,
            brand: {
              "@type": "Brand",
              name: "GAIB Agro",
            },
          },
        })),
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Spares"
        title="Agricultural implement spare parts."
        description={spareIntro}
        image="/images/spares/posters/elevator-bucket-conveyor-fasteners.webp"
        imageAlt="GAIB Agro combined thresher spare parts poster"
      />

      <Section className="bg-white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[20px] border border-gaib-dark/10 bg-gaib-cream p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-gaib-dark">{item.title}</h2>
                <p className="mt-3 leading-7 text-gaib-gray">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <Heading
          eyebrow="Categories"
          title="Spare parts by machine category."
          description="Choose the machine category to view grouped WebP spare-parts posters and common part details."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {spareCategories.map((category) => (
            <Link
              key={category.slug}
              to={getSpareCategoryPath(category)}
              className="focus-ring group overflow-hidden rounded-[22px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="bg-white p-2">
                <img
                  src={category.image}
                  alt={`${category.name} by GAIB Agro`}
                  className="h-auto w-full rounded-[18px]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <Badge>{category.shortName}</Badge>
                <h2 className="mt-4 font-display text-2xl font-bold text-gaib-dark group-hover:text-gaib-green">
                  {category.title}
                </h2>
                <p className="mt-3 leading-7 text-gaib-gray">{category.description}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-gaib-green">
                  View category
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <Heading
          eyebrow="Popular Spares"
          title="Grouped spare-parts posters."
          description="Combined photos are kept together as per the product artwork, so customers can identify related parts in one view."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredPosters.map((poster) => (
            <SparePosterCard
              key={`${poster.categorySlug}-${poster.slug}`}
              poster={poster}
              to={getSpareCategoryPath({ slug: poster.categorySlug })}
            />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/spares/multi-crop-thresher-spare-parts" size="lg">
            View All Thresher Spares
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Spare Parts Enquiry
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Spares;
