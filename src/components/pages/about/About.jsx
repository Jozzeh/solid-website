import Footer from "../../elements/footer/Footer";
import Flex from "../../basics/flex/Flex";
import Line from "../../basics/line/Line";
import DoubleColumn from "../../basics/double_column/DoubleColumn";

import styles from "./About.module.css";

import { MetaProvider, Title, Meta } from "solid-meta";
import AboutIntro from "../../elements/about/intro/AboutIntro";
import SkillsRoles from "../../elements/about/skillsroles/SkillsRoles";
import Jobs from "../../elements/about/jobs/Jobs";
import Educations from "../../elements/about/edu/Educations";

const About = () => (
  <div>
    <MetaProvider>
      <Title>Development career - Jos De Berdt</Title>
      <Meta
        name="description"
        content="Read about the career of Jos De Berdt and how he grew from webdeveloper to full stack to front-end developer & architect."
      />
      <Meta property="og:title" content="Development career - Jos De Berdt" />
      <Meta
        property="og:description"
        content="Read about the career of Jos De Berdt and how he grew from webdeveloper to full stack to front-end developer & architect."
      />
    </MetaProvider>
    {/* Intro */}
    <Flex extraContentClass={styles.menuShiv}>
      <DoubleColumn flexEnd={true} columnClass="twoThird">
        <AboutIntro />
        <div className={styles.imageDrop}>
          <img
            loading="lazy"
            src="/assets/imgs/jos-de-berdt.jpg"
            alt="Jos De Berdt"
          />
        </div>
      </DoubleColumn>
    </Flex>

    {/* Skills & roles */}
    <Flex extraClass={`${styles.greyWrapper} ${styles.extraMargin}`}>
      <SkillsRoles />
    </Flex>

    <Flex>
      <Jobs />
      <Line extraMargin={true} />
      <Educations />
    </Flex>

    <Flex>
      <Footer />
    </Flex>
  </div>
);

export default About;
