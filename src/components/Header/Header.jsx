"use client"

import { useState, useEffect, useRef } from "react"
import styles from "./headerStyles.module.css"

import horizLogo from "../../assets/dot_cool_horiz.svg"

const Header = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    // Get the Welcome component's height to determine when to make header sticky
    const getWelcomeHeight = () => {
      const welcomeElement = document.querySelector('[class*="nameContainer"]')
      return welcomeElement ? welcomeElement.offsetHeight : 0
    }

    let welcomeHeight = getWelcomeHeight()
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only make header sticky after scrolling past the Welcome component
          const shouldBeSticky = window.scrollY > welcomeHeight - header.offsetHeight

          if (shouldBeSticky !== isSticky) {
            setIsSticky(shouldBeSticky)
          }

          ticking = false
        })

        ticking = true
      }
    }

    const handleResize = () => {
      welcomeHeight = getWelcomeHeight()
      handleScroll()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isSticky])

  return (
    <header ref={headerRef} className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.imageWrapper}>
        <img alt="Nicky B dot Cool" src={horizLogo || "/placeholder.svg"} />
      </div>
      {children}
    </header>
  )
}

export default Header
