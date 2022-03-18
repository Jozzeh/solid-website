import Bloglist from "../../../../../public/data/blog/list.json";
import DoubleColumn from "../../../basics/double_column/DoubleColumn";

import styles from "./Featured.module.css";
import { createSignal, onMount, Show } from "solid-js";

const Featured = () => {
  /* foreach to run through the list only once */
  const [feat1, setFeat1] = createSignal();
  const [feat2, setFeat2] = createSignal();

  onMount(() => {
    Bloglist.data.forEach((element) => {
      if (element.featured === 1) {
        setFeat1(element);
      } else if (element.featured === 2) {
        setFeat2(element);
      }
    });
  });

  return (
    <div className={styles.featured}>
      <div>
        <div className={styles.featuredHeading}>Popular</div>
        <Show when={feat1() !== undefined && feat2() !== undefined} fallback={<div>Loading...</div>}>
          <DoubleColumn columnClass="twoThird">
            <a href={"/blog/" + feat1().handle}>
              <div className={styles.featuredFirst}>
                <img
                  src={feat1().image}
                  alt={"Image of the article - " + feat1().title}
                />
                <div className={styles.featuredText}>
                  <h2 className={styles.featuredTitle}>{feat1().title}</h2>
                  <div className={styles.featuredIntro}>{feat1().intro}</div>
                  <div className={styles.featuredPubDate}>
                    <time dateTime={feat1().pubdate}>{feat1().pubdate}</time>
                  </div>
                </div>
              </div>
            </a>
            <a href={"/blog/" + feat2().handle}>
              <div className={styles.featuredSecond}>
                <img
                  src={feat2().image}
                  alt={"Image of the article - " + feat2().title}
                />
                <div className={styles.featuredText}>
                  <div className={styles.featuredTitle}>{feat2().title}</div>
                  <div className={styles.featuredIntro}>{feat2().intro}</div>
                  <div className={styles.featuredPubDate}>
                    <time dateTime={feat2().pubdate}>{feat2().pubdate}</time>
                  </div>
                </div>
              </div>
            </a>
          </DoubleColumn>
        </Show>
      </div>
    </div>
  );
};

export default Featured;
