import { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   /* 
   nextId를 state로 지정하면 nextId가 변경될 때마다 컴포넌트가 리렌더링되므로
   useRef를 사용하여 nextId를 관리한다
   한 두개의 할 일을 관리할 때는 상관없지만, 할 일이 많아지면
   리렌더링이 잦아져 성능에 영향을 줄 수 있다.
   */

   const nextId = useRef(4)
   // 할 일 추가 함수
   const onInsert = useCallback(
      (text) => {
         // text: 입력한 할일

         // 추가할 객체 생성
         const todo = {
            id: nextId.current,
            text, // text: text 면 한개로 가능
            checked: false,
         }

         // 합친 결과
         setTodos(todos.concat(todo))

         nextId.current += 1 // nextId 증가
      },
      [todos]
   )

   const onRemove = (id) => {
      const removedTodos = todos.filter((todo) => todo.id !== id)
      setTodos(removedTodos)
   }

   return (
      <TodoTemplate>
         {/* TodoInsert 컴포넌트에서 할일을 등록하므로 onInsert 함수를 props 로 전달 */}
         <TodoInsert onInsert={onInsert} />
         <TodoList todos={todos} />
      </TodoTemplate>
   )
}

export default App
