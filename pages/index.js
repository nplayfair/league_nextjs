import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Football League Tables</h1>
        <div className={styles.grid}>
          <Link href="/premier">
            <a className={styles.card}>
              <h3>Premier League Table</h3>
            </a>
          </Link>

          <Link href="/champ">
            <a className={styles.card}>
              <h3>Championship Table</h3>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>Copyright &copy; nplayfair 2021</footer>
    </div>
  );
}
