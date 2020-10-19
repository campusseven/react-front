import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoListView from "../view/TodoListView";

@inject("todoStore")
@observer
class TodoListContainer extends Component {
  
  componentDidMount(){
     const {todoStore} = this.props; 
     if(todoStore){
       todoStore.selectAll();
     }
   }

  onSelectTodo = (todoNum) => {
    this.props.todoStore.selectTodo(todoNum);
  };

  render() {
    const todos = this.props.todoStore.todos;
    return <TodoListView todos={todos} onSelectTodo={this.onSelectTodo} />;
  }
}

export default TodoListContainer;
