import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'

import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'
// import User from './UseToolkit/User'

function App() {
   return (
      <Provider store={storeUseToolkit}>
         <Counter></Counter>
         {/* <User></User> */}
      </Provider>
   )
   // return (
   //    <Provider store={storeNonToolkit}>
   //       {/* Use a different name if you want to import both Counters */}
   //       {/* <CounterNonToolkit></CounterNonToolkit> */}
   //    </Provider>
   // )
}

export default App
