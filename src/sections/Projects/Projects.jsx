import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import { FaCross } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          icon={
            <a
              href="https://github.com/garrettbollenbacher/churchmerch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCross size={50} className={styles.crossIcon} />
            </a>
          }
          link="https://github.com/garrettbollenbacher/churchmerch"
          h3="churchmerch"
          p="E-Commerce Platform"
        />
        {/* <ProjectCard
          // src={}
          link="https://pointeproperties.com"
          h3="Pointe Properties"
          p="Real Estate Website"
        />
        <ProjectCard
          // src={}
          link="https://edify.com"
          h3="Edify"
          p="Educational Platform"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
