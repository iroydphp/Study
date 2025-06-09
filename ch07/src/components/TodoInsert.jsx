import { useCallback } from 'react'
import './css/TodoInsert.css'
import { MdAddCircleOutline } from 'react-icons/md'
import { useState } from 'react'
function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)

   const onSubmit = useCallback(
      (e) => {
         e.preventDefault() // 폼 제출 시 새로고침 방지
         onInsert(value) // 할일을 등록하는 함수 호출
         setValue('') // value 초기화
      },
      [value, onInsert]
   )

   return (
      // onSubmit 이벤트 핸들러를 사용하여 폼 제출 시 onInsert 함수를 호출
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">
            <MdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
