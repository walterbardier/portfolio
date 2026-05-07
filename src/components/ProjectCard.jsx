import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="project-card glass"
      onClick={onClick}

      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(12px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        y: -10,
        scale: 1.01,
      }}
    >
      <img
        src={project.images[0]}
        alt={project.name}
      />

      <div className="project-content">
        <div className="project-top">
          <h3>{project.name}</h3>

          <span>{project.type}</span>
        </div>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}