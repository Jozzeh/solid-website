import styles from "./ArchiveArticle.module.css";

const ArchiveArticle = props => (
  <div className={`${styles.blogEntry} ${styles.extraBottomMargin}`}>
    <div
      className={styles.blogEntryImage}
    >
      <img src={props.data.image} alt={"Image of the article - " + props.data.title} />
    </div>
    <div className={styles.blogEntryTextWrap}>
        <div className={styles.blogEntryText}>
          <h2 className={styles.blogEntryTitle}><a href={"/blog/" + props.data.handle}>{props.data.title}</a></h2>
          <div className={styles.blogEntryDescription}><a href={"/blog/" + props.data.handle}>{props.data.intro}</a></div>
        </div>
        <div className={styles.blogEntryDate}><time dateTime={props.data.pubdate}>{props.data.pubdate}</time></div>
    </div>
  </div>
);

export default ArchiveArticle;
