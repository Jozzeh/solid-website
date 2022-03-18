import { For } from "solid-js";
import blogJson from "../../../../../public/data/blog/list.json";
import ArchiveArticle from "./ArchiveArticle";

import styles from "./Archive.module.css";

const Archive = () => {
  return (
    <div className={styles.blogList}>
      <div className={styles.blogListHeading}>Latest</div>
      <For each={blogJson.data} fallback={<p>Loading...</p>}>
        {(row) => {
          if (row.featured === 0 || !row.featured) {
            return <ArchiveArticle data={row} />;
          }
        }}
      </For>
    </div>
  );
};

export default Archive;
