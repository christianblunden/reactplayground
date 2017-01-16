import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY, VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

const todoReducers = combineReducers({
  todos,
  visibilityFilter
})

export default todoReducers
