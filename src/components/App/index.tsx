import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Cases } from "../Cases";
import { PageNotFound } from "../PageNotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Cases} />
        <Route exact path="/results" component={Cases} />
        <Route exact path="/pagenotfound" component={PageNotFound} />
        <Redirect to={"pagenotfound"} />
      </Switch>
    </BrowserRouter>
  );
};
