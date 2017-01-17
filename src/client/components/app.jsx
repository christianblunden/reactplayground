import React from 'react';
import Footer from './footer'
import AddTodo from '../containers/addtodo'
import VisibleTodoList from '../containers/visibletodolist'

const App = ({params}) => (
<div>
  <AddTodo />
  <VisibleTodoList filter={params.filter || 'all'} />
  <Footer />
</div>
)

export default App
