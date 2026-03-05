import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import shipRepairImg from "@/assets/ship-repair.jpg";

const repairItemKeys = Array.from({ length: 10 }, (_, i) => `item${i + 1}` as const);

const ShipRepairSection = () => {
  const { t } = useTranslation();
  return (
    <section id="ship-repair" className="py-24 section-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand" />
              <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
                {t("shipRepair.label")}
              </span>
            </div>
            <h2 className="font-heading font-bold text-primary-foreground text-3xl sm:text-4xl mb-6">
              {t("shipRepair.title")}
            </h2>
            <p className="text-steel text-base leading-relaxed mb-8">
              {t("shipRepair.intro")}
            </p>

            <div className="grid gap-3">
              {repairItemKeys.map((itemKey, i) => (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-steel text-sm">{t(`shipRepair.${itemKey}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={shipRepairImg}
              alt={t("shipRepair.imageAlt")}
              className="rounded-lg w-full shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand rounded-lg p-6 shadow-xl">
              <span className="font-heading font-bold text-primary-foreground text-3xl block">{t("shipRepair.rapidResponse")}</span>
              <span className="text-primary-foreground/80 text-sm">{t("shipRepair.rapidResponseLabel")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShipRepairSection;
