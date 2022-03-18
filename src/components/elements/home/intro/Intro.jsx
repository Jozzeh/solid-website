import styles from "./Intro.module.css";

const Intro = () => (
  <>
    <h2 className={styles.homeIntroHeading}>Where do I use JavaScript?</h2>
    <div className={styles.homeIntro}>
      <div
        className={`${styles.homeIntroContent} ${styles.panel} ${styles.homeIntroLeft}`}
      >
        <div className={styles.homeIntroTitle}>Server</div>
        <div className={styles.homeIntroList}>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>Adonis</li>
            <li>PM2</li>
            <li>RTC / Sockets</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.homeIntroContent} ${styles.panel} ${styles.homeIntroMid}`}
      >
        <div className={styles.homeIntroTitle}>Browser</div>
        <div className={styles.homeIntroList}>
          <ul>
            <li>Native JavaScript</li>
            <li>EcmaScript (ES6)</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Redux</li>
            <li>Micro front-ends</li>
            <li>Service Workers</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.homeIntroContent} ${styles.panel} ${styles.homeIntroRight}`}
      >
        <div className={styles.homeIntroTitle}>Desktop / Mobile</div>
        <div className={styles.homeIntroList}>
          <ul>
            <li>React Native</li>
            <li>Electron</li>
            <li>Node-Red</li>
            <li>CLI tools</li>
            <li>Proton native</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Intro;
