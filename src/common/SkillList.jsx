import React from "react";
import PropTypes from "prop-types";
import styles from "./SkillList.module.css";

function SkillList({ skill, icon }) {
  return (
    <div className={styles.skillItem}>
      {icon && <img src={icon} alt={`${skill} icon`} className={styles.icon} />}
      <p>{skill}</p>
    </div>
  );
}

SkillList.propTypes = {
  skill: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default SkillList;
