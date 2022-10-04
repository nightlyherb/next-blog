import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import styles from "./_app.module.scss";
import AppHeaderContent from "./components/AppHeaderContent";
import AppMainContent from "./components/AppMainContent";
import AppFooterContent from "./components/AppFooterContent";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NightlyHerb Blog</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.app}>
        <header>
          <AppHeaderContent />
        </header>

        <main>
          <AppMainContent>
            <Component {...pageProps} />
          </AppMainContent>
        </main>

        <footer>
          <AppFooterContent />
        </footer>
      </div>
    </>
  );
}

export default App;
