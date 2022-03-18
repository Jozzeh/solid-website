import { onMount } from "solid-js";
import styles from "./Hero.module.css";

const Hero = () => {
  onMount(() => {
    let hero = document.getElementById("heroContainer");
    if(typeof hero !== "undefined" && hero !== null){
      //hero exists
      window.onscroll = function() {
        let currentScrollPerc = ((window.scrollY / hero.offsetHeight * 100) / 2);
        if(currentScrollPerc < 11){
          if(currentScrollPerc > 11){
            currentScrollPerc = 0;
          }
          let shiftLeft = currentScrollPerc + "%";
          document.getElementById("heroLeft").style.left = "-" + shiftLeft;
          document.getElementById("heroRight").style.left = shiftLeft;
        }
      }
    }
  })
  return(
  <>
    <div className={styles.heroContainer} id="heroContainer">
      <div className={`${styles.heroContent} ${styles.heroLeft}`} id="heroLeft">
        J
      </div>
      <div className={`${styles.heroContent} ${styles.heroMid}`} id="heroMid">
        o
      </div>
      <div className={`${styles.heroContent} ${styles.heroRight}`} id="heroRight">
        S
      </div>
    </div>
    <div className={styles.heroText}>
      I kinda like JavaScript.
      <br />
      <span className={styles.heroSmaller}>
        (and I hope the name never changes, because my intro just would not make any
        sense)
      </span>
    </div>
  </>
)};

export default Hero;
