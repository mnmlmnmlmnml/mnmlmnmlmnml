import React from "react";
import styles from "./index.module.scss";
import { Header } from "../../features/Header";
import { Footer } from "../../features/Footer";
import { Content } from "../../features/Content";
export function Guess() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
