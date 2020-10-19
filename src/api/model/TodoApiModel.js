class TodoApiModel{
    todoNum=0;
    title="";
    contents="";
    startDate="";
    endDate="";

    constructor(todo){
        this.todoNum = todo.todoNum;
        this.title = todo.title;
        this.contents = todo.contents;

        const date = todo.startDate ? todo.startDate : new Date();
        const dateE = todo.endDate ? todo.endDate : new Date();
        this.startDate = date.getFullYear()+"-"
                        +(date.getMonth()+1)+"-"
                        +date.getDate()+" " 
                        +date.getHours()+":"
                        +date.getMinutes();
        this.endDate = dateE.getFullYear()+"-"
                        +(dateE.getMonth()+1)+"-"
                        +dateE.getDate()+" " 
                        +dateE.getHours()+":"
                        +dateE.getMinutes();
    }

}

export default TodoApiModel;