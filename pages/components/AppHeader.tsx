import React from "react";

import styles from "./AppHeader.module.scss";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className="title">NightlyHerb Blog</div>
      <nav>
        <a>Posts</a>
        <a>Tags</a>
      </nav>
    </header>
  );
}
