import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Lightbulb, Shield, Users, Clock } from "lucide-react";

const advantageKeys = ["item1", "item2", "item3", "item4"] as const;
const icons = [Lightbulb, Shield, Users, Clock];

const AdvantagesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="advantages" className="py-24 section-cream">
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
              {t("advantages.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-foreground text-3xl sm:text-4xl mb-4">
            {t("advantages.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantageKeys.map((key, index) => {
            const Icon = icons[index];
            const num = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="font-heading font-bold text-brand text-2xl block mb-2">{num}</span>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{t(`advantages.${key}Title`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`advantages.${key}Desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
