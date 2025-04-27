"use client"

import { useEffect } from "react"
import styles from "./ModalStyles.module.css"

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"

    // Add escape key listener
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)

    // Cleanup
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
