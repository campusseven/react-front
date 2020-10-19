import axios from 'axios';

class TodoApi{

    URL="/api/todos/"; //http://localhost:9001/api/todos"

    //todoCreate(todoApiModel):URL POST
    todoCreate(todoApiModel){
        //let todoJson = todo;
        return axios.post(this.URL, todoApiModel)
            .then((response)=>response && response.data || null)
    }

    //todoDetail(todoNum) : URL GET : Todo
    todoDetail(todoNum){
        return axios.get(this.URL+`${todoNum}/`)
            .then((response)=>response && response.data || null);
    }

    //todoList() : URL GET :  [Todo]
    todoList(){
        return axios.get(this.URL)
            .then((response)=>response && response.data || null);
    }

    //todoModify(todoApiModel) : URL Put
    todoModify(todoApiModel){
        return axios.put(this.URL, todoApiModel)
            .then((response)=> response && response.data || null)
    }

    //todoDelete(todoNum) : URL Delete
    todoDelete(todoNum){
        return axios.delete(this.URL+`${todoNum}/`)
            .then((response)=>response && response.data || null);
    }
}
export default TodoApi;