import styles from '../styles/League.module.css';

function Premier({ leagueTable, positions }) {
  return (
    <div className={styles.container}>
      <main>
        <table className={styles.leagueTable}>
          <thead>
            <tr>
              <th colspan="3" className={styles.tableTitle}>Premier League</th>
            </tr>
            <tr>
              <th className={styles.tableHeadings}>Pos</th>
              <th className={styles.tableHeadings}>Team</th>
              <th className={styles.tableHeadings}>Points</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr>
                <td className={styles.pos}>{position.rank}</td>
                <td>{position.team.name}</td>
                <td className={styles.pts}>{position.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://leaguetable.playfair.dev/pl');
  const leagueTable = await res.json();
  const positions = leagueTable.table.response[0].league.standings[0];

  // Return props
  return {
    props: {
      leagueTable,
      positions,
    },
  };
}

export default Premier;
