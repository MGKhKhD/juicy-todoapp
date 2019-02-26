import React from "react";
import FiltersHeader from "./FiltersHeader";
import Categories from "./Categories";
import { Segment, Icon, Label } from "semantic-ui-react";
import { filtersHeader } from "./constants/constants";
import InputHeader from "./Containers/InputHeader";

class MainHeader extends React.Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <InputHeader />
          <Categories />
          <Label>
            <Icon name="tasks" /> 23
          </Label>
        </Segment>
        <Segment>
          <FiltersHeader filtersHeader={filtersHeader} />
        </Segment>
      </Segment.Group>
    );
  }
}

export default MainHeader;
