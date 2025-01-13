
import React from "react";
import styles from "./SkillList.module.css";
import checkMarkIcon from "../assets/checkmark-dark.svg";

function SkillList({ skill }) {
  return (
    <div className={styles.skillItem}>
      <img src={checkMarkIcon} alt="checkmark" />
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
