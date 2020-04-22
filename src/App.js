import React, { Component } from "react";
import Entry from "./components/Entry";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <h1>todo</h1>
        <Entry />
        <List />
      </div>
    );
  }
}

export default App;
