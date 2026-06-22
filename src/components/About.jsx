import { motion } from "framer-motion";

import { fadeUp } from "./animations";

import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function About() {
  const { language } =
    useLanguage();

  const t = translations[language];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    // "Framer Motion",
    // "Vite",
    "Python",
    "PHP",
    "MySQL",
    "Figma",
    "UI/UX",
  ];

  return (
    <motion.div
      className="about glass"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <h2>{t.aboutTitle}</h2>

      <p>{t.aboutText}</p>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}