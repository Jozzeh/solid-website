import styles from "./Outro.module.css";

const Outro = () => (
  <div className={styles.homeOutro}>
    <div className={styles.homeOutroTitle}>But wait, there's more...</div>
    <div className={styles.homeOutroText}>
      <p>
        I like JavaScript because of the versatility... but I actually like
        anything front-end related.
      </p>
      <p>
        That includes using HTML & CSS but also on-page SEO, CI/CD pipelines or
        other languages such as Flutter / Dart.
        <br />
        When I hear or read some rant about CSS and how bad it is; I can't find
        myself in the reasoning behind it. I believe CSS is fantastic language.
        <br />
        Call me old school but I like to seperate lay-out from behavior...
      </p>

      <p>
        The reason I'm still in development after all these years?
        <strong>Adaptability</strong>
        <br />
        The development industry is moving at a frantic pace, and developers
        need to keep on learning & adapting... The fast pace is proof of how the
        technology is still in its infancy. I'm happy to be growing with technology.
      </p>
    </div>
  </div>
);

export default Outro;
