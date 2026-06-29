import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import education from "../data/education";
import { fadeUp } from "./animations";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

import {
  RiGraduationCapFill,
  RiLayoutGridFill,
  RiRouteFill
} from "react-icons/ri";

export default function Education() {

  const { language } = useLanguage();
  const t = translations[language];

  const [view, setView] = useState("grid");

  const remainder = education.length % 3;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="education-container">

        {/* HEADER */}
        <div className="education-header">
            {/* ROW 1 */}
            <div className="education-header-top">

                {/* COLUMNA 1: TITLE */}
                <div className="education-header-title">
                    <h2>{t.educationTitle}</h2>
                </div>

                {/* COLUMNA 2: SWITCHER */}
                <div className="education-header-actions">
                    <div className="education-switcher">
                        <button
                            className={view === "grid" ? "active" : ""}
                            onClick={() => setView("grid")}
                            aria-label="Grid view"
                        >
                            <RiLayoutGridFill />
                        </button>

                        <button
                            className={view === "timeline" ? "active" : ""}
                            onClick={() => setView("timeline")}
                            aria-label="Timeline view"
                        >
                            <RiRouteFill />
                        </button>
                    </div>
                </div>
            </div>


        </div>

        {/* HEADER BOTTOM */}
        <div className="education-header-bottom">
            <p className="education-description">
                {t.educationDescription}
            </p>
        </div>

      {/* ================= GRID ================= */}
      <AnimatePresence mode="wait">
        {view === "grid" && (
          <motion.div
            className="education-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {education.map((item, index) => {

              let extraClass = "";

              if (remainder === 1 && index === education.length - 1) {
                extraClass = "full";
              }

              if (remainder === 2 && index >= education.length - 2) {
                extraClass = "half";
              }

              return (
                <motion.div
                  key={item.id}
                  className={`education-item ${extraClass}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  onMouseMove={handleMouseMove}
                >
                    <div className="education-spotlight" />

                    <div className="education-icon">
                        <RiGraduationCapFill />
                    </div>

                    <div className="education-content">

                        <h3>{item.name[language]}</h3>
                        
                        <p className="education-institution">{item.institution}</p>

                        <div className="education-footer">
                            {/* si la fecha de inicio y final es igual => muestra una sola */}
                            <span>
                                {item.dateStart === item.dateFinish[language]
                                ? item.dateStart
                                : `${item.dateStart} — ${item.dateFinish[language]}`}
                            </span>
                        </div>

                    </div>

                </motion.div>
              );
            })}

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= TIMELINE ================= */}
      <AnimatePresence mode="wait">
        {view === "timeline" && (
          <motion.div
            className="education-timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {education.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="timeline-item"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="timeline-marker">

                        <div className="timeline-dot">
                            <RiGraduationCapFill />
                        </div>

                        {/* quitamos la última linea con 1 */}
                        {index !== education.length - 1 && (
                            <div className="timeline-line" />
                        )}
                    </div>

                    <div className="timeline-content">

                        <h3>{item.name[language]}</h3>

                        <p className="education-institution">
                            {item.institution}
                        </p>

                        <div className="education-footer">
                            {/* si la fecha de inicio y final es igual => muestra una sola */}
                            <span>
                                {item.dateStart === item.dateFinish[language]
                                ? item.dateStart
                                : `${item.dateStart} — ${item.dateFinish[language]}`}
                            </span>
                        </div>

                    </div>

                </motion.div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}