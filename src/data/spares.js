const spareImage = (fileName) => `/images/spares/${fileName}.webp`;

const part = (slug, name, category) => ({
  slug,
  name,
  category,
  image: spareImage(slug),
  badge: "OEM Quality | Heavy Duty",
});

export const spareIntro =
  "OEM quality agricultural implement spare parts manufactured by GAIB AGRO EQUIPMENT PVT. LTD. Precision engineered, durable and suitable for reliable field performance. Custom sizes available.";

export const spareCategories = [
  {
    slug: "multi-crop-thresher-spare-parts",
    name: "Multi Crop Thresher Spare Parts",
    shortName: "Multi Crop Thresher",
    title: "Multi Crop Thresher Spare Parts",
    description:
      "OEM spare parts for GAIB Multi Crop Thresher power transmission, elevator system, shafts, cleaning unit, bearings and drum components.",
    image: spareImage("multi-crop-thresher-spare-parts"),
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
    image: spareImage("seed-drill-spare-parts"),
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
    image: spareImage("cultivator-spare-parts"),
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
    image: spareImage("tractor-mounted-sprayer-spare-parts"),
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
    image: spareImage("battery-knapsack-sprayer-spare-parts"),
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
    image: spareImage("general-spare-parts"),
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

export const findSpareCategoryBySlug = (slug) => spareCategories.find((category) => category.slug === slug);
