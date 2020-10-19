import React, { PureComponent } from "react";
import { Table } from "semantic-ui-react";

class TodoListView extends PureComponent {
  //
  render() {
    //
    const { todos, onSelectTodo } = this.props;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Contents</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array.isArray(todos) && todos.length ? (
            todos.map((todo) => {
              return (
                <Table.Row key={todo.todoNum} onClick={() => onSelectTodo(todo.todoNum)}>
                  <Table.Cell>{todo.title}</Table.Cell>
                  <Table.Cell>{todo.contents}</Table.Cell>
                  <Table.Cell>
                    {todo.startDate}
                  </Table.Cell>
                  <Table.Cell>
                    {todo.endDate}
                  </Table.Cell>
                </Table.Row>
              );
            })
          ) : (
            <Table.Row>
              <Table.Cell>Empty</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default TodoListView;
