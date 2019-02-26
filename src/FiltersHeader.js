import React from "react";

import { Menu, Label } from "semantic-ui-react";

class FiltersHeader extends React.Component {
  render() {
    const filters = this.props.filtersHeader;
    var rows = [];
    for (var property in filters) {
      rows.push(
        <Menu.Item key={filters[property]}>
          {filters[property]}
          <Label color="red" floating>
            22
          </Label>
        </Menu.Item>
      );
    }
    return (
      <Menu horizontal="true" relaxed="true">
        {rows}
      </Menu>
    );
  }
}

export default FiltersHeader;
