import styles from "./Skills.module.css";

const Skills = ({ data }) => {
  let width = data.proficiency + "%";
  return (
    <div
      title={"Proficiency: " + width}
      className={data.isSkill ? styles.skill : styles.role}
    >
      <div className={styles.skillName}>{data.name}</div>
      <div style={{ width }} className={styles.proficiency}>
        &nbsp;
      </div>
    </div>
  );
};

export default Skills;
