
import React from "react";
import styles from "./SkillList.module.css";

function SkillList({ skill, icon }) {
  return (
    <div className={styles.skillItem}>
      <img src={icon} alt={`${skill} icon`} className={styles.skillIcon} />
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
