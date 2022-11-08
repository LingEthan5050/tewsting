import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|index)">
          <Index {...indexData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const indexData = {
    bg: "/img/bg@1x.png",
    theFutureOfCryptoTrading: "The future of crypto-trading",
    theCryptoTrading: <React.Fragment>The <br />crypto trading, the fibre of traders</React.Fragment>,
    nextGen: "next gen",
    spanText1: "Enjoy better rates when you trade your bitcoin with",
    spanText2: " ",
    spanText3: "waves",
    waves: "waves",
    services: "Services",
    company: "Company",
    signIn: "Sign in",
    getStarted: "Get Started",
};

