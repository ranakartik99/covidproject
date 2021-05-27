import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Statewise from "./Statewise";

function Leftpanel() {
  return (
    <div>
      {/* <Router>
        <Link to="">Home1</Link>
        <Link to="/states">States</Link>

        <Route path="" component={Leftpanel} />
        <Route path="/states" component={Statewise} />
      </Router> */}
    </div>
  );
}

export default Leftpanel;
