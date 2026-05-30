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

      {/* <p>
        Frontend developer, UI/UX and graphic designer focused on building modern digital experiences. I enjoy transforming ideas and client needs into functional, creative, and visually refined interfaces that stay true to each brand’s identity.
      </p> */}
      <p>
        Hi, I'm Walter Bardier, a Computer Engineering student from Uruguay with a passion for technology, design, and digital innovation. As a frontend developer, UI/UX enthusiast, and graphic designer, I enjoy transforming ideas and client needs into functional, creative, and visually refined digital experiences. My goal is to build modern interfaces that not only look great but also provide intuitive user experiences while staying true to each brand’s identity.
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}