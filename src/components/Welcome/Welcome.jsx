import styles from './welcomeStyles.module.css';
import DotCool from '../../assets/dot_cool.svg';
const Welcome = () => {
  return (
    <>
      <div className={styles.nameContainer}>
      <img src={DotCool} />
      </div>
    </>
  )
}

export default Welcome;
