import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-ship-repair.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ship repair on the Danube" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
        {/* Subtle water shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand/5 to-transparent pointer-events-none animate-water-shine" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand animate-wave-line" />
              <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
                {t("hero.tagline")}
              </span>
            </div>

            <h1 className="font-heading font-bold text-primary-foreground text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              {t("hero.title")}{" "}
              <span className="text-brand">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titleSuffix")}
            </h1>

            <p className="text-steel text-lg sm:text-xl mb-4 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>

            <p className="text-steel/70 text-base mb-8">
              {t("hero.location")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:421947915304"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-primary-foreground font-heading font-semibold px-8 py-4 rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              {t("hero.freeEstimate")}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-steel/30 text-primary-foreground hover:border-brand hover:text-brand font-heading font-semibold px-8 py-4 rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              {t("hero.ourServices")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-steel/50 drop-shadow-sm" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
