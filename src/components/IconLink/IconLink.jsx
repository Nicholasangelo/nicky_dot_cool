import { iconList } from '../../assets/icons';
import styles from './IconLinkStyles.module.css';

export const IconLink = ({ title, imgSrc, imgAlt, ...props }) => {

return (
  <div className={styles.iconLink}>
    <a href={iconList[imgSrc]?.ref} aria-label={title} {...props} role="link">
      {imgSrc && <img src={iconList[imgSrc]?.src} alt={imgAlt} />}
      <span className={styles.hidden}>{title}</span>
    </a>
  </div>
  )
};
