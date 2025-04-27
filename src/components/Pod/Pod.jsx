import styles from "./PodStyles.module.css"

const Pod = ({ embedCode }) => {
  return (
    <div className={styles.podcastContainer}>
      <h2 className={styles.podcastTitle}>Latest Episode</h2>
      <div className={styles.podcastWrapper} dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  )
}

export default Pod
