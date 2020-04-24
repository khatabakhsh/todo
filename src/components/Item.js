import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Item extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={() => todo.destroy()} />
        </div>
      </li>
    );
  }
}

export default Item;
