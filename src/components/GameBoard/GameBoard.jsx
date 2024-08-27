import { useState } from 'react';
import { GameBoardHeader } from './GameBoardHeader';
import { GameBoardPlayArea } from './GameBoardPlayArea';
import { GameBoardFooter } from './GameBoardFooter';

import gameStyles from './gameStyles.module.css';

const GameBoard = () => {
  const [tableData, setTableData] = useState([]);
  const logLogo = (name, table) => {
    setTableData((curr) => ([ ...curr, {name: name, table: table}]))
  };

  return (
<div className={gameStyles.wrapper}>
  <GameBoardHeader />
  <GameBoardPlayArea logLogo={logLogo}/>
  <GameBoardFooter data={tableData}/>
  </div>
)
}
  export default GameBoard;
