import styles from "./Line.module.css";

const Line = (props) => (
  <div className={styles.dottedFlex}>
    <hr
      className={
        props.extraMargin
          ? `${styles.dottedLine} ${styles.extraBottomMargin}`
          : styles.dottedLine
      }
    />
  </div>
);

export default Line;
