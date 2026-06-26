import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "./animations";

import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

import { SiUpwork } from "react-icons/si";

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

        {/* Buttons */}
        <motion.div className="home-buttons" variants={fadeUp}>
          {/* View projects */}
          <a
            href="#projects"
            className="primary-button"
          >
            {t.viewProjects}
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="secondary-button"
          >
            {t.contactMe}
          </a>

          {/* Btn Github */}
          <a
            href="https://github.com/walterbardier"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>

          {/* Btn Behance */}
          <a
            href="https://www.behance.net/walterbardier/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaBehance />
          </a>

          {/* Btn Linkedin */}
          <a
            href="https://www.linkedin.com/in/walterbardier/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>

          {/* Btn Upwork */}
          <a
            href="https://www.upwork.com/freelancers/walterbardier"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon upwork-tooltip"
          >
            <SiUpwork />

            {/* Tooltip */}
            <span className="tooltip">
              {t.upWorkDescription}
            </span>
          </a>

        </motion.div>

      </motion.div>

    </motion.div>
  );
}