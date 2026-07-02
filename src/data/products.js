const productImage = (src, alt, fit = "contain") => ({ src, alt, fit });

export const getImageSrc = (image) => (typeof image === "string" ? image : image.src);

export const getImageAlt = (image, fallback) =>
  typeof image === "string" ? fallback : image.alt || fallback;

export const getProductImages = (product) => {
  const imageSet = new Map();
  [product.image, product.heroImage, ...(product.gallery || [])].filter(Boolean).forEach((image) => {
    const src = getImageSrc(image);
    if (!imageSet.has(src)) {
      imageSet.set(src, src);
    }
  });
  return Array.from(imageSet.values());
};

export const getProductSlug = (product) => product.seoSlug || product.id;

export const getProductPath = (product) => `/products/${getProductSlug(product)}`;

export const products = [
  {
    id: "baba-super-multi-crop-thresher",
    seoSlug: "multi-crop-thresher",
    legacySlugs: ["baba-super-multi-crop-thresher"],
    name: "Baba Super Multi Crop Thresher",
    seoName: "Multi Crop Thresher",
    seoTitle: "Multi Crop Thresher Manufacturer India | Govt Subsidy Approved - GAIB Agro",
    seoDescription:
      "Buy Multi Crop Thresher directly from GAIB Agro - India's trusted manufacturer. FMTTI tested, 4 ton/hour capacity, SMAM Subsidy Approved. Get price & specs.",
    h1: "Multi Crop Thresher Manufacturer India | FMTTI Tested | Govt. Subsidy Approved - GAIB Agro",
    focusKeyword: "multi crop thresher manufacturer India",
    altKeywords: ["multi crop thresher price", "thresher machine India", "SMAM thresher subsidy"],
    tagline: "High output multi-crop threshing",
    category: "Threshing",
    shortDescription:
      "FMTTI tested Multi Crop Thresher with 4 ton/hour capacity for wheat, paddy, maize, soybean, millet, pulses and more.",
    description:
      "Welcome to GAIB Agro's Multi Crop Thresher, a heavy-duty grain processing machine designed for diverse Indian crops and field conditions. FMTTI tested and promoted for 4 ton/hour capacity, it helps farmers process wheat, paddy, maize, soybean, millet, pulses, coriander, mustard, gram and more with clean output and minimal seed damage.",
    keyBenefit:
      "Key benefit: reduce harvesting time by up to 80% compared to manual methods while improving output and reducing labor.",
    image: "/images/products/baba-super-multi-crop-thresher-square.webp",
    imageAlt: "Multi Crop Thresher manufactured by GAIB Agro Equipment Pvt Ltd - India",
    heroImage: "/images/products/baba-super-multi-crop-thresher-square.webp",
    gallery: [
      productImage(
        "/images/products/baba-super-multi-crop-thresher-square.webp",
        "Baba Super Multi Crop Thresher square product image",
      ),
      productImage(
        "/images/products/baba-super-multi-crop-thresher.webp",
        "Baba Super Multi Crop Thresher working in a harvested field",
        "cover",
      ),
      productImage("/images/hero/hero-3.webp", "Baba Super Multi Crop Thresher hero banner"),
    ],
    specifications: [
      { label: "FMTTI Capacity", value: "4 tons/hour" },
      { label: "Power Requirement", value: "16-20 HP tractor / as per model" },
      { label: "Frame Material", value: "Heavy-duty steel, riveted and welded construction" },
      { label: "Separator Type", value: "Oscillating beater with adjustable shoe" },
      { label: "Grain Outlet", value: "Adjustable screen with side chutes" },
      { label: "Chaff Blower", value: "Powerful fan for clean grain separation" },
      { label: "Weight", value: "Approximately 800-900 kg as per model" },
      { label: "Suitable Crops", value: "Wheat, paddy, maize, soybean, millet, pulses, coriander, mustard, gram and more" },
      { label: "Seed Loss", value: "Below 2% under normal operating conditions" },
      { label: "Fuel Consumption", value: "Approx. 3-4 liters/hour at full capacity" },
      { label: "Warranty", value: "1 year manufacturer's warranty" },
      { label: "Spare Parts", value: "Always available, direct from manufacturer" },
    ],
    features: [
      "FMTTI tested and approved for 4 ton/hour capacity",
      "Threshes wheat, paddy, maize, soybean, millet, pulses, coriander, mustard, gram and more",
      "Heavy-duty steel construction with reinforced components",
      "Advanced separation design for low seed damage and cleaner grain",
      "Fuel-efficient tractor coupling for practical operating cost",
      "Simple controls suitable for farmer operation",
      "Low maintenance design with accessible cleaning and service points",
      "Govt. SMAM subsidy approved product category",
      "Direct manufacturer pricing with spare parts support",
    ],
    howItWorks: [
      "Crop feeding: harvested crop bundles are fed into the feed chute.",
      "Beating and separation: beaters separate grains from stems and chaff.",
      "Grain cleaning: blower and screens remove light chaff for clean output.",
      "Collection: clean grain exits through the outlet and chaff exits separately.",
    ],
    applicationText:
      "Perfect for cereals, pulses, oilseeds, millets, coriander, cumin, maize and soybean. Ideal for individual farmers, Custom Hiring Centres, FPOs, cooperatives and commercial farm operations.",
    faqs: [
      {
        question: "What does FMTTI testing mean?",
        answer:
          "FMTTI is a government farm machinery testing institute. GAIB's Multi Crop Thresher is promoted as tested for performance, durability and 4 ton/hour capacity.",
      },
      {
        question: "Can this thresher work with a smaller tractor?",
        answer:
          "The Multi Crop Thresher is recommended for 16-20 HP tractor power or as per selected model. For smaller needs, farmers can consider the GAIB Mini Thresher.",
      },
      {
        question: "How much seed damage will occur?",
        answer:
          "The separation design is promoted for low grain damage, with seed loss below 2% under normal operating conditions.",
      },
      {
        question: "How do I maintain the thresher?",
        answer:
          "Clean the machine after use, check bolts, lubricate moving parts, inspect beaters and store the thresher in a dry place during off-season.",
      },
      {
        question: "Are spare parts easily available?",
        answer:
          "Yes. GAIB Agro maintains genuine spare parts and can support dispatch for common wear parts such as beaters, screens, belts and bolts.",
      },
      {
        question: "Is this thresher eligible for government subsidy?",
        answer:
          "Yes. GAIB promotes the Multi Crop Thresher as SMAM government subsidy approved. Eligibility depends on state rules and farmer category.",
      },
    ],
    keywords: [
      "multi crop thresher manufacturer India",
      "multi crop thresher price",
      "thresher subsidy India",
      "Baba Super Multi Crop Thresher",
      "GAIB Agro thresher",
      "wheat paddy soybean thresher",
    ],
    featured: true,
  },
  {
    id: "mini-thresher",
    seoSlug: "mini-thresher",
    name: "Mini Thresher",
    seoTitle: "Mini Thresher Manufacturer India | Compact Thresher for Small Farmers - GAIB Agro",
    seoDescription:
      "GAIB Agro Mini Thresher - Compact, affordable threshing machine for small and marginal farmers. Govt. Subsidy Approved. Light weight, easy to operate. Enquire for price.",
    h1: "Mini Thresher Machine | Compact Design for Small & Marginal Farmers - GAIB Agro",
    focusKeyword: "mini thresher manufacturer India",
    altKeywords: ["mini thresher price", "small thresher machine", "thresher for small farms"],
    tagline: "Compact crop threshing machine",
    category: "Threshing",
    shortDescription:
      "Compact mini thresher suitable for wheat, paddy, gram, soybean, mustard, and small-farm threshing needs.",
    description:
      "GAIB Mini Thresher is a compact tractor PTO thresher made for small and marginal farmers who need efficient crop threshing in limited space. It offers simple operation, strong build quality, and practical crop compatibility for wheat, paddy, gram, soybean and mustard.",
    keyBenefit:
      "Key benefit: compact threshing support for lower-volume operations, with easier handling than a full-size commercial thresher.",
    image: "/images/products/mini-thresher.webp",
    imageAlt: "Mini Thresher machine by GAIB Agro - compact thresher for small farmers India",
    heroImage: "/images/products/mini-thresher.webp",
    gallery: [productImage("/images/products/mini-thresher.webp", "GAIB Mini Thresher with crop suitability and specifications")],
    specifications: [
      { label: "Power Source", value: "Tractor PTO" },
      { label: "Required HP", value: "18 HP and above" },
      { label: "Capacity", value: "8 - 10 quintal / hour" },
      { label: "No. of Blower", value: "1" },
      { label: "Weight", value: "650 kg approx." },
      { label: "Dimensions", value: "7 x 4 x 6 feet approx. (L x W x H)" },
    ],
    features: [
      "Compact design for small and marginal farmers",
      "High efficiency threshing for smaller farm operations",
      "Suitable for wheat, paddy, gram, soybean and mustard",
      "Strong and durable structure",
      "Easy operation with tractor PTO power",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Attach the thresher to a suitable tractor PTO.",
      "Feed harvested crop steadily into the machine.",
      "Threshing drum separates grain from straw.",
      "Collect clean grain and manage straw output separately.",
    ],
    applicationText:
      "Ideal for small holdings, village-level threshing work, and farmers who need dependable wheat, paddy, gram, soybean and mustard threshing without a large commercial machine.",
    keywords: ["mini thresher manufacturer India", "mini thresher price", "tractor PTO mini thresher", "GAIB mini thresher", "small farm thresher"],
    featured: true,
  },
  {
    id: "seed-cum-fertilizer-drill",
    seoSlug: "seed-drill",
    legacySlugs: ["seed-cum-fertilizer-drill"],
    name: "Seed Cum Fertilizer Drill",
    seoName: "Seed Drill",
    seoTitle: "Seed Drill Manufacturer India | Zero Till & Multi Crop Seed Drill - GAIB Agro",
    seoDescription:
      "GAIB Agro manufactures high-quality Seed Drills for wheat, paddy, maize & pulses. Govt. Subsidy eligible under SMAM. Improves germination, saves seed & fuel. Get best price.",
    h1: "Seed Drill Machine Manufacturer | Precision Planting for Better Yields - GAIB Agro",
    focusKeyword: "seed drill manufacturer India",
    altKeywords: ["seed drill price India", "seed cum fertilizer drill", "SMAM seed drill subsidy", "zero till seed drill"],
    tagline: "Precision seeding for higher yields",
    category: "Sowing",
    shortDescription:
      "Seed cum fertilizer drill with 9 and 11 furrow variants for uniform seed distribution and controlled fertilizer placement.",
    description:
      "GAIB Seed Cum Fertilizer Drill is designed for precision planting, uniform seed distribution, and simultaneous fertilizer placement. It helps farmers improve germination, reduce seed wastage, save labor, and complete sowing with consistent row spacing.",
    keyBenefit:
      "Key benefit: accurate seed placement can reduce seed wastage compared with manual broadcasting while improving crop establishment.",
    image: "/images/products/seed-cum-fertilizer-drill-main.webp",
    imageAlt: "Seed Drill machine manufactured by GAIB Agro Equipment - Govt subsidy approved",
    heroImage: "/images/products/seed-cum-fertilizer-drill-main.webp",
    gallery: [
      productImage(
        "/images/products/seed-cum-fertilizer-drill-main.webp",
        "GAIB Seed Cum Fertilizer Drill product banner",
      ),
      productImage(
        "/images/products/seed-cum-fertilizer-drill-field.webp",
        "GAIB Seed Cum Fertilizer Drill attached to a tractor",
      ),
    ],
    specifications: [
      { label: "Available Variants", value: "9 Furrow, 11 Furrow" },
      { label: "Working Width", value: "1.8 m to 2.2 m" },
      { label: "Metering", value: "Fluted seed metering" },
      { label: "Hopper Sheet", value: "1.6 mm MS" },
      { label: "Power Requirement", value: "35 HP and above" },
      { label: "Weight Range", value: "365 kg to 400 kg" },
    ],
    variants: [
      {
        name: "9 Furrow",
        specifications: "Working width 1.8 m; fluted seed metering; seed tube; hopper sheet 1.6 mm MS",
        power: "35 HP and above",
        weight: "365 kg",
      },
      {
        name: "11 Furrow",
        specifications: "Working width 2.2 m; fluted seed metering; seed tube; hopper sheet 1.6 mm MS",
        power: "35 HP and above",
        weight: "400 kg",
      },
    ],
    features: [
      "Uniform seed distribution for better crop establishment",
      "Seed cum fertilizer application in the same pass",
      "Precise placement helps save seed and improve germination",
      "Robust and durable structure for field use",
      "High field efficiency with practical furrow options",
      "Low maintenance and cost-effective operation",
      "Compatible with 35 HP and above tractors",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Fill seed and fertilizer hoppers as required.",
      "Set furrow spacing and sowing depth.",
      "Operate through tractor linkage across prepared field rows.",
      "Place seed and fertilizer uniformly for better germination.",
    ],
    applicationText:
      "Useful for wheat, paddy, maize, pulses, soybean, chickpea, mustard and gram sowing where accurate seed placement and controlled fertilizer application are important.",
    keywords: [
      "seed cum fertilizer drill",
      "seed drill manufacturer India",
      "seed drill price India",
      "9 furrow seed drill",
      "11 furrow seed drill",
      "GAIB seed drill",
      "fertilizer drill manufacturer",
    ],
    featured: true,
  },
  {
    id: "cultivator",
    seoSlug: "cultivator",
    name: "Cultivator",
    seoTitle: "Cultivator Manufacturer India | Spring Loaded Cultivator - GAIB Agro Equipment",
    seoDescription:
      "Buy Cultivators direct from GAIB Agro - Spring Loaded & Rigid. SMAM Subsidy Approved. Ideal for secondary tillage. Compatible with tractors. Get best price.",
    h1: "Cultivator Machine for Tractor | Secondary Tillage Expert - GAIB Agro",
    focusKeyword: "cultivator manufacturer India",
    altKeywords: ["spring loaded cultivator India", "cultivator tractor implement", "cultivator price", "SMAM cultivator"],
    tagline: "Strong soil preparation",
    category: "Tillage",
    shortDescription:
      "Rigid and spring-loaded cultivator variants for strong soil preparation, better tillage, and durable field performance.",
    description:
      "GAIB Cultivator is available in rigid and spring-loaded tine variants for dependable secondary tillage, weed removal, soil loosening, residue mixing, and field preparation across varied tractor HP ranges.",
    image: "/images/products/cultivator-real.webp",
    imageAlt: "Spring Loaded Cultivator by GAIB Agro Equipment Pvt Ltd - India",
    heroImage: "/images/products/cultivator-real.webp",
    gallery: [productImage("/images/products/cultivator-real.webp", "GAIB Cultivator for soil preparation")],
    specifications: [
      { label: "Available Variants", value: "5, 9 and 11 tine rigid; 9 and 11 tine spring loaded" },
      { label: "Working Width", value: "0.9 m to 2.2 m" },
      { label: "Linkage", value: "Three point linkage" },
      { label: "Tyne Material", value: "Mild steel / high carbon steel as per variant" },
      { label: "Power Range", value: "15-20 HP and above to 50 BHP and above" },
      { label: "Weight Range", value: "190 kg to 350 kg" },
    ],
    variants: [
      {
        name: "11 Tine Rigid",
        specifications:
          "Hitch type three point linkage; working width 2.2 m; Mild steel tyne 25 mm; High carbon steel shovel",
        power: "50 BHP and above",
        weight: "320 kg",
      },
      {
        name: "9 Tine Rigid",
        specifications:
          "Three point linkage; working width 1.8 m; Mild steel tyne 25 mm; High carbon steel shovel",
        power: "35 HP and above",
        weight: "270 kg",
      },
      {
        name: "5 Tine Rigid",
        specifications:
          "Three point linkage; working width 0.9 m; Mild steel tyne 25 mm; High carbon steel shovel",
        power: "15-20 HP and above",
        weight: "190 kg",
      },
      {
        name: "9 Tine Spring Loaded",
        specifications:
          "Three point linkage; width 1.8 m; High carbon steel tyne 30 mm; EN42 shovel",
        power: "35 HP and above",
        weight: "280 kg",
      },
      {
        name: "11 Tine Spring Loaded",
        specifications:
          "Three point linkage; width 2.2 m; High carbon steel tyne 30 mm; EN42 shovel",
        power: "50 BHP and above",
        weight: "350 kg",
      },
    ],
    features: [
      "Spring-loaded and rigid tine options",
      "Strong build for repeated tillage work",
      "Rigid and spring-loaded options for different field needs",
      "Secondary soil preparation and weed removal support",
      "Adjustable working width as per variant",
      "Better soil preparation before sowing",
      "Durable tines and shovels for field performance",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Attach the cultivator to the tractor three point linkage.",
      "Select working depth according to soil condition.",
      "Run across field rows for soil loosening and weed removal.",
      "Prepare the field for sowing, irrigation and next-stage operations.",
    ],
    applicationText:
      "Useful for secondary tillage, soil aeration, weed removal, residue mixing and field preparation before sowing across dry and irrigated fields.",
    keywords: ["cultivator manufacturer India", "cultivator price", "rigid cultivator", "spring loaded cultivator", "GAIB cultivator", "farm cultivator"],
    featured: true,
  },
  {
    id: "disc-harrow",
    seoSlug: "disc-harrow",
    name: "Disc Harrow",
    seoTitle: "Disc Harrow Manufacturer India | Tandem Disc Harrow - GAIB Agro Equipment",
    seoDescription:
      "GAIB Agro Disc Harrows - Tandem & Offset type for deep tillage and soil preparation. SMAM Subsidy Eligible. Heavy duty steel discs. Best price from direct manufacturer.",
    focusKeyword: "disc harrow manufacturer India",
    altKeywords: ["disc harrow price India", "tandem disc harrow", "tractor disc harrow", "harrow machine India"],
    tagline: "Aggressive soil cutting",
    category: "Tillage",
    shortDescription:
      "Disc harrow with plain and notched discs for clod breaking, residue cutting, and primary field preparation.",
    description:
      "GAIB Disc Harrow is built for soil cutting and primary tillage with plain and notched discs, durable EN42 material, and stable field engagement.",
    image: "/images/products/disc-harrow-real.webp",
    imageAlt: "Disc Harrow manufactured by GAIB Agro - tandem disc harrow India",
    heroImage: "/images/products/disc-harrow-real.webp",
    gallery: [productImage("/images/products/disc-harrow-real.webp", "GAIB Disc Harrow in field soil")],
    specifications: [
      { label: "Variant", value: "7 Disc" },
      { label: "Disc Type", value: "Plain and notched discs" },
      { label: "Disc Diameter", value: "560 mm" },
      { label: "Spool", value: "225 mm" },
      { label: "Hardness", value: "38-45 HRC" },
      { label: "Disc Thickness", value: "5 mm" },
      { label: "Material", value: "EN42" },
      { label: "Power Requirement", value: "35 HP and above" },
      { label: "Weight", value: "375 kg" },
    ],
    variants: [
      {
        name: "7 Disc",
        specifications:
          "Plain and notched discs; disc dia 560 mm; spool 225 mm; hardness 38-45 HRC; disc thickness 5 mm; EN42",
        power: "35 HP and above",
        weight: "375 kg",
      },
    ],
    features: [
      "Strong disc gangs for soil penetration",
      "Plain and notched disc setup for field versatility",
      "Durable EN42 disc material",
      "Built for clod breaking and residue cutting",
    ],
    keywords: ["disc harrow manufacturer India", "disc harrow price India", "7 disc harrow", "GAIB disc harrow", "tractor disc harrow", "tillage equipment"],
    featured: true,
  },
  {
    id: "tractor-operated-sprayer",
    seoSlug: "tractor-operated-sprayer",
    name: "Tractor Operated Sprayer Machine",
    seoTitle: "Tractor Operated Sprayer Machine | HTP Sprayer - GAIB Agro Equipment",
    seoDescription:
      "GAIB Agro Tractor Operated Sprayer with HTP pump, PTO drive, hose and brass gun. Durable crop spraying machine for uniform coverage and field efficiency.",
    focusKeyword: "tractor operated sprayer machine",
    altKeywords: ["HTP sprayer machine", "tractor PTO sprayer", "agriculture sprayer machine"],
    tagline: "High pressure crop spraying",
    category: "Spraying",
    shortDescription:
      "Tractor operated sprayer with HTP pump, PTO drive, hose, brass gun, and practical field frame for uniform spraying.",
    description:
      "GAIB Tractor Operated Sprayer Machine is built for high-pressure spraying with three point linkage, PTO drive, HTP pump 65, hose, and brass gun for efficient crop protection work.",
    image: "/images/products/tractor-operated-sprayer-square-tank.webp",
    imageAlt: "GAIB Tractor Operated Sprayer Machine square tank variant",
    heroImage: "/images/products/tractor-operated-sprayer-square-tank.webp",
    gallery: [
      productImage(
        "/images/products/tractor-operated-sprayer-square-tank.webp",
        "GAIB square tank tractor operated sprayer",
      ),
      productImage(
        "/images/products/tractor-operated-sprayer-htp.webp",
        "GAIB tractor operated HTP sprayer with hose reel",
      ),
    ],
    specifications: [
      { label: "Variant", value: "Standard tractor operated sprayer" },
      { label: "Linkage", value: "Three point linkage" },
      { label: "Drive", value: "PTO drive" },
      { label: "Pump", value: "HTP pump 65" },
      { label: "Hose", value: "10 mm hose" },
      { label: "Spray Gun", value: "Brass gun" },
      { label: "Power Requirement", value: "20 HP and above" },
      { label: "Weight", value: "150 kg" },
    ],
    variants: [
      {
        name: "Standard",
        specifications:
          "Three point linkage; MS Angle 65x5 and 50x5; PTO drive; 82B pulley; HTP pump 65; hose 10 mm; brass gun",
        power: "20 HP and above",
        weight: "150 kg",
      },
    ],
    features: [
      "Durable and reliable spraying frame",
      "High pressure spray for uniform coverage",
      "Easy operation with tractor PTO drive",
      "Large tank options for reduced refill time",
    ],
    keywords: [
      "tractor operated sprayer",
      "HTP sprayer machine",
      "GAIB sprayer",
      "agriculture sprayer machine",
      "tractor PTO sprayer",
    ],
    featured: true,
  },
  {
    id: "bund-former",
    seoSlug: "bund-former",
    name: "Bund Former",
    seoTitle: "Bund Former Machine Manufacturer India | Field Ridger - GAIB Agro",
    seoDescription:
      "GAIB Agro Bund Former Machine - creates perfect field bunds for water conservation and irrigation management. Govt. Subsidy Approved. Compatible with tractors. Get price.",
    h1: "Bund Former Machine | Water Conservation & Field Preparation - GAIB Agro",
    focusKeyword: "bund former machine India",
    altKeywords: ["bund maker machine", "ridger machine India", "field bunding machine price"],
    tagline: "Adjustable field bund making",
    category: "Land Preparation",
    shortDescription:
      "Adjustable bund former with 1450x900 and 1700x1100 variants for field bund shaping and water management.",
    description:
      "GAIB Bund Former helps farmers create field bunds for water conservation, irrigation management, soil erosion prevention and land preparation using an adjustable three point linkage design with durable blade and sheet construction.",
    image: "/images/products/bund-former-real.webp",
    imageAlt: "Bund Former machine by GAIB Agro Equipment - field bunding machine India",
    heroImage: "/images/products/bund-former-real.webp",
    gallery: [productImage("/images/products/bund-former-real.webp", "GAIB Bund Former product photo")],
    specifications: [
      { label: "Available Variants", value: "1450x900, 1700x1100" },
      { label: "Adjustment", value: "Adjustable bund forming design" },
      { label: "Blade Thickness", value: "6 mm to 8 mm" },
      { label: "Sheet Thickness", value: "1.6 mm to 2.5 mm" },
      { label: "Linkage", value: "Three point linkage" },
      { label: "Power Requirement", value: "35 HP and above" },
      { label: "Weight Range", value: "80 kg to 120 kg" },
    ],
    variants: [
      {
        name: "1450x900",
        specifications: "Adjustable; blade 6 mm; sheet 1.6 mm; three point linkage",
        power: "35 HP and above",
        weight: "80 kg",
      },
      {
        name: "1700x1100",
        specifications: "Adjustable; blade 8 mm; sheet 2.5 mm; three point linkage",
        power: "35 HP and above",
        weight: "120 kg",
      },
    ],
    features: [
      "Creates consistent field bunds for water management",
      "Adjustable design for practical field bund formation",
      "Three point linkage for tractor operation",
      "Useful for irrigation, water channel preparation and erosion control",
      "Adjustable bund height and width as per variant",
      "Two size variants for different field needs",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Attach the bund former to the tractor linkage.",
      "Adjust bund height and width as per field requirement.",
      "Run along the field boundary or channel line.",
      "Shape bunds that support irrigation and water retention.",
    ],
    applicationText:
      "Useful for water conservation, field bunding, irrigation channel support, soil erosion control and field preparation in farms that need better water retention.",
    keywords: ["bund former machine India", "bund maker machine", "ridger machine India", "tractor bund former", "GAIB bund former", "field bund maker"],
    featured: false,
  },
  {
    id: "maize-sheller",
    seoSlug: "maize-sheller",
    name: "Maize Sheller",
    seoTitle: "Maize Sheller Machine Manufacturer India | Corn Sheller - GAIB Agro Equipment",
    seoDescription:
      "GAIB Agro Maize Sheller - High efficiency corn shelling machine for farmers. Govt. Subsidy eligible. Reduces post-harvest loss, saves time. Get specifications and best price.",
    h1: "Maize Sheller Machine | Post-Harvest Corn Processing - GAIB Agro",
    focusKeyword: "maize sheller machine manufacturer India",
    altKeywords: ["corn sheller India", "maize shelling machine price", "maize sheller specifications"],
    tagline: "Power maize dehusker cum sheller",
    category: "Post Harvest",
    shortDescription:
      "Power maize dehusker cum sheller for efficient maize shelling with two screens and tractor-compatible operation.",
    description:
      "GAIB Maize Sheller supports efficient maize dehusking and corn shelling with two screens, practical feed rate, and sturdy construction for post-harvest farm work. It helps reduce post-harvest loss, save time, and improve grain handling after harvest.",
    image: "/images/products/maize-sheller-real.webp",
    imageAlt: "Maize Sheller machine by GAIB Agro Equipment - corn sheller India",
    heroImage: "/images/products/maize-sheller-real.webp",
    gallery: [productImage("/images/products/maize-sheller-real.webp", "GAIB Maize Sheller product photo")],
    specifications: [
      { label: "Variant", value: "Power Maize Dehusker Cum Sheller" },
      { label: "Screens", value: "2 screens" },
      { label: "Threshing / Shelling Speed", value: "6.2 - 7.6 m/s" },
      { label: "Feed Rate", value: "400 - 500 kg/hr" },
      { label: "Power Requirement", value: "35 HP and above" },
      { label: "Weight", value: "250 kg" },
    ],
    variants: [
      {
        name: "Power Maize Dehusker Cum Sheller",
        specifications: "2 screens; threshing/shelling speed 6.2-7.6 m/s; feed rate 400-500 kg/hr",
        power: "35 HP and above",
        weight: "250 kg",
      },
    ],
    features: [
      "Designed for high-efficiency maize dehusking and shelling",
      "Helps reduce post-harvest loss",
      "Suitable for farm-level corn processing",
      "Two-screen setup for practical operation",
      "Suitable feed rate for post-harvest work",
      "Strong build for farm-level maize processing",
      "Easy cleaning and maintenance",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Feed maize into the shelling chamber.",
      "The machine separates kernels from cobs.",
      "Screens support cleaner output and grain flow.",
      "Collect shelled maize for drying, storage or sale.",
    ],
    applicationText:
      "Useful for post-harvest maize processing, corn shelling, dehusking support, grain handling and farm-level storage preparation.",
    keywords: ["maize sheller machine manufacturer India", "maize shelling machine price", "maize dehusker cum sheller", "GAIB maize sheller", "corn sheller machine"],
    featured: false,
  },
  {
    id: "chaff-cutter",
    seoSlug: "chaff-cutter",
    name: "Chaff Cutter",
    seoTitle: "Chaff Cutter Machine Manufacturer India | Power Chaff Cutter - GAIB Agro",
    seoDescription:
      "GAIB Agro Chaff Cutter Machines - Manual & Power operated for cattle farmers. Govt. Subsidy Approved under SMAM. Durable, high capacity, best price. Buy direct from manufacturer.",
    h1: "Chaff Cutter Machine | Fodder Cutting for Livestock - GAIB Agro",
    focusKeyword: "chaff cutter machine manufacturer India",
    altKeywords: ["chaff cutter price India", "toka machine", "fodder cutter machine", "SMAM chaff cutter"],
    tagline: "Three roller fodder cutting",
    category: "Fodder",
    shortDescription:
      "Power operated three roller chaff cutter with three blades for dependable fodder cutting work.",
    description:
      "GAIB Chaff Cutter is a fodder cutting machine for cattle and dairy farmers. Its power-operated three roller and three blade design supports steady fodder preparation, easy maintenance, and durable farm use.",
    image: "/images/products/chaff-cutter-real.webp",
    imageAlt: "Chaff Cutter machine by GAIB Agro - power chaff cutter for cattle farmers India",
    heroImage: "/images/products/chaff-cutter-real.webp",
    gallery: [productImage("/images/products/chaff-cutter-real.webp", "GAIB Chaff Cutter product photo")],
    specifications: [
      { label: "Variant", value: "3 Roller" },
      { label: "Operation", value: "Power operated" },
      { label: "Rollers", value: "Three rollers" },
      { label: "Blades", value: "Three blades" },
      { label: "Power Requirement", value: "3 HP" },
      { label: "Weight", value: "145 kg" },
    ],
    variants: [
      {
        name: "3 Roller",
        specifications: "Power operated; three rollers; three blades",
        power: "3 HP",
        weight: "145 kg",
      },
    ],
    features: [
      "Fodder cutting support for cattle and dairy farmers",
      "Three roller feed design",
      "Three blades for fodder cutting",
      "Power operated for steady farm use",
      "Compact weight for practical placement",
      "Durable steel construction",
      "Easy maintenance for regular fodder preparation",
      "Govt. subsidy approved product category",
    ],
    howItWorks: [
      "Feed green or dry fodder material into the inlet.",
      "Rollers guide the material toward the cutting blades.",
      "Blades cut fodder into usable pieces.",
      "Collect chopped feed for cattle and dairy use.",
    ],
    applicationText:
      "Useful for dairy farms, cattle farmers, fodder preparation, livestock feed management and regular cutting of green or dry fodder material.",
    keywords: ["chaff cutter machine manufacturer India", "chaff cutter price India", "3 roller chaff cutter", "GAIB chaff cutter", "fodder cutting machine"],
    featured: false,
  },
  {
    id: "tractor-trolley",
    seoSlug: "tractor-trolley",
    name: "Tractor Trolley",
    seoTitle: "Tractor Trolley Manufacturer India | Heavy Duty Farm Trolley - GAIB Agro",
    seoDescription:
      "GAIB Agro heavy-duty Tractor Trolleys - 4 to 10 ton capacity. Ideal for transporting farm produce, construction material & goods. Durable steel body. Get price & specs today.",
    h1: "Tractor Trolley | Heavy-Duty Farm Transport Equipment - GAIB Agro",
    focusKeyword: "tractor trolley manufacturer India",
    altKeywords: ["farm trolley price India", "hydraulic trolley", "tipping trailer India"],
    tagline: "Reliable farm transport",
    category: "Transport",
    shortDescription:
      "Heavy-duty tractor trolley for transporting crop, inputs, implements, and farm material with stable field movement.",
    description:
      "GAIB Tractor Trolley is built for dependable farm transport with a strong load body, durable wheel support, practical side railing, and field-ready construction for agricultural produce, inputs, implements, construction material and goods movement.",
    image: "/images/products/tractor-trolley.webp",
    imageAlt: "Tractor Trolley manufacturer India - heavy duty farm trolley by GAIB Agro",
    heroImage: "/images/products/tractor-trolley.webp",
    gallery: [productImage("/images/products/tractor-trolley.webp", "GAIB Tractor Trolley product photo")],
    specifications: [
      { label: "Application", value: "Farm transport" },
      { label: "Use", value: "Crop, input, implement, and material movement" },
      { label: "Body", value: "Heavy-duty trolley body" },
      { label: "Side Railing", value: "Raised railing for safer load support" },
      { label: "Operation", value: "Tractor drawn" },
      { label: "Support", value: "Dealer assisted service" },
    ],
    features: [
      "Heavy-duty farm transport design",
      "Capacity options available as per requirement",
      "Strong load body for daily farm work",
      "Raised side railing for crop and material transport",
      "Stable wheel support for field and road movement",
      "Useful for harvest, input, and equipment movement",
      "Easy loading and unloading support",
      "Long service life with durable steel construction",
    ],
    howItWorks: [
      "Attach the trolley to a suitable tractor.",
      "Load crop, inputs, equipment or farm material.",
      "Secure the load with side railing support.",
      "Transport safely across farm tracks or nearby roads.",
    ],
    applicationText:
      "Useful for crop transport, farm input movement, implement shifting, construction material movement and daily agricultural logistics.",
    keywords: ["tractor trolley manufacturer India", "farm trolley price India", "tractor trolley", "GAIB trolley", "farm trolley", "agriculture trolley", "tractor trailer"],
    featured: false,
  },
];

