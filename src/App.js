import React, { Component } from "react";
import Entry from "./components/Entry";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <h1>todo</h1>
        <Entry />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
