import { useState } from "react";

import { motion } from "framer-motion";

import projects from "../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { fadeUp } from "./animations";

import {
  useLanguage,
} from "../context/LanguageContext";

import translations from "../data/translations";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const { language } =
    useLanguage();

  const t = translations[language];

  return (
    <motion.div
      className="projects-container"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="projects-header">
        <h2>{t.projectsTitle}</h2>

        <p>
          {t.projectsDescription}
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() =>
              setSelectedProject(project)
            }
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </motion.div>
  );
}