import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";

@observer
class Footer extends Component {
  render() {
    if (TodoStore.todosCopy.length == 0) {
      return null; //if no todos, no footer :)
    }
    return (
      <footer className="footer">
        <div className="todo-count">
          <strong>
            {TodoStore.todosCopy.filter((t) => t.completed === false).length}{" "}
            item left
          </strong>
        </div>
        <ul className="filters">
          <li onClick={() => TodoStore.showAll()}>
            <a className={TodoStore.filter.All ? "selected" : ""}>All</a>
          </li>
          <li onClick={() => TodoStore.showActive()}>
            <a className={TodoStore.filter.Active ? "selected" : ""}>Active</a>
          </li>
          <li onClick={() => TodoStore.showCompleted()}>
            <a className={TodoStore.filter.Completed ? "selected" : ""}>
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => TodoStore.clearCompleted()}
        >
          Clear Completed
        </button>
      </footer>
    );
  }
}

export default Footer;
