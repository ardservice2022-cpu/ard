import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy-dark py-12 border-t border-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center mb-4">
              <img
                src="/ard_logo.png"
                alt={t("footer.logoAlt")}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-steel text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">{t("common.services")}</h4>
            <ul className="space-y-2">
              <li><a href="#ship-repair" className="text-steel hover:text-brand text-sm transition-colors">{t("common.shipRepair")}</a></li>
              <li><a href="#ship-repair" className="text-steel hover:text-brand text-sm transition-colors">{t("common.sailingYachts")}</a></li>
              <li><a href="#ship-repair" className="text-steel hover:text-brand text-sm transition-colors">{t("common.motorYachts")}</a></li>
              <li><a href="#ship-repair" className="text-steel hover:text-brand text-sm transition-colors">{t("common.outboardEngines")}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">{t("common.company")}</h4>
            <ul className="space-y-2">
              <li><a href="/#portfolio" className="text-steel hover:text-brand text-sm transition-colors">{t("nav.portfolio")}</a></li>
              <li><a href="/#partners" className="text-steel hover:text-brand text-sm transition-colors">{t("nav.partners")}</a></li>
              <li><a href="/vacancies" className="text-steel hover:text-brand text-sm transition-colors">{t("nav.vacancies")}</a></li>
              <li><a href="/#contacts" className="text-steel hover:text-brand text-sm transition-colors">{t("nav.contacts")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-sm uppercase tracking-wider mb-4">{t("common.contact")}</h4>
            <div className="space-y-3">
              <a href="tel:421947915304" className="flex items-center gap-2 text-steel hover:text-brand text-sm transition-colors">
                <Phone className="w-4 h-4" /> +421 947-915-304
              </a>
              <a href="tel:421940631268" className="flex items-center gap-2 text-steel hover:text-brand text-sm transition-colors">
                <Phone className="w-4 h-4" /> +421 940 631 268
              </a>
              <a href="mailto:ardservices2022@gmail.com" className="flex items-center gap-2 text-steel hover:text-brand text-sm transition-colors">
                <Mail className="w-4 h-4" /> ardservices2022@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-6 text-center">
          <p className="text-steel/50 text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
