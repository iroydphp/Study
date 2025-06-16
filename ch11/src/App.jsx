import { Provider } from 'react-redux'
import CounterComponent from './ReduxCounter/CounterComponent'
import store from './ReduxCounter/store'

function App() {
   return (
      <Provider store={store}>
         <CounterComponent />
      </Provider>
   )
}

export default App
