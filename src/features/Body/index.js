import React from "react";
import styles from "./index.module.scss";
import img from "./img/foto.jpg";

export function Body() {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        Сайт с играми, который поможет скоротать время !
      </h1>
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="photo"></img>
        <div className={styles.text}>
          <p className={styles.desc}>
            <b>Добрый день.</b> Меня зовут <i>Дарья</i>. Я совсем недавно начала
            программировать, однако уже написала свой первый сайт.
          </p>
          <p className={styles.desc}>
            На этом сайте вы сможете сыграть в несколько игр, которые я
            написала. <b>Веселого время провождения!</b>
          </p>
        </div>
      </div>
    </div>
  );
}
