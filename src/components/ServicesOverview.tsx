import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Anchor, Sailboat, Ship, Wrench } from "lucide-react";
import shipRepairImg from "@/assets/ship-repair.jpg";
import sailingYachtImg from "@/assets/sailing-yacht.jpg";
import motorYachtImg from "@/assets/motor-yacht.jpg";
import outboardImg from "@/assets/outboard-engine.jpg";

const services = [
  { icon: Ship, titleKey: "shipRepair", descKey: "shipRepairDesc", image: shipRepairImg, href: "#ship-repair" },
  { icon: Sailboat, titleKey: "sailingYachts", descKey: "sailingYachtsDesc", image: sailingYachtImg, href: "#ship-repair" },
  { icon: Anchor, titleKey: "motorYachts", descKey: "motorYachtsDesc", image: motorYachtImg, href: "#ship-repair" },
  { icon: Wrench, titleKey: "outboardEngines", descKey: "outboardDesc", image: outboardImg, href: "#ship-repair" },
];

const ServicesOverview = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-brand" />
            <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
              {t("services.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-foreground text-3xl sm:text-4xl">
            {t("services.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.href}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`common.${service.titleKey}`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="w-5 h-5 text-brand" />
                  <h3 className="font-heading font-bold text-primary-foreground text-lg">
                    {t(`common.${service.titleKey}`)}
                  </h3>
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  {t(`services.${service.descKey}`)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
