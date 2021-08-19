import React, { useState, useReducer } from "react";
import styles from "./index.module.scss";
import { Input, Button } from "../../ui";
import { maybePluralize } from "../../utils";

function reducer(state, action) {
  return { ...state, [action.name]: action.payload };
}

const initialState = {
  userAnswer1: "",
  userAnswer2: "",
  userAnswer3: "",
};

let answers = {
  userAnswer1: "водопровод",
  userAnswer2: "тишина",
  userAnswer3: "ножницы",
};

export function Form() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [score, setScore] = useState(0);
  const [error, setError] = useState({});

  function handleChange(e) {
    dispatch({
      name: e.target.name,
      payload: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    let score = 0;
    let errors = {};
    let arr = Object.keys(answers);
    arr.forEach((key) => {
      if (data[key] === answers[key]) {
        score++;
      } else {
        errors[key] = "Вы ответили неправильно!";
      }
    });

    setScore(score);
    setError(errors);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Игра в загадки</h2>

      <Input
        onChange={handleChange}
        errors={error}
        name="userAnswer1"
        placeholder="Введите отгадку..."
        label="Речка спятила с ума — По домам пошла сама."
      />
      <Input
        errors={error}
        onChange={handleChange}
        name="userAnswer2"
        placeholder="Введите отгадку..."
        label="Не видно ее, и не слышно ее. Но стоит заговорить о ней, как она исчезает."
      />
      <Input
        errors={error}
        onChange={handleChange}
        name="userAnswer3"
        placeholder="Введите отгадку..."
        label="Два конца, два кольца, посередине гвоздик."
      />
      <div className={styles.score}>
        {" "}
        Вы отгадали: {maybePluralize(score, "загад", "ки", "ку", "ок")}
      </div>
      <Button label="Ответить" type="submit" />
    </form>
  );
}
