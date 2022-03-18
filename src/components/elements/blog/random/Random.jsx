import RandomList from "../../../../../public/data/blog/random.json";
import { For } from "solid-js";

import styles from "./Random.module.css";

const Random = () => {
  return (
    <div className={styles.blogRandom}>
      <div className={styles.blogRandomHeading}>Random</div>
      <div className={styles.blogRandomText}>
        <For each={RandomList.data} fallback={<p>Loading...</p>}>
          {(row, index) => {
            if (index() <= 7) {
              return (
                <div className={styles.randomList}>
                  <div className={styles.randomListText}>{row.txt}</div>
                  <div className={styles.randomListExtra}>
                    <time dateTime={row.pubdate}>{row.pubdate}</time> - {row.tech}
                  </div>
                </div>
              );
            }
          }}
        </For>
      </div>
    </div>
  );
};

export default Random;
