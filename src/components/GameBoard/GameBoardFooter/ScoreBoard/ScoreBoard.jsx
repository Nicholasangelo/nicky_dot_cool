import styles from './ScoreBoardStyles.module.css'
;
const ScoreBoard = ({ data }) => {
  const libraryData = data?.filter((d) => d.table === 'library');
  const languageData = data?.filter((d) => d.table === 'language');
  const otherData = data?.filter((d) => d.table === 'other');

  return (
    <div className={styles.wrapper}>
    <header className={styles.header}>
      <h3>Smash logos to log logo data</h3>
    </header>
    <section className={styles.section}>
      <div>{languageData.map((ld) => <span key={`lang-${ld.name}`}>{ld.name}</span>)}</div>
      <div>{libraryData.map((lbd) => <span key={`lib-${lbd.name}`}>{lbd.name}</span>)}</div>
      <div>{otherData.map((od) => <span key={`other-${od.name}`}>{od.name}</span>)}</div>
    </section>
    </div>
  )
};
export default ScoreBoard;
