import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

const partners = [
  { id: "asm" as const, url: "https://a-s-m.yachts/", logo: "/partners/asm.svg" },
  { id: "permateak" as const, url: "https://permateak.si/design-your-deck/", logo: "/partners/PERMATEAK-LOGO_color.png" },
  { id: "coelmo" as const, url: "https://www.coelmo.net/", logo: "/partners/coelmo.png" },
  { id: "gydc" as const, url: "https://global-yacht-delivery-captain.com/", logo: "/partners/1__v9.png" },
  { id: "croatiaBroker" as const, url: "https://croatia-broker.com/", logo: "/partners/broker_light.svg" },
  { id: "yachtRent" as const, url: "https://www.yacht-rent.com/", logo: "/partners/photo_2024-08-24-16.48.53.jpeg" },
];

const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section id="partners" className="py-24 section-cream">
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
              {t("partners.label")}
            </span>
            <div className="w-8 h-[2px] bg-brand" />
          </div>
          <h2 className="font-heading font-bold text-foreground text-3xl sm:text-4xl mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-border hover:border-brand/30"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0 flex-1">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={t(`partners.list.${partner.id}.name`)}
                      className="h-10 w-auto object-contain object-left mb-2"
                    />
                  ) : null}
                  <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-brand transition-colors">
                    {t(`partners.list.${partner.id}.name`)}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-brand transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(`partners.list.${partner.id}.description`)}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
