import Education from "./Education";
import styles from "./Educations.module.css";
import { createSignal, For, onMount } from "solid-js";

const Educations = () => {
  const [data, setData] = createSignal([]);
  onMount(async () => {
    const response = await fetch("/data/cv/edu.json");
    const result = await response.json();
    setData(result.data);
  });

  return (
    <div className={styles.aboutEdu}>
      <h2 className={styles.aboutEduTitle}>
        Education{" "}
        <span className={`${styles.small} ${styles.grey}`}>
          {" "}
          *outside of learning every day
        </span>
      </h2>
      <div className={styles.aboutEduText}>
        <For each={data()} fallback={<p>Loading...</p>}>
          {(row) => {
            return <Education data={row} />;
          }}
        </For>
      </div>
    </div>
  );
};

export default Educations;
