import { For } from "solid-js";
import Flex from "../../../basics/flex/flex";

import styles from "./Article.module.css";

const Article = (props) => {
  const articleData = props.articleData.article;
  return (
    <>
      <For each={articleData} fallback={<p>Loading...</p>}>
        {(piece, i) => {
          if (piece.type === "paragraph") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <p>{piece.data}</p>
              </Flex>
            );
          } else if (piece.type === "strong-paragraph") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <p>
                  <strong>{piece.data}</strong>
                </p>
              </Flex>
            );
          } else if (piece.type === "link") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <a
                  href={piece.data.link}
                  rel="noopener"
                  target="_blank"
                  className={styles.articleLink}
                >
                  {piece.data.text}
                </a>
              </Flex>
            );
          } else if (piece.type === "heading") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <h2 className={styles.articleSubTitle}>{piece.data}</h2>
              </Flex>
            );
          } else if (piece.type === "quote") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <blockquote className={styles.articleQuote}>{piece.data}</blockquote>
              </Flex>
            );
          } else if (piece.type === "image-portrait") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <div className={styles.articleImageWrap}>
                  <div className={styles.articleImageBox}>
                    <img
                      className={styles.articleImagePortrait}
                      src={piece.data.link}
                      alt={piece.data.alt}
                    />
                  </div>
                  <div className={styles.articleImageText}>{piece.data.alt}</div>
                </div>
              </Flex>
            );
          } else if (piece.type === "unordened-list") {
            return (
              <Flex extraContentClass={styles.smallFlexContent}>
                <div className={styles.articleUnordenedList}>
                  <ul>
                    {piece.data.map((listitem, j) => {
                      return <li key={j}>{listitem}</li>;
                    })}
                  </ul>
                </div>
              </Flex>
            );
          } else if (piece.type === "image-gallery") {
            return (
              <Flex>
                <div className={styles.articleImageFlex}>
                  {piece.data.imgs.map((image, j) => {
                    return (
                      <div key={"-" + j} className={styles.articleImageWrapper}>
                        <div
                          className={`${styles.articleImageBox} ${styles.articleImageBoxFlexed}`}
                        >
                          <img
                            className={styles.articleImageFlexed}
                            src={image}
                            alt={piece.data.alt}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.articleImageText}>{piece.data.alt}</div>
              </Flex>
            );
          } else if (piece.type === "image-landscape") {
            return (
              <Flex>
                <div className={styles.articleImageWrap}>
                  <div className={styles.articleImageBox}>
                    <img
                      className={styles.articleImageLandscape}
                      src={piece.data.link}
                      alt={piece.data.alt}
                    />
                  </div>
                  <div className={styles.articleImageText}>{piece.data.alt}</div>
                </div>
              </Flex>
            );
          }
        }}
      </For>
    </>
  );
};

export default Article;
