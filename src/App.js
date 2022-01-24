import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        {/* <h2>React Hooks Firestore example</h2> */}
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
