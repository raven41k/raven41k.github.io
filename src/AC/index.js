import { DELETE_ARTICLE } from '../constants'
let nextTodoId = 0
export function addComment(label) {
   return {
     type: DELETE_ARTICLE,
     id: nextTodoId++,
     label,
     done: true
   }
 }