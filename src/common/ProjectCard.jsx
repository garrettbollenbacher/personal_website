import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

function ProjectCard({ icon, link, h3, p }) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  icon: PropTypes.element,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
