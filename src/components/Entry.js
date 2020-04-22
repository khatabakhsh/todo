import React, { Component } from "react";

class Entry extends Component {
  render() {
    return (
      <header className="header">
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Entry;
