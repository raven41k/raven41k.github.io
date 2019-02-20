import defaultItems from '../items'
import { DELETE_ARTICLE } from '../constants'

export default (itemsState = defaultItems, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return [
        ...itemsState,
        {
          id: action.id,
          label: action.label,
          done: false
        }
      ]
      


    default:
      return itemsState
  }
}