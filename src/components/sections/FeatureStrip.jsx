import { FiCpu, FiDroplet, FiGrid, FiMapPin, FiSettings, FiTool } from "react-icons/fi";
import Container from "../ui/Container";

const features = [
  { title: "Multi Crop Compatibility", icon: FiGrid },
  { title: "Superior Grain Separation", icon: FiSettings },
  { title: "Enhanced Fuel Efficiency", icon: FiDroplet },
  { title: "Rugged Construction", icon: FiTool },
  { title: "Easy Maintenance", icon: FiCpu },
  { title: "Farmer Friendly Design", icon: FiMapPin },
];

const FeatureStrip = () => {
  return (
    <section className="bg-gaib-green text-white">
      <Container>
        <div className="grid divide-y divide-white/12 py-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-center gap-4 px-4 py-5 lg:flex-col lg:text-center">
                <Icon className="size-8 shrink-0 text-gaib-gold" aria-hidden="true" />
                <p className="text-sm font-bold leading-6">{feature.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeatureStrip;
