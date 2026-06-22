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

import {
  LuLayoutGrid,
  LuCode,
  LuPenTool,
  LuServer,
} from "react-icons/lu";

import {
  RiApps2Fill,
  RiCodeSSlashFill,
  RiPaletteFill,
  RiDatabase2Fill,
  RiServerFill,
} from "react-icons/ri";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const [filter, setFilter] =
    useState("all");

  const { language } =
    useLanguage();

  const t = translations[language];

  // Lógica de filtrado
  const filteredProjects =
  filter === "all"
    ? projects

    : filter === "frontend"
    ? projects.filter(
        (project) =>
          project.type.en !==
            "UX/UI & Product Design" &&
          !project.fullStack
      )

    : filter === "design"
    ? projects.filter(
        (project) =>
          project.type.en ===
          "UX/UI & Product Design"
      )

    : projects.filter(
        (project) =>
          project.fullStack
      );

  
  return (
    <div
      className="projects-container"
      
    >
      <div className="projects-header">
        <h2>{t.projectsTitle}</h2>

        <p>
          {t.projectsDescription}
        </p>
      </div>

      <div className="projects-filters">
        <button
          className={
            filter === "all"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() =>
            setFilter("all")
          }
        >
          {/* <LuLayoutGrid /> */}
          <RiApps2Fill />

          <span>
            {t.filterAll}
          </span>
        </button>

        <button
          className={
            filter === "frontend"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() =>
            setFilter("frontend")
          }
        >
          {/* <LuCode /> */}
          <RiCodeSSlashFill />

          <span>
            {t.filterFrontend}
          </span>
        </button>

        <button
          className={
            filter === "design"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() =>
            setFilter("design")
          }
        >
          {/* <LuPenTool /> */}
          <RiPaletteFill />

          <span>
            {t.filterDesign}
          </span>
        </button>

        <button
          className={
            filter === "fullstack"
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() =>
            setFilter("fullstack")
          }
        >
          {/* <LuServer /> */}
          <RiDatabase2Fill />
          {/* <RiServerFill /> */}

          <span>
            {t.filterFullStack}
          </span>
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(
          (project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() =>
                setSelectedProject(
                  project
                )
              }
            />
          )
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(
              null
            )
          }
        />
      )}
    </div>
  );
}