export const galleryImages = [
  {
    src: "/images/products/baba-super-multi-crop-thresher-square.webp",
    alt: "Baba Super Multi Crop Thresher product image",
    title: "Baba Super Multi Crop Thresher",
  },
  {
    src: "/images/products/seed-cum-fertilizer-drill-main.webp",
    alt: "Seed Cum Fertilizer Drill product image",
    title: "Seed Cum Fertilizer Drill",
  },
  {
    src: "/images/products/seed-cum-fertilizer-drill-field.webp",
    alt: "Seed Cum Fertilizer Drill attached to tractor",
    title: "Seed Drill Field View",
  },
  {
    src: "/images/products/cultivator-real.webp",
    alt: "GAIB Cultivator product image",
    title: "Cultivator",
  },
  {
    src: "/images/products/disc-harrow-real.webp",
    alt: "GAIB Disc Harrow product image",
    title: "Disc Harrow",
  },
  {
    src: "/images/products/tractor-operated-sprayer-square-tank.webp",
    alt: "GAIB Tractor Operated Sprayer square tank product image",
    title: "Tractor Operated Sprayer",
  },
  {
    src: "/images/products/mini-thresher.webp",
    alt: "GAIB Mini Thresher product image",
    title: "Mini Thresher",
  },
  {
    src: "/images/products/bund-former-real.webp",
    alt: "GAIB Bund Former product image",
    title: "Bund Former",
  },
  {
    src: "/images/products/maize-sheller-real.webp",
    alt: "GAIB Maize Sheller product image",
    title: "Maize Sheller",
  },
  {
    src: "/images/products/chaff-cutter-real.webp",
    alt: "GAIB Chaff Cutter product image",
    title: "Chaff Cutter",
  },
  {
    src: "/images/products/tractor-trolley.webp",
    alt: "GAIB Tractor Trolley product image",
    title: "Tractor Trolley",
  },
  {
    src: "/images/gallery/manufacturing-excellence-1.webp",
    alt: "GAIB Agro manufacturing excellence workshop operations",
    title: "Manufacturing Excellence",
    layout: "wide",
  },
  {
    src: "/images/gallery/manufacturing-excellence-2.webp",
    alt: "GAIB Agro manufacturing excellence thresher assembly and components",
    title: "Advanced Manufacturing",
    layout: "wide",
  },
  {
    src: "/images/gallery/factory-floor.svg",
    alt: "GAIB factory floor with agricultural equipment assembly",
    title: "Manufacturing Floor",
  },
  {
    src: "/images/gallery/quality-check.svg",
    alt: "Quality inspection of GAIB agro equipment",
    title: "Quality Checks",
  },
];

export const findProductBySlug = (slug) =>
  products.find((product) => {
    const acceptedSlugs = [product.id, getProductSlug(product), ...(product.legacySlugs || [])];
    return acceptedSlugs.includes(slug);
  });
