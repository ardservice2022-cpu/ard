import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks: { key: string; href: string }[] = [
  { key: "service", href: "/#services" },
  { key: "portfolio", href: "/#portfolio" },
  { key: "partners", href: "/#partners" },
  { key: "vacancies", href: "/vacancies" },
  { key: "contacts", href: "/#contacts" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [languageDropdownOpenDesktop, setLanguageDropdownOpenDesktop] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownDesktopRef = useRef<HTMLDivElement>(null);
  const isVacancies = location.pathname === "/vacancies";
  const useSolidBg = scrolled || isVacancies;
  const languages = ["en", "ru", "sk"] as const;
  const languageLabels: Record<string, string> = { en: "EN", ru: "RU", sk: "SK" };
  const currentLng = (() => {
    const l = (i18n.language?.slice(0, 2) || "en") as (typeof languages)[number];
    return languages.includes(l) ? l : "en";
  })();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) setLanguageDropdownOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!languageDropdownOpen) return;
    const close = (e: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(e.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };
    const id = setTimeout(() => document.addEventListener("click", close), 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("click", close);
    };
  }, [languageDropdownOpen]);

  useEffect(() => {
    if (!languageDropdownOpenDesktop) return;
    const close = (e: MouseEvent) => {
      if (languageDropdownDesktopRef.current && !languageDropdownDesktopRef.current.contains(e.target as Node)) {
        setLanguageDropdownOpenDesktop(false);
      }
    };
    const id = setTimeout(() => document.addEventListener("click", close), 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("click", close);
    };
  }, [languageDropdownOpenDesktop]);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string }) => {
    setIsOpen(false);
    if (link.href.startsWith("/#")) {
      e.preventDefault();
      const id = link.href.replace("/#", "");
      const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      if (location.pathname !== "/") {
        navigate(link.href);
        setTimeout(scroll, 400);
      } else {
        setTimeout(scroll, 300);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidBg ? "bg-navy-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo – ard_logo.png */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <img
            src="/ard_logo.png"
            alt={t("header.logoAlt")}
            className="h-9 sm:h-11 w-auto object-contain shrink-0"
          />
          <div className="min-w-0">
            <span className="font-heading font-bold text-primary-foreground text-sm sm:text-lg tracking-wide block truncate">
              {t("header.ardService")}
            </span>
            <span className="block text-steel text-[9px] sm:text-[10px] uppercase tracking-[0.2em] truncate">
              {t("header.afloatRepairDivision")}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-steel hover:text-primary-foreground text-sm font-medium transition-colors uppercase tracking-wider"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        {/* Language + Phones + Mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop: language dropdown */}
            <div ref={languageDropdownDesktopRef} className="relative">
              <button
                type="button"
                onClick={() => setLanguageDropdownOpenDesktop((o) => !o)}
                className="flex items-center gap-1.5 rounded-md border border-navy-light bg-navy/50 px-3 py-2 text-steel hover:text-primary-foreground text-sm font-medium transition-colors"
                aria-expanded={languageDropdownOpenDesktop}
                aria-haspopup="listbox"
                aria-label="Select language"
              >
                <span>{languageLabels[currentLng]}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${languageDropdownOpenDesktop ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {languageDropdownOpenDesktop && (
                  <motion.ul
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    role="listbox"
                    className="absolute right-0 top-full mt-1 min-w-[4rem] rounded-md border border-navy-light bg-navy-dark py-1 shadow-xl z-50"
                  >
                    {languages.map((lng) => (
                      <li key={lng}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={currentLng === lng}
                          onClick={() => {
                            i18n.changeLanguage(lng);
                            setLanguageDropdownOpenDesktop(false);
                          }}
                          className={`block w-full text-left py-2 px-3 text-sm font-medium transition-colors ${
                            currentLng === lng
                              ? "bg-brand text-primary-foreground"
                              : "text-steel hover:text-primary-foreground hover:bg-navy-light/50"
                          }`}
                        >
                          {languageLabels[lng]}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          <div className="flex flex-col items-end gap-0.5 text-sm">
            <a
              href="tel:421947915304"
              className="text-steel hover:text-primary-foreground transition-colors"
            >
              +421 947-915-304 <span className="text-steel/70">{t("common.whatsappTelegram")}</span>
            </a>
            <a
              href="tel:421940631268"
              className="text-steel hover:text-primary-foreground transition-colors"
            >
              +421 940-631-268 <span className="text-steel/70">{t("common.whatsappTelegram")}</span>
            </a>
          </div>
          </div>
          {/* Mobile: language dropdown in header (separate from burger) */}
          <div ref={languageDropdownRef} className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setLanguageDropdownOpen((o) => !o)}
              className="flex items-center gap-1 rounded-md border border-navy-light bg-navy/50 px-3 py-2 text-primary-foreground text-sm font-medium"
              aria-expanded={languageDropdownOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <span>{languageLabels[currentLng]}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {languageDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  role="listbox"
                  className="absolute right-0 top-full mt-1 min-w-[4rem] rounded-md border border-navy-light bg-navy-dark py-1 shadow-xl"
                >
                  {languages.map((lng) => (
                    <li key={lng}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={currentLng === lng}
                        onClick={() => {
                          i18n.changeLanguage(lng);
                          setLanguageDropdownOpen(false);
                        }}
                        className={`block w-full text-left py-2 px-3 text-sm font-medium transition-colors ${
                          currentLng === lng
                            ? "bg-brand text-primary-foreground"
                            : "text-steel hover:text-primary-foreground hover:bg-navy-light/50"
                        }`}
                      >
                        {languageLabels[lng]}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-navy-dark/98 backdrop-blur-md overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link)}
                  className="text-steel hover:text-primary-foreground text-base font-medium transition-colors uppercase tracking-wider py-2 border-b border-navy-light"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <a
                href="tel:421947915304"
                className="flex items-center gap-2 text-brand text-base font-semibold"
              >
                <Phone className="w-5 h-5" />
                +421 947-915-304 {t("common.whatsappTelegram")}
              </a>
              <a
                href="tel:421940631268"
                className="flex items-center gap-2 text-brand text-base font-semibold"
              >
                <Phone className="w-5 h-5" />
                +421 940-631-268 {t("common.whatsappTelegram")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
