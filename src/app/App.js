import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Past from "./pages/Past";
import How from "./pages/How";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/past-trials" component={Past} />
        <Route path="/how" component={How} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
