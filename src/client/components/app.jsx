import React from 'react';
import Footer from './footer'
import AddTodo from '../containers/addtodo'
import VisibleTodoList from '../containers/visibletodolist'
import { VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters

const App = ({params}) => (
<div>
  <AddTodo />
  <VisibleTodoList filter={params.filter || SHOW_ALL} />
  <Footer />
</div>
)

export default App
