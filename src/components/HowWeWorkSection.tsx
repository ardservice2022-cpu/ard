import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const stepKeys = ["step1", "step2", "step3", "step4"] as const;

const HowWeWorkSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 section-navy">
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
              {t("howWeWork.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-primary-foreground text-3xl sm:text-4xl">
            {t("howWeWork.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <span className="font-heading font-bold text-brand/20 text-7xl block mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading font-bold text-primary-foreground text-xl mb-3">
                {t(`howWeWork.${key}Title`)}
              </h3>
              <p className="text-steel text-sm leading-relaxed">{t(`howWeWork.${key}Desc`)}</p>

              {index < stepKeys.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-[2px] bg-brand/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
