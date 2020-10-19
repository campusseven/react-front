import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoEditFormView from "../view/TodoEditFormView";

//import generateId from "../IDGenerator";

@inject("todoStore")
@observer
class TodoEditContainer extends Component {
  onSetTodoProp = (name, value) => {
      this.props.todoStore.setTodoProp(name, value);
  };

  onAddTodo = () => {
    //todoStore의 addTodo(todo) 호출
    let todo = this.props.todoStore.todo;
    // todo = { ...todo, id: generateId(5) };
    this.props.todoStore.addTodo(todo);
  };

  onRemoveTodo = () => {
    let todo = this.props.todoStore.todo;
    this.props.todoStore.removeTodo(todo.todoNum);
  };

  onModifyTodo = () => {
    let todo = this.props.todoStore.todo;
    this.props.todoStore.modifyTodo(todo);
  };

  render() {
    const { todo } = this.props.todoStore;
    // const todo = this.props.todoStore; //todo->todoStore
    return (
      <TodoEditFormView
        todo={todo}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onRemoveTodo={this.onRemoveTodo}
        onModifyTodo={this.onModifyTodo}
      />
    );
  }
}

export default TodoEditContainer;
