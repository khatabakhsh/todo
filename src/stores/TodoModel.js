import { observable, action } from "mobx";

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, id, title, completed) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }
  @action
  destroy() {
    this.store.todosCopy.remove(this);
    this.store.todos.remove(this);
  }
}
