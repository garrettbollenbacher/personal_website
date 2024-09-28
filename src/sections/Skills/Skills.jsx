import styles from "./SkillsStyles.modules.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";

function skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <span>
          <img src={checkMarkIcon} alt="Checkmark Icon" />
          <p>HTML</p>
        </span>
      </div>
    </section>
  );
}

export default skills;
