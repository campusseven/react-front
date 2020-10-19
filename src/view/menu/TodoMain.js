import React from "react";
import { Grid, Header } from "semantic-ui-react";
import TodoEditContainer from "../../container/TodoEditContainer";
import TodoListContainer from "../../container/TodoListContainer";

function TodoMain() {
  return (
   <Grid columns={1}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h1">일정관리</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TodoEditContainer />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TodoListContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default TodoMain;
