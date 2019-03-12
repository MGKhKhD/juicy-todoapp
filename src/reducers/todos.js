import { ADD_TODO, filtersHeader } from "../constants/constants";

export const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = state;
      const newTodo = {
        id: action.id,
        todo: action.text,
        category: "",
        status: filtersHeader.active
      };
      newState[`"${action.id}"`] = newTodo;
      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
};
