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
            <b>Привет!</b> Меня зовут <i>Даша</i>. Я совсем недавно начала
            программировать, и уже написала свой первый сайт. На нём вы сможете
            поиграть в игры. Их я написала сама 😊 Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}
