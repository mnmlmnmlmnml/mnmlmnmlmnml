import React from "react";
import styles from "./index.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <a className={styles.link} href="main">
        Главная
      </a>
      <a className={styles.link} href="puzzle">
        Загадки
      </a>
      <a className={styles.link} href="guess">
        Угадайка
      </a>
    </div>
  );
}
