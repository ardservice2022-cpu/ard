import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, Sailboat, Anchor, Wrench, Settings } from "lucide-react";
import sailingYachtImg from "@/assets/sailing-yacht.jpg";
import motorYachtImg from "@/assets/motor-yacht.jpg";
import outboardImg from "@/assets/outboard-engine.jpg";
import yachtServiceImg from "@/assets/yacht-service.jpg";

const categoryConfig = [
  { key: "sailing", icon: Sailboat, image: sailingYachtImg, itemCount: 5 },
  { key: "motor", icon: Anchor, image: motorYachtImg, itemCount: 5 },
  { key: "outboard", icon: Wrench, image: outboardImg, itemCount: 5 },
  { key: "other", icon: Settings, image: yachtServiceImg, itemCount: 5 },
] as const;

const YachtServiceSection = () => {
  const { t } = useTranslation();
  return (
    <section id="yacht-service" className="py-24 section-cream">
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
              {t("yachtService.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-foreground text-3xl sm:text-4xl mb-4">
            {t("yachtService.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("yachtService.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categoryConfig.map((cat, index) => {
            const Icon = cat.icon;
            const title = t(`yachtService.${cat.key}Title`);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <Icon className="w-6 h-6 text-brand" />
                    <h3 className="font-heading font-bold text-primary-foreground text-xl">
                      {title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-3">
                    {Array.from({ length: cat.itemCount }, (_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{t(`yachtService.${cat.key}Item${i + 1}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YachtServiceSection;
