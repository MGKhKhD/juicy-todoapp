import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";

import { filtersHeader, filtersSubTodo } from "./constants/constants";

import { Grid } from "semantic-ui-react";

const list = {
  filter: filtersHeader.all,
  todos: {
    "1": {
      id: 1,
      todo: "Java",
      category: "",
      status: filtersHeader.active,
      comments: []
    },
    "2": {
      id: 2,
      todo: "React",
      category: "",
      status: filtersHeader.active,
      comments: []
    },
    "3": {
      id: 3,
      todo: "Spring Core",
      category: "",
      status: filtersHeader.active,
      comments: []
    }
  },
  subTodos: {
    "1": {
      id: 1,
      todoId: "1",
      subTodo: "reading docs",
      status: filtersSubTodo.active
    },
    "2": {
      id: 2,
      todoId: "1",
      subTodo: "redoing examples in the docs",
      status: filtersSubTodo.active
    }
  }
};

class App extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <Grid>
        <Grid.Column width={4}>
          <p>Left</p>
        </Grid.Column>
        <Grid.Column width={9}>
          <TodoList todos={todos} />
        </Grid.Column>
        <Grid.Column width={3}>
          <p>Right</p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(App);
