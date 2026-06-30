import { FiCheckCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import SparePartCard from "../components/spares/SparePartCard";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import {
  findSpareCategoryBySlug,
  getSpareCategoryParts,
  getSpareCategoryPath,
  spareCategories,
  spareIntro,
} from "../data/spares";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema, siteUrl } from "../utils/seo";

const SpareCategory = () => {
  const { categorySlug } = useParams();
  const category = findSpareCategoryBySlug(categorySlug);
  const parts = category ? getSpareCategoryParts(category) : [];

  usePageSeo({
    title: category ? `${category.title} | OEM Quality - GAIB Agro` : "Spare Parts Not Found | GAIB Agro",
    description: category
      ? `${category.description} ${spareIntro}`
      : "The requested GAIB Agro spare parts category could not be found.",
    image: category?.image || "/images/spares/multi-crop-thresher-spare-parts.webp",
    canonical: category ? `${getSpareCategoryPath(category)}/` : "/spares/",
    keywords: category
      ? [
          category.name,
          `${category.shortName} spare parts`,
          "GAIB Agro spare parts",
          "OEM agricultural spare parts",
          "agricultural implement spare parts",
        ]
      : undefined,
    structuredData: category
      ? [
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Spares", url: "/spares/" },
            { name: category.name, url: `${getSpareCategoryPath(category)}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: category.name,
            itemListElement: parts.map((partItem, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${siteUrl}/contact?spare=${encodeURIComponent(partItem.name)}`,
              item: {
                "@type": "Product",
                name: partItem.name,
                image: `${siteUrl}${partItem.image}`,
                description: `${partItem.name} - ${partItem.badge}. ${spareIntro}`,
                brand: {
                  "@type": "Brand",
                  name: "GAIB Agro",
                },
              },
            })),
          },
        ]
      : undefined,
  });

  if (!category) {
    return (
      <Section className="min-h-[65vh] bg-gaib-cream pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Spares</Badge>
          <h1 className="mt-5 font-display text-4xl font-bold text-gaib-dark">Spare parts category not found</h1>
          <p className="mt-4 leading-8 text-gaib-gray">
            This spare parts category may have moved. The full spares catalog is available from the Spares page.
          </p>
          <Button to="/spares" className="mt-7">
            View Spares
          </Button>
        </div>
      </Section>
    );
  }

  const relatedCategories = spareCategories.filter((item) => item.slug !== category.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Spares"
        title={category.title}
        description={`${category.description} ${spareIntro}`}
        image={category.image}
        imageAlt={`${category.title} image coming soon placeholder`}
      />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[24px] bg-gaib-cream p-7">
            <Badge>{category.shortName}</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-gaib-dark">Spare part support</h2>
            <div className="mt-6 grid gap-4">
              {[
                "OEM quality agricultural implement spare parts",
                "Precision engineered and durable field-ready parts",
                "Custom sizes available for selected components",
                "Send part name, size, machine model and photo for enquiry",
              ].map((item) => (
                <p key={item} className="flex gap-3 leading-7 text-gaib-gray">
                  <FiCheckCircle className="mt-1 size-5 shrink-0 text-gaib-green" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <Button to="/contact" className="mt-7" size="lg">
              Enquire Now
            </Button>
          </div>

          <div className="grid gap-9">
            {category.groups.map((group) => (
              <div key={group.name}>
                <Heading eyebrow={category.shortName} title={group.name} />
                <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {group.parts.map((partItem) => (
                    <SparePartCard key={partItem.slug} part={partItem} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gaib-dark text-white" containerClassName="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-gold">
              Related Spare Categories
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Explore more GAIB spare parts.</h2>
          </div>
          <div className="grid gap-3">
            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                to={getSpareCategoryPath(item)}
                className="focus-ring rounded-2xl border border-white/10 bg-white/8 px-5 py-4 font-semibold text-white transition hover:border-gaib-gold hover:text-gaib-gold"
              >
                {item.name}
              </Link>
            ))}
          </div>
      </Section>
    </>
  );
};

export default SpareCategory;
