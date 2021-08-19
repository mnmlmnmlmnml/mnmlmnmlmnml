import React from "react";
import styles from "./index.module.scss";

export function Input(props) {
  const { onChange, value, placeholder, label, name, errors, type } = props;
  return (
    <label className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        data-error={errors && !!errors[name]}
      />
      {errors && errors[name] && (
        <span className={styles.error}>{errors[name]}</span>
      )}
    </label>
  );
}
