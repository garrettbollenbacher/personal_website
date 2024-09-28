import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/garrettbollenbacher/churchmerch"
          h3="churchmerch.com"
          p="E-Commerce Site"
        />
      </div>
    </section>
  );
}

export default Projects;
