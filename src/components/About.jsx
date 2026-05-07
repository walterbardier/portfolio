import { motion } from "framer-motion";

import { fadeUp } from "./animations";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Figma",
    "UI/UX",
    "Framer Motion",
    "Vite",
  ];

  return (
    <motion.div
    className="about glass"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    >
      <h2>About</h2>

      <p>
        Frontend developer, UI/UX and graphic designer focused on building modern digital experiences. I enjoy transforming ideas and client needs into functional, creative, and visually refined interfaces that stay true to each brand’s identity.
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}