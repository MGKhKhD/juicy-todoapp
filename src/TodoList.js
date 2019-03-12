import React from "react";
import MainHeader from "./MainHeader";
import { SegmentGroup, Item, Segment } from "semantic-ui-react";

const TodoList = ({ todos }) => {
  let rows = [];
  Object.getOwnPropertyNames(todos).forEach(property => {
    rows.push(<li key={property}>{todos[property].todo}</li>);
  });

  return (
    <SegmentGroup>
      <Segment>
        <MainHeader />
      </Segment>
      <Segment>
        <Item.Group divided>
          <ul>{rows}</ul>
        </Item.Group>
      </Segment>
    </SegmentGroup>
  );
};

export default TodoList;
