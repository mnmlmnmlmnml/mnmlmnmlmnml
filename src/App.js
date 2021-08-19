import React from "react";
import { Main } from "./pages/Main";
import { Puzzle } from "./pages/Puzzle";
import { Guess } from "./pages/Guess";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Switch>
          <Route path={"/main"} exact component={Main} />
          <Route path={"/puzzle"} exact component={Puzzle} />
          <Route path={"/guess"} exact component={Guess} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
