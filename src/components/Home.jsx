import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "./animations";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
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
            Frontend Developer & UI/UX Designer
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
            Crafting elegant digital experiences through minimal design,
            modern interfaces, and intentional interactions that prioritize clarity,
            usability, and visual harmony, while expressing the essence of each brand.
        </motion.p>

        <motion.div
            className="home-buttons"
            variants={fadeUp}
        >
            <a href="#projects" className="primary-button">
            View Projects
            </a>

            <a href="#contact" className="secondary-button">
            Contact Me
            </a>

            <a
            href="https://github.com/walterbardier"
            target="_blank"
            className="social-icon"
            >
            <FaGithub />
            </a>

            <a
            href="https://www.linkedin.com/in/walterbardier/"
            target="_blank"
            className="social-icon"
            >
            <FaLinkedinIn />
            </a>
        </motion.div>
        </motion.div>
    </motion.div>
    );
}