import { useState, useEffect } from 'react';

import { FloatingLogoList } from './FloatingLogoList';
import styles from './gameBoardPlayAreaStyles.module.css';

const GameBoardPlayArea = ({ logLogo }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
const [smashClass, setSmashClass] = useState('smash-false');

  useEffect(() => setSmashClass(`smash-${isMouseDown}`), [isMouseDown])
  const handleMouse = (dir) => dir === 'down' ? setIsMouseDown(true) : setIsMouseDown(false);

  return (
    <div className={`${styles.wrapper} ${styles[smashClass]}`} onMouseDown={() => handleMouse('down')} onMouseUp={() => handleMouse('up')}><FloatingLogoList logLogo={logLogo}/></div>
  );
};
  export default GameBoardPlayArea;
