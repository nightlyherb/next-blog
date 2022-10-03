import styles from "./AppFooterContent.module.scss";

export default function AppFooter() {
  return (
    <div className={styles.footer}>
      <div className="copyright">&copy; NightlyHerb 2022</div>
      <nav>Social</nav>
    </div>
  );
}
