import Footer from "../../elements/footer/Footer";
import Flex from "../../basics/flex/Flex";
import ArticleList from "../../../../public/data/blog/articles.json";

import { MetaProvider, Title, Meta } from "solid-meta";
import { createSignal, onMount, Show } from "solid-js";
import { useParams } from "solid-app-router";

import styles from "./BlogArticle.module.css";
import LineText from "../../basics/line_text/LineText";
import Article from "../../elements/blog/article/Article";

const BlogArticle = () => {
  const params = useParams();
  const [article, setArticle] = createSignal();
  const [loaded, setLoaded] = createSignal(false);

  onMount(() => {
    ArticleList.data.forEach((element) => {
      if (element.handle === params.id) {
        setArticle(element);
      }
    });
    setLoaded(true);
  });

  return (
    <div>
      <Show
        when={article() !== undefined && loaded()}
      >
        <MetaProvider>
          <Title>{article().meta.title}</Title>
          <Meta name="description" content={article().meta.description} />
          <Meta property="og:title" content={article().meta.title} />
          <Meta property="og:description" content={article().meta.description} />
        </MetaProvider>
        <article>
          <Flex extraContentClass={styles.menuShiv}>
            <h1 className={styles.articleHeading}>{article().title}</h1>
            <LineText
              txt={<time dateTime={article().pubdate}>{article().pubdate}</time>}
            />
          </Flex>

          <Article articleData={article()} />
        </article>
        <Flex>
          <Footer />
        </Flex>
      </Show>
      <Show when={article() === undefined && loaded()}>
        <article>
          <Flex extraContentClass={styles.menuShiv}>
            <h1>404: Article not found</h1>
          </Flex>
        </article>
        <Flex>
          <Footer />
        </Flex>
      </Show>
    </div>
  );
};

export default BlogArticle;
