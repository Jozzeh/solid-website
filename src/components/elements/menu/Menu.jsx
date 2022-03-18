import styles from './Menu.module.css';
import { Link } from "solid-app-router";

const menuContainerStyle = {
  width: "100%"
};

const Menu = () => (
  <div className={styles.menuContainer} style={menuContainerStyle}>
    <div className={styles.logo}>
      <img loading="lazy" src="/assets/imgs/jos-de-berdt-logo.jpg" alt="Logo of Jos De Berdt"/>
    </div>
    <nav className={styles.menu}>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        Who
      </Link>
      <Link href="/blog">
        Blog
      </Link>
    </nav>
  </div>
);

export default Menu;