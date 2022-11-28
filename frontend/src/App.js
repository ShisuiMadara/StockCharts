import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "./components/charts/Chart.jsx"

function App() {

  return (
    <div className="App">
      <h1 className="title">Stocks visualizer</h1>
      <Graph/>
    </div>
  );
}

export default App;