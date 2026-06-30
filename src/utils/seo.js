export const siteName = "GAIB Agro Equipment Pvt Ltd";
export const siteUrl = "https://gaibagro.com";

const toAbsoluteUrl = (path) => {
  if (!path) return siteUrl;
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes.create).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  Object.entries(attributes.update).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const ensureLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    Object.entries(attributes.create).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  Object.entries(attributes.update).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const updateStructuredData = (structuredData) => {
  const id = "page-structured-data";
  let element = document.getElementById(id);

  if (!structuredData) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(structuredData);
};

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GAIB Agro Equipment Pvt Ltd",
  alternateName: "GAIB Agro",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/gaib-logo.webp`,
  description:
    "Indian manufacturer of agricultural equipment including Multi Crop Thresher, Seed Drill, Cultivator, Chaff Cutter, Maize Sheller, Disc Harrow, Bund Former, Tractor Trolleys and Tractor Operated Sprayers. Products are promoted as Govt. SMAM subsidy approved.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7976467105",
    contactType: "Sales",
    availableLanguage: ["Hindi", "English"],
  },
  sameAs: [
    "https://www.instagram.com/gaibagro/",
    "https://www.youtube.com/@GAIBAGRO",
    "https://www.facebook.com/61575003951925/photos/",
  ],
});

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAIB Agro Equipment Pvt Ltd",
  image: `${siteUrl}/images/pages/about-us.webp`,
  url: siteUrl,
  telephone: "+91-7976467105",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PN 27, near Reliance petrol pump, Silor Road",
    addressLocality: "Bundi",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "INR",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  hasMap: "https://share.google/ox2P4yOqNv7tSzAA9",
});

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.url),
  })),
});

export const buildFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const applySeo = ({
  title,
  description,
  image = "/images/products/baba-super-multi-crop-thresher-square.webp",
  canonical,
  keywords,
  structuredData,
}) => {
  const pageTitle = title || siteName;
  const canonicalUrl = toAbsoluteUrl(canonical || window.location.pathname || "/");
  const imageUrl = toAbsoluteUrl(image);
  const schemaBlocks = [buildOrganizationSchema(), ...(Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [])];
  document.title = pageTitle;

  ensureMeta('meta[name="description"]', {
    create: { name: "description" },
    update: { content: description },
  });

  ensureMeta('meta[name="robots"]', {
    create: { name: "robots" },
    update: { content: "index, follow" },
  });

  if (keywords?.length) {
    ensureMeta('meta[name="keywords"]', {
      create: { name: "keywords" },
      update: { content: keywords.join(", ") },
    });
  } else {
    document.head.querySelector('meta[name="keywords"]')?.remove();
  }

  ensureLink('link[rel="canonical"]', {
    create: { rel: "canonical" },
    update: { href: canonicalUrl },
  });

  ensureMeta('meta[property="og:title"]', {
    create: { property: "og:title" },
    update: { content: pageTitle },
  });

  ensureMeta('meta[property="og:type"]', {
    create: { property: "og:type" },
    update: { content: "website" },
  });

  ensureMeta('meta[property="og:locale"]', {
    create: { property: "og:locale" },
    update: { content: "en_IN" },
  });

  ensureMeta('meta[property="og:description"]', {
    create: { property: "og:description" },
    update: { content: description },
  });

  ensureMeta('meta[property="og:image"]', {
    create: { property: "og:image" },
    update: { content: imageUrl },
  });

  ensureMeta('meta[property="og:url"]', {
    create: { property: "og:url" },
    update: { content: canonicalUrl },
  });

  ensureMeta('meta[name="twitter:card"]', {
    create: { name: "twitter:card" },
    update: { content: "summary_large_image" },
  });

  ensureMeta('meta[name="twitter:title"]', {
    create: { name: "twitter:title" },
    update: { content: pageTitle },
  });

  ensureMeta('meta[name="twitter:description"]', {
    create: { name: "twitter:description" },
    update: { content: description },
  });

  ensureMeta('meta[name="twitter:image"]', {
    create: { name: "twitter:image" },
    update: { content: imageUrl },
  });

  updateStructuredData(schemaBlocks);
};
