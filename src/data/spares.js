const spareImage = (fileName) => `/images/spares/${fileName}.webp`;
const posterImage = (fileName) => `/images/spares/posters/${fileName}.webp`;

const part = (slug, name, category) => ({
  slug,
  name,
  category,
  image: spareImage(slug),
  badge: "Genuine Quality | Heavy Duty",
});

const poster = (slug, title, description, imageName, alt) => ({
  slug,
  title,
  description,
  image: posterImage(imageName),
  alt,
});

export const spareIntro =
  "Genuine agricultural implement spare parts manufactured by GAIB AGRO EQUIPMENT PVT. LTD. Precision engineered, durable and suitable for reliable field performance. Custom sizes available.";

export const spareCategories = [
  {
    slug: "multi-crop-thresher-spare-parts",
    name: "Multi Crop Thresher Spare Parts",
    shortName: "Multi Crop Thresher",
    title: "Multi Crop Thresher Spare Parts",
    description:
      "Genuine spare parts for GAIB Multi Crop Thresher power transmission, elevator system, shafts, cleaning unit, bearings and drum components.",
    image: posterImage("elevator-bucket-conveyor-fasteners"),
    posters: [
      poster(
        "thresher-elevator-bucket-conveyor-fasteners",
        "Elevator Bucket, Conveyor Belt & Fasteners",
        "Combined thresher elevator bucket, conveyor belt, bolt set and rivet nut spare parts for smooth grain handling.",
        "elevator-bucket-conveyor-fasteners",
        "GAIB thresher elevator bucket conveyor belt and fasteners spare parts",
      ),
      poster(
        "thresher-cleaning-unit-sieves",
        "Cleaning Unit & Crop Sieves",
        "Multi crop, wheat, mustard, gram, soybean and custom size sieve options for better cleaning and separation.",
        "cleaning-unit-sieves",
        "GAIB cleaning unit and sieve spare parts for multi crop thresher",
      ),
      poster(
        "thresher-bearings-units",
        "Bearings, UCF, UCP & Pillow Blocks",
        "Premium bearing units for agricultural machinery, threshers, blowers, gear boxes and processing machines.",
        "bearings-units",
        "GAIB bearings UCF UCP ball bearing and pillow block spare parts",
      ),
      poster(
        "thresher-v-belts",
        "V-Belts",
        "Oil and heat resistant C142, C110, B86 and B121 V-belts for multi crop thresher and agricultural machinery.",
        "v-belts",
        "GAIB V-belts for multi crop thresher and agricultural machinery",
      ),
      poster(
        "thresher-small-pulleys",
        "Small Pulleys",
        "Cast iron pulley sizes including 5x2C, 13x3C and 26x2C for heavy-duty power transmission.",
        "small-pulleys",
        "GAIB small pulleys spare parts for agricultural equipment",
      ),
      poster(
        "thresher-balance-wheel",
        "Balance Wheel",
        "Balance wheel for multi crop thresher with top, side and bottom views for correct spare identification.",
        "balance-wheel",
        "GAIB balance wheel spare part for multi crop thresher",
      ),
    ],
    groups: [
      {
        name: "Power Transmission",
        parts: [
          part("balance-wheel", "Balance Wheel", "Power Transmission"),
          part("fly-wheel", "Fly Wheel", "Power Transmission"),
          part("pulley-26x2c", "Pulley 26x2C", "Power Transmission"),
          part("pulley-13x3c", "Pulley 13x3C", "Power Transmission"),
          part("pulley-12x1b", "Pulley 12x1B", "Power Transmission"),
          part("pulley-5x2c", "Pulley 5x2C", "Power Transmission"),
          part("pulley-5x1b", "Pulley 5x1B", "Power Transmission"),
          part("pulley-7x2t", "Pulley 7x2T", "Power Transmission"),
          part("v-belts", "V-Belts", "Power Transmission"),
        ],
      },
      {
        name: "Elevator System",
        parts: [
          part("elevator-bucket-6x4", "Elevator Bucket 6x4", "Elevator System"),
          part("custom-elevator-bucket", "Custom Elevator Bucket", "Elevator System"),
          part("high-tensile-elevator-belt", "High Tensile Elevator Belt", "Elevator System"),
          part("bucket-bolt", "Bucket Bolt", "Elevator System"),
          part("elevator-shaft", "Elevator Shaft", "Elevator System"),
        ],
      },
      {
        name: "Shafts",
        parts: [
          part("main-shaft", "Main Shaft", "Shafts"),
          part("drum-shaft", "Drum Shaft", "Shafts"),
          part("blower-shaft", "Blower Shaft", "Shafts"),
          part("conveyor-shaft", "Conveyor Shaft", "Shafts"),
          part("custom-shaft", "Custom Shaft", "Shafts"),
        ],
      },
      {
        name: "Cleaning Unit",
        parts: [
          part("multi-crop-sieve", "Multi Crop Sieve", "Cleaning Unit"),
          part("wheat-sieve", "Wheat Sieve", "Cleaning Unit"),
          part("mustard-sieve", "Mustard Sieve", "Cleaning Unit"),
          part("gram-sieve", "Gram Sieve", "Cleaning Unit"),
          part("soybean-sieve", "Soybean Sieve", "Cleaning Unit"),
          part("custom-size-sieve", "Custom Size Sieve", "Cleaning Unit"),
        ],
      },
      {
        name: "Bearings",
        parts: [
          part("ucf-bearing", "UCF Bearing", "Bearings"),
          part("ucp-bearing", "UCP Bearing", "Bearings"),
          part("ball-bearing", "Ball Bearing", "Bearings"),
          part("pillow-block-bearing", "Pillow Block Bearing", "Bearings"),
        ],
      },
      {
        name: "Drum Components",
        parts: [
          part("beater-blade", "Beater Blade", "Drum Components"),
          part("drum-spike", "Drum Spike", "Drum Components"),
          part("concave-parts", "Concave Parts", "Drum Components"),
          part("drum-plate", "Drum Plate", "Drum Components"),
        ],
      },
    ],
  },
  {
    slug: "seed-drill-spare-parts",
    name: "Seed Drill Spare Parts",
    shortName: "Seed Drill",
    title: "Seed Drill Spare Parts",
    description:
      "Precision replacement parts for seed drill and seed cum fertilizer drill machines, including seed metering and furrow placement components.",
    image: posterImage("seed-drill-cultivator-spares"),
    posters: [
      poster(
        "seed-drill-cultivator-spares",
        "Seed Drill Spare Parts",
        "Combined seed drill spare parts panel including seed tube, seed boot, fluted roller, seed cup, sprockets, chain, gear box and bearing unit.",
        "seed-drill-cultivator-spares",
        "GAIB seed drill and cultivator spare parts combined poster",
      ),
    ],
    groups: [
      {
        name: "Popular Seed Drill Parts",
        parts: [
          part("seed-metering-wheel", "Seed Metering Wheel", "Seed Drill"),
          part("seed-tube", "Seed Tube", "Seed Drill"),
          part("fertilizer-hopper", "Fertilizer Hopper", "Seed Drill"),
          part("furrow-opener", "Furrow Opener", "Seed Drill"),
          part("chain-sprocket", "Chain Sprocket", "Seed Drill"),
          part("depth-adjuster", "Depth Adjuster", "Seed Drill"),
        ],
      },
    ],
  },
  {
    slug: "cultivator-spare-parts",
    name: "Cultivator Spare Parts",
    shortName: "Cultivator",
    title: "Cultivator Spare Parts",
    description:
      "Heavy-duty cultivator spare parts for rigid and spring loaded cultivators used in soil preparation and weed removal.",
    image: posterImage("seed-drill-cultivator-spares"),
    posters: [
      poster(
        "seed-drill-cultivator-spares",
        "Cultivator Spare Parts",
        "Combined cultivator spare parts panel including tine, tine shovel, spring tine, cultivator point, shank, clamp, bolt, spring, levelling board and depth adjuster.",
        "seed-drill-cultivator-spares",
        "GAIB cultivator spare parts combined poster",
      ),
    ],
    groups: [
      {
        name: "Popular Cultivator Parts",
        parts: [
          part("cultivator-tine", "Cultivator Tine", "Cultivator"),
          part("en42-shovel", "EN42 Shovel", "Cultivator"),
          part("spring-assembly", "Spring Assembly", "Cultivator"),
          part("tyne-clamp", "Tyne Clamp", "Cultivator"),
          part("hitch-pin", "Hitch Pin", "Cultivator"),
          part("tyne-bolt", "Tyne Bolt", "Cultivator"),
        ],
      },
    ],
  },
  {
    slug: "tractor-mounted-sprayer-spare-parts",
    name: "Tractor Mounted Sprayer Spare Parts",
    shortName: "Tractor Mounted Sprayer",
    title: "Tractor Mounted Sprayer Spare Parts",
    description:
      "Reliable tractor mounted sprayer spare parts for HTP pump systems, hose reels, spray guns, nozzles and pressure control.",
    image: posterImage("tractor-mounted-sprayer-spares"),
    posters: [
      poster(
        "tractor-mounted-sprayer-spares",
        "Tractor Mounted Sprayer Unit",
        "Combined tractor mounted sprayer spare parts including HTP pump, hose pipe, brass gun, heavy-duty frame and 500 litre tank.",
        "tractor-mounted-sprayer-spares",
        "GAIB tractor mounted sprayer unit and spare parts poster",
      ),
    ],
    groups: [
      {
        name: "Popular Sprayer Parts",
        parts: [
          part("htp-pump", "HTP Pump", "Tractor Mounted Sprayer"),
          part("hose-reel", "Hose Reel", "Tractor Mounted Sprayer"),
          part("brass-spray-gun", "Brass Spray Gun", "Tractor Mounted Sprayer"),
          part("pto-shaft", "PTO Shaft", "Tractor Mounted Sprayer"),
          part("nozzle-set", "Nozzle Set", "Tractor Mounted Sprayer"),
          part("pressure-regulator", "Pressure Regulator", "Tractor Mounted Sprayer"),
        ],
      },
    ],
  },
  {
    slug: "battery-knapsack-sprayer-spare-parts",
    name: "Battery Knapsack Sprayer Spare Parts",
    shortName: "Battery Knapsack Sprayer",
    title: "Battery Knapsack Sprayer Spare Parts",
    description:
      "Replacement parts for battery knapsack sprayers, including pump, battery, charger, lance, nozzle and tank accessories.",
    image: posterImage("battery-knapsack-sprayer-spares"),
    posters: [
      poster(
        "battery-knapsack-sprayer-spares",
        "Battery Knapsack Sprayer Spare Parts",
        "Combined spare parts panel including spray lance, trigger gun, adjustable nozzle, double nozzle, fan nozzle, cone nozzle, filter, water pipe, battery, charger, shoulder belt and nozzle head.",
        "battery-knapsack-sprayer-spares",
        "GAIB battery knapsack sprayer spare parts poster",
      ),
    ],
    groups: [
      {
        name: "Popular Battery Sprayer Parts",
        parts: [
          part("battery-pack", "Battery Pack", "Battery Knapsack Sprayer"),
          part("pump-motor", "Pump Motor", "Battery Knapsack Sprayer"),
          part("spray-lance", "Spray Lance", "Battery Knapsack Sprayer"),
          part("knapsack-nozzle-set", "Nozzle Set", "Battery Knapsack Sprayer"),
          part("battery-charger", "Battery Charger", "Battery Knapsack Sprayer"),
          part("tank-cap", "Tank Cap", "Battery Knapsack Sprayer"),
        ],
      },
    ],
  },
  {
    slug: "general-spare-parts",
    name: "General Spare Parts",
    shortName: "General Spares",
    title: "General Agricultural Implement Spare Parts",
    description:
      "General agricultural implement spare parts, fasteners, bearings, belts, pulleys and custom fabricated replacement parts.",
    image: posterImage("bearings-units"),
    posters: [
      poster(
        "general-bearings-units",
        "Bearings & Bearing Units",
        "UCF, UCP, ball bearing and pillow block bearing units for agricultural machinery and industrial equipment.",
        "bearings-units",
        "GAIB bearing units and agricultural machinery bearings",
      ),
      poster(
        "general-v-belts",
        "V-Belts",
        "Oil and heat resistant V-belts for tractors, threshers, water pumps and industrial machinery.",
        "v-belts",
        "GAIB V-belts spare parts for agricultural machinery",
      ),
      poster(
        "general-small-pulleys",
        "Small Pulleys",
        "Painted cast iron pulley sizes for reliable agricultural equipment power transmission.",
        "small-pulleys",
        "GAIB small pulley spare parts",
      ),
    ],
    groups: [
      {
        name: "General Spare Parts",
        parts: [
          part("nut-bolt-kit", "Nut Bolt Kit", "General Spare Parts"),
          part("bearing-set", "Bearing Set", "General Spare Parts"),
          part("standard-v-belts", "Standard V-Belts", "General Spare Parts"),
          part("standard-pulley", "Standard Pulley", "General Spare Parts"),
          part("grease-nipple", "Grease Nipple", "General Spare Parts"),
          part("custom-fabrication-part", "Custom Fabrication Part", "General Spare Parts"),
        ],
      },
    ],
  },
];

export const getSpareCategoryPath = (category) => `/spares/${category.slug}`;

export const getSpareCategoryParts = (category) =>
  category.groups.flatMap((group) => group.parts.map((item) => ({ ...item, groupName: group.name })));

export const allSpareParts = spareCategories.flatMap((category) =>
  getSpareCategoryParts(category).map((item) => ({ ...item, categorySlug: category.slug, categoryName: category.name })),
);

export const sparePosters = spareCategories.flatMap((category) =>
  (category.posters || []).map((item) => ({
    ...item,
    categorySlug: category.slug,
    categoryName: category.name,
    categoryShortName: category.shortName,
  })),
);

export const findSpareCategoryBySlug = (slug) => spareCategories.find((category) => category.slug === slug);
