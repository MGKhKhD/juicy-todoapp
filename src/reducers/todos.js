import { ADD_TODO, filtersHeader } from "../constants/constants";

export const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: action.id,
        todo: action.text,
        category: "",
        status: filtersHeader.active
      };
      state[`"${action.id}"`] = newTodo;
      return state;
    }
    default:
      return state;
  }
};
