import defaultItems from '../items'
import { ADD_ITEM, TOGGLE_TODO } from '../constants'

export default (itemsState = defaultItems, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_ITEM:
      return [
        ...itemsState,
        {
          id: action.id,
          label: action.label,
          done: false
        }
      ]
    case TOGGLE_TODO:
      return itemsState.map(item =>
        (item.id === action.id)
          ? {...item, done: !item.done}
          : item
      )  


    default:
      return itemsState
  }
}