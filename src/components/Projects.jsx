import { useState } from "react";

import { motion } from "framer-motion";

import projects from "../data/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import { fadeUp } from "./animations";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      className="projects-container"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="projects-header">
        <h2>Projects</h2>

        <p>
          A selection of projects focused on clean UI,
          frontend architecture, and user experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  );
}