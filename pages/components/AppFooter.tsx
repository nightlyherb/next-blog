import styles from "./AppFooter.module.scss";

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className="copyright">&copy; NightlyHerb 2022</div>
      <nav>Social</nav>
    </footer>
  );
}
