import { idGenerator } from "../helpers/randID";
import { ADD_TODO } from "../constants/constants";

export const addTodo = text => ({
  type: ADD_TODO,
  text: text,
  id: idGenerator()
});
