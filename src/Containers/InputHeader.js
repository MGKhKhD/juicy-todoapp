import React from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionsData";

class InputHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addTodo(this.state.text.trim());
    }
  }

  render() {
    console.log("input header");
    return (
      <Input
        placeholder="What needs to be done..."
        onChange={this.handleChange}
        value={this.state.text}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

const mapDispatchToState = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToState
)(InputHeader);
