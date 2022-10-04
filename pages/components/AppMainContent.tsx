import React from "react";
import styles from "./AppMainContent.module.scss";

export default function AppMainContent({ children }: React.PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
