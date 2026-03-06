import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import shipRepairImg from "@/assets/ship-repair.jpg";
import sailingYachtImg from "@/assets/sailing-yacht.jpg";

const images = [
  { src: shipRepairImg, altKey: "comprehensiveRepair.imageAlt" },
  { src: sailingYachtImg, altKey: "comprehensiveRepair.imageAlt2" },
];

const ComprehensiveRepairBlock = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand" />
              <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
                {t("comprehensiveRepair.subheading")}
              </span>
            </div>
            <h2 className="font-heading font-bold text-foreground text-2xl sm:text-4xl mb-6">
              {t("comprehensiveRepair.title")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {t("comprehensiveRepair.paragraph1")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              {t("comprehensiveRepair.paragraph2")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={img.src}
                  alt={t(img.altKey)}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveRepairBlock;
