import { Meta, MetaProvider, Title } from "solid-meta";
import DoubleColumn from "../../basics/double_column/DoubleColumn";
import Flex from "../../basics/flex/Flex";
import LineText from "../../basics/line_text/LineText";
import Archive from "../../elements/blog/archive/Archive";
import Featured from "../../elements/blog/featured/Featured";
import Random from "../../elements/blog/random/Random";
import Footer from "../../elements/footer/Footer";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div>
      <MetaProvider>
        <Title>Articles from a front-end dev - Jos De Berdt</Title>
        <Meta
          name="description"
          content="The random thoughts and articles from Jos De Berdt, a front-end webdeveloper with full stack knowledge."
        />
        <Meta
          property="og:title"
          content="Articles from a front-end dev - Jos De Berdt"
        />
        <Meta
          property="og:description"
          content="The random thoughts and articles from Jos De Berdt, a front-end webdeveloper with full stack knowledge."
        />
      </MetaProvider>

      <div
        className={`${styles.greyWrapper} ${styles.greyWrapperNoBottom} ${styles.menuShiv}`}
      >
        <Flex>
          <h1 className={styles.blogIntroHeading}>Article archive</h1>
          <LineText extraMargin={true} txt="in front-end experience" />
          <Featured />
        </Flex>
      </div>

      <Flex>
        <DoubleColumn columnClass="twoThird">
          <Archive />
          <Random />
        </DoubleColumn>
      </Flex>

      <Flex>
        <Footer />
      </Flex>
    </div>
  );
}
