import { createSignal, For, onMount } from "solid-js";
import Skills from "./Skills";

import styles from "./SkillsRoles.module.css";

const SkillsRoles = () => {
  const [data, setData] = createSignal([]);
  onMount(async () => {
    const response = await fetch("/data/cv/skills.json");
    const result = await response.json();
    setData(result.data);
  });

  return (
    <div id="aboutSkills">
      <h2 className={styles.aboutSkillsTitle}>Skills & roles</h2>
      <div id="aboutSkillsText">
        <For each={data()} fallback={<p>Loading...</p>}>{ row =>
          <Skills data={row} />
        }</For>
      </div>
    </div>
  );
};

export default SkillsRoles;
