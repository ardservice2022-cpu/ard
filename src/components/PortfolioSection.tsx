import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const photos = [
  "/portfolio/port_1.png",
  "/portfolio/port_2.jpeg",
  "/portfolio/port_3.jpeg",
  "/portfolio/port_4.jpeg",
  "/portfolio/port_5.jpeg",
  "/portfolio/port_6.jpeg",
  "/portfolio/port_7.jpeg",
  "/portfolio/port_8.jpeg",
  "/portfolio/port_9.jpeg",
  "/portfolio/port_10.jpeg",
  "/portfolio/port_11.jpeg",
  "/portfolio/port_12.jpeg",
];

const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="py-24 section-navy">
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
              {t("portfolio.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-primary-foreground text-3xl sm:text-4xl">
            {t("portfolio.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="aspect-[2/3] rounded-lg overflow-hidden group"
            >
              <img
                src={photo}
                alt={`Portfolio work ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
