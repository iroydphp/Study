import { useDispatch, useSelector } from 'react-redux'

function CounterComponent() {
   // dispatch: action 을 reducer로 전달하는 함수
   const dispatch = useDispatch()
   // useSelector: store의 state를 가져오는 함수
   const count = useSelector((state) => state.count)
   return (
      <div>
         <h1>Counter: {count}</h1>
         <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
      </div>
   )
}

export default CounterComponent
