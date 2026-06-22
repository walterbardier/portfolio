import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

import {
  LuHouse,
  LuUser,
  LuBriefcase,
  LuMail,
} from "react-icons/lu";

export default function Navbar() {
  const {
    language,
    changeLanguage,
  } = useLanguage();

  const t = translations[language];

  return (
    <nav className="navbar">
      <a href="#home">
        <LuHouse />
        <span>{t.navHome}</span>
      </a>

      <a href="#about">
        <LuUser />
        <span>{t.navAbout}</span>
      </a>

      <a href="#projects">
        <LuBriefcase />
        <span>{t.navProjects}</span>
      </a>

      <a href="#contact">
        <LuMail />
        <span>{t.navContact}</span>
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