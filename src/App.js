import React from "react";
import { Main } from "./pages/Main";
import { Puzzle } from "./pages/Puzzle";
import { Guess } from "./pages/Guess";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/puzzle" component={Puzzle} />
          <Route path="/guess" component={Guess} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
