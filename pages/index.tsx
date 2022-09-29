import type { NextPage } from 'next'
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NightlyHerb Blog</title>
        <meta name="description" content="NightlyHerb Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>TODO: Add main content</main>

      <footer className={styles.footer}>TODO: add footer</footer>
    </div>
  );
};

export default Home
