import styles from '../styles/League.module.css';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => {
  const positions = res.data.table.response[0].league.standings[0];
  return positions;
});

function Premier() {
  const { data, error } = useSWR('http://localhost:3001/pl', fetcher);

  if (error) return <div>failed to load: {error}</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <main>
        <table className={styles.leagueTable}>
          <thead>
            <tr>
              <th colspan="3" className={styles.tableTitle}>
                Premier League
              </th>
            </tr>
            <tr>
              <th className={styles.tableHeadings}>Pos</th>
              <th className={styles.tableHeadings}>Team</th>
              <th className={styles.tableHeadings}>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((position) => (
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

export default Premier;
