import styles from "./Person.module.css";

const Person = () => (
  <div className={styles.homePerson}>
    <div className={styles.homePersonLeft}>Hi,</div>
    <div className={styles.homePersonRight}>
      <p className={styles.homePersonSmall}>my name is...</p>
      <h1>Jos De Berdt</h1>
      <p>and I'm a</p>
      <h2>front-end developer</h2>
    </div>
  </div>
);

export default Person;
