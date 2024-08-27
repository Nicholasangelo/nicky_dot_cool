import { ScoreBoard } from './ScoreBoard';
import styles from './gameBoardFooterStyles.module.css';

const GameBoardFooter = ({ data }) => <div className={styles.wrapper}><ScoreBoard data={data} /></div>

  export default GameBoardFooter;
