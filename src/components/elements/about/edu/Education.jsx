import styles from "./Education.module.css";

const Education = (props) => {
  return (
    <div
      className={
        props.data.formal
          ? `${styles.eduWrapper} ${styles.eduInversed}`
          : styles.eduWrapper
      }
    >
      <h3 className={styles.eduTitle}>{props.data.title}</h3>
      <div className={styles.eduContent}>
        <p>
          {props.data.year} - @{props.data.institution}
        </p>
        <a rel="noopener" target="_blank" href={props.data.link}>
          {props.data.linkName}
        </a>
      </div>
    </div>
  );
};

export default Education;
