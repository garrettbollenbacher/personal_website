import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          // src={}
          link="https://github.com/garrettbollenbacher/churchmerch"
          h3="Church Merch"
          p="E-Commerce Platform"
        />
        <ProjectCard
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
        />
      </div>
    </section>
  );
}

export default Projects;
