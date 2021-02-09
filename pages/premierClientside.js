import styles from '../styles/League.module.css';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

function getLeagueTable() {
  const { data, error } = useSWR('http://localhost:3001/pl', fetcher);

  return {
    leagueTable: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function Premier() {
  const { leagueTable, isLoading, isError } = getLeagueTable();
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error</div>;
  
  const positions = leagueTable.table.response[0].league.standings[0];

  return (
    <div className={styles.container}>
      <main>
        <table className={styles.leagueTable}>
          <thead>
            <tr>
              <th colSpan="3" className={styles.tableTitle}>
                {leagueTable.table.response[0].league.name}
              </th>
            </tr>
            <tr>
              <th className={styles.tableHeadings}>Pos</th>
              <th className={styles.tableHeadings}>Team</th>
              <th className={styles.tableHeadings}>Points</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr key={position.team.id}>
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

export default Premier;
