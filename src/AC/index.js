import { ADD_ITEM, TOGGLE_TODO } from '../constants'

export const addItem = label => ({
  type: ADD_ITEM,
  id: (Date.now() + Math.random()).toString(),
  label
 });

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});  