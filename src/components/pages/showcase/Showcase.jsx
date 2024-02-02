import { MetaProvider, Title, Meta } from "solid-meta";
import styles from "./Showcase.module.css";

const Showcase = () => (
  <div>
    <MetaProvider>
      <Title>Showcase reel of trippy development - Jos De Berdt</Title>
      <Meta
        name="description"
        content="Belgian frontend developer specialised in web and hybrid mobile app development... Jos De Berdt"
      />
      <Meta
        property="og:title"
        content="Frontend & hybrid mobile developer - Jos De Berdt"
      />
      <Meta
        property="og:description"
        content="Belgian frontend developer specialised in web and hybrid mobile app development... Jos De Berdt"
      />
    </MetaProvider>
    <div class={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/u8ccGjar4Es?autoplay=1&mute=1"
        allow="autoplay"
      ></iframe>
    </div>
  </div>
);

export default Showcase;
