import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import TodoEditContainer from "./container/TodoEditContainer";
import TodoListContainer from "./container/TodoListContainer";
import BookDetailsContainer from "./container/BookDetailsContainer";
import BookListContainer from "./container/BookListContainer";
import { observer } from "mobx-react";
import { Component } from "react";

@observer
class App extends Component {
  render() {
    return (
      <Container>
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
        <Grid columns={2} divided>
          <Grid.Column>
            <BookListContainer />
          </Grid.Column>
          <Grid.Column>
            <BookDetailsContainer />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
