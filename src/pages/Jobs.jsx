import { FaRupeeSign } from "react-icons/fa";
import { FiBriefcase, FiCheckCircle, FiCpu, FiMapPin, FiTool } from "react-icons/fi";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import Section from "../components/ui/Section";
import { company, companyContactLinks } from "../data/company";
import { usePageSeo } from "../hooks/usePageSeo";
import { buildBreadcrumbSchema } from "../utils/seo";

const jobs = [
  {
    title: "Welder / Technician",
    icon: FiTool,
    summary:
      "Hands-on fabrication and repair role for agricultural equipment frames, assemblies, and workshop support.",
    requirements: ["Welding and fabrication knowledge", "Ability to read basic measurements", "Workshop discipline and safety awareness"],
  },
  {
    title: "Lathe Machine Operator",
    icon: FiBriefcase,
    summary:
      "Machine shop role for turning, finishing, and preparing parts used in GAIB agricultural equipment.",
    requirements: ["Lathe machine operating experience", "Basic tool and measurement handling", "Accuracy in component finishing"],
  },
  {
    title: "CNC Operator",
    icon: FiCpu,
    summary:
      "CNC machine operating role for precision part work, production support, and quality-focused machining.",
    requirements: ["CNC operation experience", "Understanding of machine settings", "Quality checking and production discipline"],
  },
];

const jobSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GAIB Agro Equipment Job Openings",
  itemListElement: jobs.map((job, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "JobPosting",
      title: job.title,
      datePosted: "2026-06-29",
      description: `${job.summary} Salary as per experience and skills.`,
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: company.name,
        sameAs: company.websiteUrl,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: company.factoryAddress,
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      },
      qualifications: job.requirements.join("; "),
    },
  })),
};

const Jobs = () => {
  usePageSeo({
    title: "GAIB Agro Jobs in Bundi | Welder, Lathe & CNC Operator",
    description:
      "Apply for GAIB Agro Equipment jobs in Bundi, Rajasthan. Open roles include Welder / Technician, Lathe Machine Operator, and CNC Operator.",
    image: "/images/pages/jobs-workshop.webp",
    canonical: "/jobs/",
    keywords: [
      "GAIB Agro jobs",
      "welder technician job Bundi",
      "lathe machine operator job",
      "CNC operator job Rajasthan",
      "agro equipment factory jobs",
    ],
    structuredData: [
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs/" },
      ]),
      jobSchema,
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Jobs"
        title="Workshop and machine operator jobs at GAIB."
        description="Open roles for skilled people who want steady factory work in agricultural equipment manufacturing."
        image="/images/pages/jobs-workshop.webp"
        imageAlt="GAIB Agro Equipment workshop jobs"
      />

      <Section className="bg-white">
        <div className="mb-10 max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gaib-green">
            Current Openings
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-gaib-dark sm:text-4xl">
            Posted jobs for GAIB Agro Equipment factory work.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {jobs.map((job) => {
            const Icon = job.icon;
            return (
              <article key={job.title} className="rounded-[24px] border border-gaib-dark/10 bg-gaib-cream p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gaib-green text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-gaib-dark">{job.title}</h3>
                <p className="mt-3 leading-7 text-gaib-gray">{job.summary}</p>

                <div className="mt-5 grid gap-3 text-sm font-semibold text-gaib-gray">
                  <p className="flex gap-2">
                    <FiMapPin className="mt-0.5 size-4 shrink-0 text-gaib-green" aria-hidden="true" />
                    {company.factoryAddress}
                  </p>
                  <p className="flex gap-2">
                    <FaRupeeSign className="mt-0.5 size-4 shrink-0 text-gaib-green" aria-hidden="true" />
                    Salary as per experience and skills
                  </p>
                </div>

                <div className="mt-6 grid gap-3">
                  {job.requirements.map((requirement) => (
                    <p key={requirement} className="flex gap-2 text-sm leading-6 text-gaib-gray">
                      <FiCheckCircle className="mt-1 size-4 shrink-0 text-gaib-green" aria-hidden="true" />
                      {requirement}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gaib-cream">
        <div className="rounded-[24px] bg-gaib-green p-7 text-white shadow-card sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Apply for a workshop job</h2>
            <p className="mt-3 max-w-2xl leading-8 text-white/78">
              Share your name, role, experience, and contact number with the GAIB team.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button href={companyContactLinks.whatsapp} target="_blank" rel="noreferrer" variant="light">
              Apply on WhatsApp
            </Button>
            <Button href={companyContactLinks.email} variant="outlineLight">
              Email Resume
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Jobs;
