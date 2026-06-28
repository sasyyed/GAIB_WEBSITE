import { FiAward, FiMap, FiTruck, FiUsers } from "react-icons/fi";
import Container from "../ui/Container";

const stats = [
  { value: "5000+", label: "Machines Delivered", icon: FiTruck },
  { value: "200+", label: "Dealers Network", icon: FiUsers },
  { value: "15+", label: "Years Experience", icon: FiAward },
  { value: "10+", label: "States Served", icon: FiMap },
];

const StatsStrip = () => {
  return (
    <section className="bg-gaib-green py-8 text-white">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center justify-center gap-4 border-white/12 lg:border-r lg:last:border-r-0">
                <Icon className="size-10 text-gaib-gold" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl font-extrabold">{stat.value}</p>
                  <p className="text-sm font-semibold text-white/72">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsStrip;
