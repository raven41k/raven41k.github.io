import { ADD_ITEM, TOGGLE_TODO } from '../constants'
let nextTodoId = 0
export function addComment(label) {
   return {
     type: ADD_ITEM,
     id: nextTodoId++,
     label
   }
 }

 export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});