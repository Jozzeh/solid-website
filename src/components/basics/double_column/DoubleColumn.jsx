import styles from "./DoubleColumn.module.css";

const DoubleColumn = (props) => (
  <div className={`${styles.flexContainer} ${styles.flexContainerPerc}`}>
    <div
      className={
        props.columnClass
          ? `${styles.leftColumn} ${styles[props.columnClass]}`
          : styles.leftColumn
      }
    >
      {props.children[0]}
    </div>
    <div
      className={
        props.flexEnd ? `${styles.rightColumn} ${styles.flexEnd}` : styles.rightColumn
      }
    >
      {props.children[1]}
    </div>
  </div>
);

export default DoubleColumn;
