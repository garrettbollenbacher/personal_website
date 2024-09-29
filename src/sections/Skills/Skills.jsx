import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="HTML" />
        <SkillList skill="CSS" />
        <SkillList skill="JavaScript" />
        <SkillList skill="TypeScript" />
        <SkillList skill="React" />
        <SkillList skill="Angular" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Node.js" />
        <SkillList skill="Python" />
        <SkillList skill="Java" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="AWS Solutions Architecture" />
      </div>
    </section>
  );
}

export default Skills;
