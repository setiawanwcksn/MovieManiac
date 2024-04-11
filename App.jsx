import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Routings from "./Routings";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routings />
      </main>
    </div>
  );
};

export default App;
