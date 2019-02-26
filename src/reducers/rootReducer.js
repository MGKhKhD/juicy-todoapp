import { combineReducers } from "redux";
import { todos } from "./todos";

const rootReducer = combineReducers({
  todos
});

/*
const rootReducer = (state = {}, action) => {
  console.log("in the reducer");
  console.log(state.todos);
  return {
    todos: todos(state.todos, action)
  };
};
*/

export default rootReducer;