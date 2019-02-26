import React from "react";
import { Dropdown } from "semantic-ui-react";

const optionsCategories = [
  { key: "page", text: "This Page", value: "page" },
  { key: "org", text: "This Organization", value: "org" },
  { key: "site", text: "Entire Site", value: "site" }
];

class Categories extends React.Component {
  render() {
    return (
      <Dropdown
        button
        basic
        floating
        options={optionsCategories}
        defaultValue="page"
      />
    );
  }
}

export default Categories;
