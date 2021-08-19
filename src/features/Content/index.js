import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Input, Button } from "../../ui";

export function Content() {
  const [value, setValue] = useState();
  const [randomNumber, setRandomNumber] = useState(0);
  const [result, setResult] = useState("");
  const [tryCount, setTryCount] = useState(0);

  function handleChange(e) {
    setValue(parseInt(e.target.value));
  }
  useEffect(() => {
    setRandomNumber(parseInt(Math.random() * 100));
  }, []);

  let maxTryCount = 5;

  function handleSubmit(e) {
    e.preventDefault();

    if (value === randomNumber) {
      setResult("Вы угадали!");
    } else if (value > randomNumber) {
      setResult(
        "Вы ввели слишком большое число.Попробуйте еще раз. Введите число от 1 до 100"
      );
    } else if (value < randomNumber) {
      setResult(
        "Вы ввели слишком маленькое  число.Попробуйте еще раз. Введите число от 1 до 100"
      );
    }
    if (tryCount >= maxTryCount) {
      setResult(
        `У вас закончились попытки, правильный ответ: ${randomNumber}. Начните новую игру`
      );
    }
    if (tryCount === maxTryCount) {
      setValue("");
      setTryCount(0);
      return;
    }

    setValue("");
    setTryCount((tryCount) => tryCount + 1);
  }

  const maybePluralize = (
    count,
    noun,
    suffix = "s",
    suffixTwo = "",
    suffixThree
  ) => {
    let suff =
      count === 1
        ? suffixTwo
        : count === 5 || count === 0
        ? suffixThree
        : suffix;
    return `  ${count} ${noun}${suff}`;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Игра угадайка</h2>
      <div className={styles.result}>{result}</div>
      <Input
        onChange={handleChange}
        value={value}
        label="Угадайте число от 0 до 100"
        name="userAnswers"
        type="number"
        placeholder="Введите число"
      />
      <div className={styles.try}>
        У вас осталось:
        {maybePluralize(maxTryCount - tryCount, "попыт", "ки", "ка", "ок")}
      </div>
      <Button label="Ответить" />
    </form>
  );
}
