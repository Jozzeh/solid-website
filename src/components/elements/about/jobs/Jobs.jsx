import styles from "./Jobs.module.css";
import Job from "./Job";
import { createSignal, For, onMount } from "solid-js";

const Jobs = () => {
  const [data, setData] = createSignal([]);
  onMount(async () => {
    const response = await fetch("/data/cv/jobs.json");
    const result = await response.json();
    setData(result.data);
  });

  return (
    <div className={styles.extraBottomMargin}>
      <h2 id={styles.aboutJobsTitle}>Career</h2>
      <div>
        <For each={data()} fallback={<p>Loading...</p>}>
          {(row) => {
            return <Job data={row} />;
          }}
        </For>
      </div>
    </div>
  );
};

export default Jobs;
