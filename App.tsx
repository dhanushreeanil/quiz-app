import React from "react";

import "./App.css";
import Router from "./Components/Router";

const App = () => {
  return (
    <div className="App">
      <h1> QUIZ HUB </h1>
      <hr
        className="divider"
        style={{
          width: "100%",
          margin: "10px",
          backgroundColor: "black",
        }}
      />
      <Router />
    </div>
  );
};

export default App;
