import styles from "./Flex.module.css";

const Flex = (props) => (
  <div
    id={props.extraID ? props.extraID : ""}
    style={props.flexStyle ? props.flexStyle : {}}
    className={
      props.extraClass
        ? `${styles.flexContainer} ${props.extraClass}`
        : styles.flexContainer
    }
  >
    <div
      style={props.contentStyle ? props.contentStyle : {}}
      className={
        props.extraContentClass
          ? `${styles.flexContent} ${props.extraContentClass}`
          : styles.flexContent
      }
    >
      {props.children}
    </div>
  </div>
);

export default Flex;
