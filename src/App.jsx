import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      {/* Header  */}
      <Header />
      {/* Mid Body */}

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />

        {/* Feed Section */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
