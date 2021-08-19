import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        Главная
      </Link>
      <Link className={styles.link} to="/puzzle">
        Загадки
      </Link>
      <Link className={styles.link} to="/guess">
        Угадайка
      </Link>
    </div>
  );
}
