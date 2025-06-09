import { use, useState } from 'react'

// State : 컴포넌트 내부에서 바뀔 수 있는 값
/* 
1. state 를 사용하기 위해 useState 선언
const [state 값을 지정할 변수, state값을 바꿀 함수] = useState(초기 State 값 지정)
*/
const Say = () => {
   const [message, setMessage] = useState('초기값')
   const onClickEnter = () => {
      setMessage('안녕하세요.')
   }
   const onClickLeave = () => {
      setMessage('안녕히 가세요.')
   }

   const [color, setColor] = useState('aqua')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            빨강
         </button>
         <button
            onClick={() => {
               setColor('blue')
            }}
         >
            파랑
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            초록
         </button>
      </div>
   )
}

export default Say
