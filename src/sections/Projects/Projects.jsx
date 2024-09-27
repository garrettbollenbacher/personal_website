import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <a href="https://github.com/garrettbollenbacher/churchmerch">
          <img className="hover" src={viberr} alt="churchmerch logo" />
          <h3>churchmerch.com</h3>
          <p>E-Commerce Site</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
