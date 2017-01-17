export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY = 'SET_VISIBILITY'

export const VisibilityFilters = {
  SHOW_ALL: 'all',
  SHOW_COMPLETED: 'completed',
  SHOW_ACTIVE: 'active'
}

let nextTodoId = 0
export const addTodo = text => ({ type: ADD_TODO, id: nextTodoId++, text })
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY, filter })
