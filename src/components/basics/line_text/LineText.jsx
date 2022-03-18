import styles from "./LineText.module.css";

const LineText = (props) => (
  <div
    className={
      props.extraMargin
        ? `${styles.lineFlex} ${styles.extraBottomMargin}`
        : styles.lineFlex
    }
  >
    <div>
      <hr className={styles.fullLine} />
    </div>
    <div className={styles.lineText}>{props.txt}</div>
    <div>
      <hr className={styles.fullLine} />
    </div>
  </div>
);

export default LineText;
