import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Cases from "../Cases";
import { Form } from "../Form";
import { PageNotFound } from "../PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/results" component={Cases} />
        <Route exact path="/pagenotfound" component={PageNotFound} />
        <Redirect to={'pagenotfound'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
