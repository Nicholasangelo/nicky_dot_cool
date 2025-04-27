import styles from "./NavLinkStyles.module.css"

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  )
}

export default NavLink
