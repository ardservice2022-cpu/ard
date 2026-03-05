import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import type { Locale } from "@/i18n";

const languageNames: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  sk: "SK",
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = (i18n.language?.slice(0, 2) || "en") as Locale;
  const effective = ["en", "ru", "sk"].includes(current) ? current : "en";

  return (
    <div className="flex items-center gap-1">
      <Languages className="w-4 h-4 text-steel shrink-0" aria-hidden />
      <div className="flex rounded-md border border-navy-light overflow-hidden">
        {(["en", "ru", "sk"] as const).map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            className={`px-2 py-1 text-xs font-medium transition-colors ${
              effective === lng
                ? "bg-brand text-primary-foreground"
                : "bg-navy/50 text-steel hover:text-primary-foreground hover:bg-navy-light"
            }`}
            aria-label={`Switch to ${languageNames[lng]}`}
          >
            {languageNames[lng]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
