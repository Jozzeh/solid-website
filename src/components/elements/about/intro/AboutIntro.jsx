import styles from "./AboutIntro.module.css";

const AboutIntro = () => (
  <div className={styles.aboutIntro}>
    <h1 className={styles.aboutIntroTitle}>
      About
    </h1>
    <div className={styles.aboutIntroText}>
      <p>I am a problem-solver that spend several years working in webdevelopment agencies making websites and e-commerce shops. 
        A few years ago, I shifted to big web-applications and I love it. 
        There is nothing greater than going from an idea to a good product... 
        And I feel lucky to be a part in that process.</p>

      <p>You can find me at meetups (virtual and irl) and in schools, where I like to talk about what I have experienced in my job and life as developer.</p>

      <p>In my spare time, I'm a father of 3 lovely daughters but also try to contribute to open source projects as much as possible. 
        When I see some new tech, my hands are itching to try and see what I can create with it.</p>
    </div>
  </div>
);

export default AboutIntro;
