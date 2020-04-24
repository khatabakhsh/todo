import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class Entry extends Component {
  state = {
    value: "",
  };
  enterKey = (event) => {
    if (event.keyCode !== 13 || this.state.value === "") {
      return;
    }
    event.preventDefault();
    TodoStore.addTodo(this.state.value); //value = title of TodoStore
    this.setState({ value: "" });
    TodoStore.showAll();
  };
  render() {
    return (
      <header className="header">
        <input
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
          onKeyDown={(event) => this.enterKey(event)}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Entry;
