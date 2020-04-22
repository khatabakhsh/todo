import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <main className="main">
        <ul className="todo-list">
          <li>
            <div className="view">
              <input type="checkbox" className="toggle" value="on" />
              <label>New York</label>
              <button className="destry" />
            </div>
          </li>
          <li className="completed">
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                value="on"
                checked={true}
              />
              <label>New York</label>
              <button className="destry" />
            </div>
          </li>
        </ul>
      </main>
    );
  }
}

export default List;
