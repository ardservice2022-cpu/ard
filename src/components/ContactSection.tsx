import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/48.12757973957474+17.157746554800248/@48.12757973957474,17.157746554800248,16z";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contacts" className="py-24 section-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-brand animate-wave-line" />
          <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
            {t("contacts.label")}
          </span>
        </div>
        <h2 className="font-heading font-bold text-primary-foreground text-3xl sm:text-4xl mb-12">
          {t("contacts.title")}
        </h2>

        <div className="border-t border-navy-light pt-12">
          <div className="grid md:grid-cols-3 gap-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 rounded-xl border border-navy-light bg-navy/40 p-6 flex flex-col gap-5"
          >
            <h3 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider text-steel">
              {t("common.company")}
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-primary-foreground font-medium">{t("contacts.addressLine1")}</p>
                <p className="text-steel text-sm">{t("contacts.addressLine2")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand shrink-0" />
              <span className="text-steel text-sm">{t("common.hours247")}</span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-brand hover:underline"
            >
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-sm">{t("contacts.vlcieHrdlo")}</span>
            </a>
            <a
              href="mailto:ardservices2022@gmail.com"
              className="flex items-center gap-3 text-steel hover:text-brand transition-colors text-sm"
            >
              <Mail className="w-5 h-5 shrink-0" />
              ardservices2022@gmail.com
            </a>
          </motion.div>

          {/* General Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-xl border border-navy-light bg-navy/40 p-6 flex flex-col gap-4"
          >
            <div>
              <p className="font-heading font-bold text-brand text-lg">BURKOVETS SERGIY</p>
              <p className="text-steel text-xs uppercase tracking-wider mt-1">{t("common.generalManager")}</p>
            </div>
            <a
              href="tel:421947915304"
              className="flex items-center gap-3 text-primary-foreground hover:text-brand transition-colors text-sm"
            >
              <Phone className="w-4 h-4 shrink-0 text-brand" />
              +421 947-915-304
              <span className="text-steel/80">{t("common.whatsappTelegram")}</span>
            </a>
            <a
              href="mailto:ardservices2022@gmail.com"
              className="flex items-center gap-3 text-primary-foreground hover:text-brand transition-colors text-sm"
            >
              <Mail className="w-4 h-4 shrink-0 text-brand" />
              ardservices2022@gmail.com
            </a>
          </motion.div>

          {/* Technical Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-navy-light bg-navy/40 p-6 flex flex-col gap-4"
          >
            <div>
              <p className="font-heading font-bold text-brand text-lg">FRIZHIKIN SERGIY</p>
              <p className="text-steel text-xs uppercase tracking-wider mt-1">{t("common.technicalManager")}</p>
            </div>
            <a
              href="tel:421940631268"
              className="flex items-center gap-3 text-primary-foreground hover:text-brand transition-colors text-sm"
            >
              <Phone className="w-4 h-4 shrink-0 text-brand" />
              +421 940 631 268
              <span className="text-steel/80">{t("common.whatsappTelegram")}</span>
            </a>
            <a
              href="tel:380639772323"
              className="flex items-center gap-3 text-primary-foreground hover:text-brand transition-colors text-sm"
            >
              <Phone className="w-4 h-4 shrink-0 text-brand" />
              +38 (063) 977-23-23
              <span className="text-steel/80">{t("common.whatsappTelegram")}</span>
            </a>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
