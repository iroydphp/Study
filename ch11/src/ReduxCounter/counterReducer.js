// initial 객체는 주로 JSON 형태로 생성됨
const initialState = { count: 0 }

// state: 값이 없을때 항상 초기값(initialState)을 반환하도록 설정
// action: dispatch에서 전달해주는 값을 받아오도록 설정
function counterReducer(state = initialState, action) {
   // dispatch({ type: 'INCREMENT' }) 실행 시
   // action = { type : 'INCREMENT' } 로 반환됨
   switch (action.type) {
      case 'increment':
         // ✔ reducer는 항상 불변성을 유지해야 하므로 늘 새로운 객체를 반환해야 함
         return { count: state.count + 1 }
      case 'decrement':
         return { count: state.count - 1 }
      default:
         // 맨 처음 로딩 시 action 값이 없으므로 initialState를 반환하도록 아래와 같이 설정
         return state
   }
}

export default counterReducer
