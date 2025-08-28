import { IconLink } from '../elements/IconLink';
import styles from './FooterStyles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>© 2024 Nicholas Angelo Batten</p>
          <div className={styles.links}>
            <IconLink 
              title="Email" 
              imgSrc="gmail" 
              imgAlt="Email icon"
            />
            <IconLink 
              title="LinkedIn" 
              imgSrc="linkedin" 
              imgAlt="LinkedIn icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
