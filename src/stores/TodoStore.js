import { observable, action, autorun } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = []; //consist of filters and ect.
  @observable todosCopy = []; //consist of all todos without change. use for leftItem and ...
  @observable lastID = 0;
  @observable filter = { All: true, Active: false, Completed: false };

  @action
  addTodo(title) {
    this.todos = this.todosCopy;
    this.todos.push(new TodoModel(this, this.lastID++, title, false));
    this.todosCopy = this.todos;
    this.todosCopy.forEach((t) => {});
  }
  @action
  showAll() {
    this.todos = this.todosCopy;
    this.filter = { All: true, Active: false, Completed: false };
  }
  @action
  showActive() {
    this.todos = this.todosCopy.filter((t) => t.completed === false);
    this.filter = { All: false, Active: true, Completed: false };
  }
  @action
  showCompleted() {
    this.todos = this.todosCopy.filter((t) => t.completed === true);
    this.filter = { All: false, Active: false, Completed: true };
  }
  @action
  clearCompleted() {
    let c = this.todosCopy.filter((t) => t.completed === true);
    c.forEach((t) => t.destroy());
  }
}

const store = new TodoStore();
export default store;
