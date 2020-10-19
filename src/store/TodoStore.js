import { observable, computed, action } from "mobx";
import TodoApiModel from "../api/model/TodoApiModel";
import TodoApi from "../api/TodoApi";

//1.Mobx Store 클래서 선언
class TodoStore {
  
  todoApi = new TodoApi();
  //2.관리해야하는 state객체 @observable 선언 및 초기화
  @observable
  todos = [];  

  @observable
  todo = {};

  @observable
  errorMessage="";

  //3.state 데이터 리턴 - @computed get로 함수 구현
  @computed
  get getTodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get getTodos() {
    return this.todos ? this.todos.slice() : [];
  }

  //4.state 데이터 변경 @action 함수 구현
  @action
  setTodoProp(name, value) {
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  }

  @action
  async addTodo() {
     //this.todos.push(this.todo);
    const result = this.todoApi.todoCreate(new TodoApiModel(this.todo));
    if(result == null ) {
      this.errorMessage=`${this.todo.todoNum} CREATE ERROR!`;
      return;
    }
    this.todos = await this.todoApi.todoList();
   }

  @action
  async removeTodo(todoNum) {
    //todos에 id인 todo 삭제
    //this.todos = this.todos.filter((element) => element.todoNum !== todoNum);
    const result = this.todoApi.todoDelete(todoNum);
    this.todo = {};
    if(result == null ){ 
      this.errorMessage=`${todoNum} DELETE ERROR!`;
      return;
    }
    this.todos = await this.todoApi.todoList();
  }

  @action
  async modifyTodo() {
    // //todos에서 local todo.todoNum와 같은 객체 수정
    console.log(this.todo);
    const result = this.todoApi.todoModify(new TodoApiModel(this.todo));
    this.todo = {};
    if(result == null ) {
      this.errorMessage=`${this.todo.todoNum} UPDATE ERROR!`;
      return;
    }
    this.todos = await this.todoApi.todoList();
  }

  @action
  async selectTodo(todoNum) {
    //todos에서 id가 같은 todo객체 변경
    //this.todo = this.todos.find((element) => element.id === id);
    const todoApiModel =  this.todoApi.todoDetail(todoNum);
    todoApiModel ? this.todo ={ ...todoApiModel, 
                 "startDate" : new Date(todoApiModel.startDate),
                 "endDate" : new Date(todoApiModel.endDate)}
                 : this.errorMessage =`${todoNum} NOT FOUND ERROR!`;
  }

  @action
  async selectAll(){
    this.todos = await this.todoApi.todoList();
  }
}

//5.객체 생성해서 export
export default new TodoStore();
