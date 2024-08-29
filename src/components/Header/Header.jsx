import { useState, useEffect, useRef } from 'react';
import styles from './headerStyles.module.css';

import horizLogo from '../../assets/dot_cool_horiz.svg';

const Header = () => {
const [sticky, setSticky] = useState(false);
const headerRef = useRef(null);

  const handleScroll = (offsetTop, height) => {
    if (window.pageYOffset > (offsetTop + height)) {
      setSticky({ isSticky: true, offset: height });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    };
  };

  useEffect(() => {
  if (headerRef.current) {
    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => window.removeEventListener('scroll', handleScroll);
  }
  }, []);

  return (
    <header ref={headerRef} style={{ marginTop: sticky.offset }} className={`${styles.header} ${sticky?.isSticky && styles.sticky}`}>
      <img alt="Nicky B dot Cool" src={horizLogo} />
    </header>
  )
};

export default Header;
