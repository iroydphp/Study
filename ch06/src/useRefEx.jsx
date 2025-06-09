import { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)
   const handleClick = () => {
      // input 요소에 Focus 설정
      inputRef.current.focus()
   }
   return (
      <div>
         <input type="text" ref={inputRef} />
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
