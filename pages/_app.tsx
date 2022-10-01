import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import styles from "./_app.module.scss";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NightlyHerb Blog</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.app}>
        <AppHeader />

        <main>
          <Component {...pageProps} />
        </main>

        <AppFooter />
      </div>
    </>
  );
}

export default App;
