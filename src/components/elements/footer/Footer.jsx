import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      &copy; Jos De Berdt
    </div>
    <div className={styles.links}>
      The code for this website is available on my Github...<br/>
      <a href="https://github.com/Jozzeh/solid-website" rel="noopener" target="_blank">Github</a>
       &nbsp; - &nbsp; 
      <a href="https://www.linkedin.com/in/jos-de-berdt/" rel="noopener" target="_blank">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;