import styles from '../styles/League.module.css';
import Link from 'next/link';

function Premier({ pl }) {
  const positions = pl.table.response[0].league.standings[0];
  return (
    <div className={styles.container}>
      <main>
        <table className={styles.leagueTable}>
          <thead>
            <tr>
              <th colSpan="3" className={styles.tableTitle}>Premier League</th>
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
        <Link href="/"><a>Home</a></Link>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://leaguetable.playfair.dev/pl');
  const leagueTable = await res.json();
  // Return props
  return {
    props: {
      pl: leagueTable,
    },
  };
}

export default Premier;
