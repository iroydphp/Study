import { createStore } from 'redux'
// export default로 내보내는 reducer는 {중괄호}를 사용하지 않고 그대로 사용
import counterReducer from './counterReducer'

const store = createStore(counterReducer)

export default store
