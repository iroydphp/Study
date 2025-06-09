import { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   const addItemWithPush = () => {
      const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` }
      // push 대신 새로운 배열을 만들어야 React가 변경을 감지합니다.
      setItems([...items, newItem])
   }
   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
