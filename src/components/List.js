import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./Item";
import TodoStore from "../stores/TodoStore";

@observer
class List extends Component {
  render() {
    return (
      <main className="main">
        <ul className="todo-list">
          {TodoStore.todos.map((todo) => {
            return <Item todo={todo} />;
          })}
        </ul>
      </main>
    );
  }
}

export default List;
