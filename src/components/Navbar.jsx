import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function Navbar() {
  const {
    language,
    changeLanguage,
  } = useLanguage();

  const t = translations[language];

  return (
    <nav className="navbar">
      <a href="#home">{t.navHome}</a>

      <a href="#about">{t.navAbout}</a>

      <a href="#projects">
        {t.navProjects}
      </a>

      <a href="#contact">
        {t.navContact}
      </a>

      <div className="language-switcher">
        <button
          className={
            language === "es"
              ? "active"
              : ""
          }
          onClick={() =>
            changeLanguage("es")
          }
        >
          ES
        </button>

        <button
          className={
            language === "en"
              ? "active"
              : ""
          }
          onClick={() =>
            changeLanguage("en")
          }
        >
          EN
        </button>
      </div>
    </nav>
  );
}