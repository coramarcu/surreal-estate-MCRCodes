import "../styles/app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h2>Surreal Estate !</h2>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
