import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JOB_KEYS = ["job1Title", "job2Title", "job3Title"] as const;

const Vacancies = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const prev = document.title;
    document.title = t("vacancies.pageTitle");
    return () => { document.title = prev; };
  }, [i18n.language, t]);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-navy py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand" />
              <span className="text-brand font-heading font-semibold text-sm uppercase tracking-[0.2em]">
              {t("vacancies.careers")}
            </span>
            </div>
            <h1 className="font-heading font-bold text-primary-foreground text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t("vacancies.title")}
            </h1>
            <p className="text-steel text-lg max-w-2xl">
              {t("vacancies.intro")}
            </p>
          </div>
        </section>

        {/* Job listings */}
        <section className="section-navy py-12 border-t border-navy-light">
          <div className="container mx-auto px-4">
            <div className="space-y-10">
              {JOB_KEYS.map((titleKey, i) => (
                <motion.article
                  key={titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-navy-light bg-navy/40 p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-brand text-xl sm:text-2xl">
                        {t(`vacancies.${titleKey}`)}
                      </h2>
                    </div>
                  </div>
                  <ul className="space-y-2 text-steel text-sm mb-6">
                    <li><strong className="text-primary-foreground">{t("vacancies.workingDay")}:</strong> {t("vacancies.hours8to12")}</li>
                    <li><strong className="text-primary-foreground">{t("vacancies.documents")}:</strong> {t("vacancies.residencePermit")}</li>
                    <li><strong className="text-primary-foreground">{t("vacancies.accommodation")}:</strong> {t("vacancies.freeAccommodation")}</li>
                  </ul>
                  <p className="text-steel text-xs uppercase tracking-wider mb-3">{t("vacancies.contactLabel")}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:421940631268"
                      className="inline-flex items-center gap-2 text-brand hover:underline font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      +421 940-631-268 {t("common.whatsappTelegram")}
                    </a>
                    <a
                      href="mailto:ardservices2022@gmail.com"
                      className="inline-flex items-center gap-2 text-brand hover:underline font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      ardservices2022@gmail.com
                    </a>
                  </div>
                  <p className="text-steel/80 text-sm mt-4">
                    {t("common.applyByEmail")}: <a href="mailto:ardservices2022@gmail.com" className="text-brand hover:underline">ardservices2022@gmail.com</a>
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vacancies;
