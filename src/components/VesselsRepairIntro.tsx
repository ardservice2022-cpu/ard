import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Phone } from "lucide-react";
import shipRepairImg from "@/assets/ship-repair.jpg";
import sailingYachtImg from "@/assets/sailing-yacht.jpg";
import motorYachtImg from "@/assets/motor-yacht.jpg";
import outboardImg from "@/assets/outboard-engine.jpg";

const images = [
  { src: shipRepairImg, altKey: "common.shipRepair" },
  { src: sailingYachtImg, altKey: "common.sailingYachts" },
  { src: motorYachtImg, altKey: "common.motorYachts" },
  { src: outboardImg, altKey: "common.outboardEngines" },
];

const bulletKeys = ["bullet1", "bullet2", "bullet3", "bullet4"] as const;

const VesselsRepairIntro = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-16 sm:py-24 section-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: text + key points + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-heading font-bold text-foreground text-2xl sm:text-3xl mb-6">
              {t("vesselsRepair.title")}
            </h2>
            <p className="text-brand font-medium text-base mb-4">
              {t("vesselsRepair.yachtLine")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {t("vesselsRepair.paragraph1")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {t("vesselsRepair.paragraph2")}
            </p>
            <ul className="space-y-3 mb-8">
              {bulletKeys.map((key, i) => (
                <li key={key} className="flex items-center gap-3 text-foreground text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  {t(`vesselsRepair.${key}`)}
                </li>
              ))}
            </ul>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-primary-foreground font-heading font-semibold px-6 py-3 rounded transition-colors text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              {t("vesselsRepair.cta")}
            </a>
          </motion.div>

          {/* Right: 4 images in 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-md"
              >
                <img
                  src={img.src}
                  alt={t(img.altKey)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VesselsRepairIntro;
