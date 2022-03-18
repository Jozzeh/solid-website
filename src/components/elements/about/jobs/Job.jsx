import { For } from "solid-js";
import styles from "./Job.module.css";

const Job = (props) => {
  if (props.data) {
    return (
      <div className={styles.jobsWrapper}>
        <div className={styles.jobsHeader}>
          <div className={styles.jobsYear}>{props.data.year}</div>
          <h3 className={styles.jobsTitle}>{props.data.title}</h3>
          <div className={styles.jobsCompany}>@ {props.data.company}</div>
        </div>
        <div className={styles.jobsContent}>
          <div className={styles.jobsResponsibility}>
            <div className={styles.jobsResponsibilityTitle}>Responsibilities</div>
            <div className={styles.jobsResponsibilityText}>
              <p>{props.data.responsibilities}</p>
            </div>
          </div>
          <div className={styles.jobsTech}>
            <div className={styles.jobsTechTitle}>Tech - Stack</div>
            <div className={styles.jobsTechText}>
              <For each={props.data.tech} fallback={<p>Loading...</p>}>
                {(row) => {
                  return <div className={styles.techstack}>{row}</div>;
                }}
              </For>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Job;
