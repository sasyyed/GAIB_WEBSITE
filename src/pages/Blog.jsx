import { FiArrowRight } from "react-icons/fi";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema } from "../utils/seo";

const articles = [
  {
    title: "How to Apply for Agricultural Equipment Subsidy Under SMAM 2025-26",
    keyword: "SMAM subsidy apply online",
    priority: "High",
  },
  {
    title: "Multi Crop Thresher vs Mini Thresher - Which is Right for Your Farm?",
    keyword: "multi crop vs mini thresher",
    priority: "High",
  },
  {
    title: "Top 10 Benefits of Using a Seed Drill for Wheat and Paddy Sowing",
    keyword: "seed drill benefits wheat",
    priority: "High",
  },
  {
    title: "Complete Guide to Chaff Cutter Machines for Dairy and Cattle Farmers",
    keyword: "chaff cutter machine guide",
    priority: "High",
  },
  {
    title: "How to Choose the Right Cultivator for Your Tractor and Soil Type",
    keyword: "how to choose cultivator India",
    priority: "High",
  },
  {
    title: "Tractor Trolley Buying Guide - Capacity, Type and Price Comparison",
    keyword: "tractor trolley buying guide India",
    priority: "Medium",
  },
];

const Blog = () => {
  usePageSeo({
    title: "Farm Machinery Tips India | GAIB Agro Blog",
    description:
      "Read GAIB Agro farm machinery tips on SMAM subsidy, threshers, seed drills, chaff cutters, cultivators, tractor trolley and agricultural equipment selection.",
    image: "/images/pages/about-us.webp",
    canonical: "/blog/",
    keywords: [
      "farm machinery tips India",
      "SMAM subsidy apply online",
      "seed drill benefits wheat",
      "chaff cutter machine guide",
      "tractor trolley buying guide India",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog/" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "GAIB Agro Blog",
        description: "Farm machinery tips, subsidy guidance and agricultural equipment buying guides.",
        blogPost: articles.map((article) => ({
          "@type": "BlogPosting",
          headline: article.title,
          keywords: article.keyword,
          author: {
            "@type": "Organization",
            name: "GAIB Agro Equipment Pvt Ltd",
          },
        })),
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Farm machinery tips for Indian farmers."
        description="Subsidy guidance, product comparisons, maintenance tips, and buying guides from GAIB Agro Equipment."
        image="/images/pages/about-us.webp"
        imageAlt="GAIB Agro Equipment Pvt Ltd manufacturing unit - agricultural implements India"
      />

      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-2">
          {articles.map((article) => (
            <article key={article.title} className="rounded-[24px] bg-gaib-cream p-6 shadow-sm">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gaib-green px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
                  {article.priority}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-gaib-green">
                  {article.keyword}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-gaib-dark">
                {article.title}
              </h2>
              <p className="mt-4 leading-7 text-gaib-gray">
                Article draft planned for GAIB Agro content marketing and long-term search visibility.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gaib-green">
                Coming Soon <FiArrowRight className="size-4" aria-hidden="true" />
              </span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Blog;
