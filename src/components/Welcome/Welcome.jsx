import styles from './welcomeStyles.module.css';

const Welcome = () => {
  return (
      <div className={styles.nameContainer}>
        <span className={styles.full}>NICKY B</span>
        <span className={styles.dot}>D<span>O</span>T</span>
        <span className={styles.cool}>COOL</span>
      </div>
  )
}

export default Welcome;
