import TodoListItem from './TodoListItem'
import './css/TodoList.css'
import { useState } from 'react'

function TodoList({ initialTodos }) {
   const [todos, setTodos] = useState(initialTodos)

   const onRemove = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
   }

   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
         ))}
      </div>
   )
}

export default TodoList
