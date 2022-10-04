import React from "react";

import styles from "./AppHeaderContent.module.scss";

export default function AppHeader() {
  return (
    <div className={styles.header}>
      <div className="title">NightlyHerb Blog</div>
      <nav>
        <a>Posts</a>
        <a>Tags</a>
      </nav>
    </div>
  );
}
