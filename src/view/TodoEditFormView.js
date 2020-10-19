import React, { PureComponent } from "react";
import { Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko'; 

class TodoEditFormView extends PureComponent {
  //
  render() {
    //
    const {
      todo,
      onSetTodoProp,
      onAddTodo,
      onRemoveTodo,
      onModifyTodo,
    } = this.props;

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            value={todo && todo.title ? todo.title : ""}
            onChange={(e) => onSetTodoProp("title", e.target.value)}
          />
          <Form.Input
            fluid
            label="Contents"
            placeholder="Contents"
            value={todo && todo.contents ? todo.contents : ""}
            onChange={(e) => onSetTodoProp("contents", e.target.value)}
          />
          <Form.Field>
            <label>StartDate</label>
            <DatePicker
              locale={ko}
              showTimeSelect
              selected={todo && todo.startDate ? todo.startDate : null}
              dateFormat="yyyy-MM-dd hh:mm"
              timeFormat="hh:mm"
              timeIntervals={15}
              onChange={(startDate) => onSetTodoProp("startDate", startDate)}
            />
          </Form.Field>
          <Form.Field>
            <label>EndDate</label>
            <DatePicker
              showTimeSelect
              selected={todo && todo.endDate ? todo.endDate : null}
              dateFormat="yyyy-MM-dd hh:mm"
              timeFormat="hh:mm"
              timeIntervals={15}
              onChange={(endDate) => onSetTodoProp("endDate", endDate)}
            />
          </Form.Field>
        </Form.Group>
        <Button primary onClick={onAddTodo}>
          Add
        </Button>
        <Button primary onClick={onRemoveTodo}>
          Remove
        </Button>
        <Button primary onClick={onModifyTodo}>
          Modify
        </Button>
      </Form>
    );
  }
}

export default TodoEditFormView;
