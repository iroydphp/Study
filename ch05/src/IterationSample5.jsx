import { useState } from 'react'

function IterationSample() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   // name 객체의 text만 출력하도록 수정, key는 id 사용
   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   ))

   const [inputText, setInputText] = useState('')
   const [nextid, setNextId] = useState(5)
   const onChange = (e) => setInputText(e.target.value)

   const onClick = () => {
      const nextNames = names.concat({
         id: nextid,
         text: inputText,
      })

      setNames(nextNames)
      setNextId(nextid + 1)
      setInputText('') // 입력 후 input 초기화
   }

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample
