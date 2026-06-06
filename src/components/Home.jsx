import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "./animations";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function Home() {
  const { language } =
    useLanguage();

  const t = translations[language];

  return (
    <motion.div
      className="home"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="glass home-card"
        variants={fadeUp}
      >
        <motion.p
          className="home-subtitle"
          variants={fadeUp}
        >
          {t.heroRole}
        </motion.p>

        <motion.h1 variants={fadeUp}>
          Walter
          <br />
          Bardier
        </motion.h1>

        <motion.p
          className="home-description"
          variants={fadeUp}
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          className="home-buttons"
          variants={fadeUp}
        >
          <a
            href="#projects"
            className="primary-button"
          >
            {t.viewProjects}
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            {t.contactMe}
          </a>

          <a
            href="https://github.com/walterbardier"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/walterbardier/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}