import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <header className="header">
          <h1>ToDo</h1>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </header>
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
      </div>
    );
  }
}

export default App;
