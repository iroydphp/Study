import { useState } from 'react'

function IterationSample() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   // name 객체의 text만 출력하도록 수정, key는 id 사용
   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
   return <ul>{nameList}</ul>
}

export default IterationSample
