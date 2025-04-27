"use client"

import { useState } from "react"
import styles from "./CardStyles.module.css"
import { Modal } from "../../Modal"

const Card = ({ title, description, image, comicImages = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <div className={styles.imageContainer}>
          <img src={`./csscade${image}` || "/placeholder.svg"} alt={title} className={styles.image} />
          <div className={styles.overlay}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.comicContainer}>
            {comicImages.map((img, index) => (
              <div key={index} className={styles.comicPanel}>
                <img src={`./csscade${img}` || "/placeholder.svg"} alt={`${title} panel ${index + 1}`} />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}

export default Card
