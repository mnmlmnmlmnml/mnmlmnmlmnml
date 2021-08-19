import React from "react";
import styles from "./index.module.scss";
import { Header } from "../../features/Header";
import { Form } from "../../features/Form";
import { Body } from "../../features/Body";
import { Footer } from "../../features/Footer";

export function Main() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
