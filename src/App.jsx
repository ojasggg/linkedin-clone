import React from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widget from "./Widget";
import store from "./redux/store";
import Login from "./Login";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* Header  */}
        <Header />
        {/* Mid Body */}
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </Provider>
  );
}

export default App;
