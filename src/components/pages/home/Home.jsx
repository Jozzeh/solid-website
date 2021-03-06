import Footer from "../../elements/footer/Footer";
import Hero from "../../elements/home/hero/Hero";
import Intro from "../../elements/home/intro/Intro";
import Outro from "../../elements/home/outro/Outro";
import Person from "../../elements/home/person/Person";
import Flex from "../../basics/flex/Flex";
import styles from "./Home.module.css";

import { MetaProvider, Title, Meta } from "solid-meta";

const Home = () => (
  <div>
    <MetaProvider>
      <Title>Frontend & hybrid mobile developer - Jos De Berdt</Title>
      <Meta
        name="description"
        content="Belgian frontend developer specialised in web and hybrid mobile app development... Jos De Berdt"
      />
      <Meta property="og:title" content="Frontend & hybrid mobile developer - Jos De Berdt" />
      <Meta
        property="og:description"
        content="Belgian frontend developer specialised in web and hybrid mobile app development... Jos De Berdt"
      />
    </MetaProvider>
    <Hero />
    <Flex>
      <Person />
    </Flex>
    <Flex>
      <Intro />
    </Flex>
    <Flex
      extraContentClass={styles.smallFlexContent}
      extraClass={`${styles.greyWrapper} ${styles.extraMargin}`}
    >
      <Outro />
    </Flex>
    <Flex>
      <Footer />
    </Flex>
  </div>
);

export default Home;
