const siteName = "GAIB Agro Equipment Private Limited";

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

export const applySeo = ({
  title,
  description,
  image = "/images/products/baba-super-multi-crop-thresher.jpg",
}) => {
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  document.title = pageTitle;

  ensureMeta('meta[name="description"]', {
    create: { name: "description" },
    update: { content: description },
  });

  ensureMeta('meta[property="og:title"]', {
    create: { property: "og:title" },
    update: { content: pageTitle },
  });

  ensureMeta('meta[property="og:description"]', {
    create: { property: "og:description" },
    update: { content: description },
  });

  ensureMeta('meta[property="og:image"]', {
    create: { property: "og:image" },
    update: { content: image },
  });
};
