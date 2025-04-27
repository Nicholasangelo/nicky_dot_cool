"use client"

import styles from "./MainLayoutStyles.module.css"

const MainLayout = ({ heroImage, title, children }) => {

  return (
    <div className={styles.mainLayout}>
      {/* <div id="hero-section" className={styles.heroSection}>
        <img src={heroImage || "/placeholder.svg?height=900&width=1600"} alt="Hero" className={styles.heroImage} />
      </div> */}

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>

      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default MainLayout
