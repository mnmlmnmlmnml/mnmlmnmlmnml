import React from "react";
import styles from "./index.module.scss";
import { Header } from "../../features/Header";
import { Footer } from "../../features/Footer";
import { Form } from "../../features/Form";

export function Puzzle() {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}
