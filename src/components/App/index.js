import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cases from "../Cases";
import { Form } from "../Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/results" component={Cases} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
