// React 에서는 컴포먼트 함수명과 파일명을 동일하게 사용하고 항상 대문자로 시작함
// import React from 'react'
import PropTypes from 'prop-types'
import MyComponet from './Mycomponet.jsx'

// const App = () => {
//    return <MyComponet name="길동" job="강사" forNumber={1} children="맑음"></MyComponet>
// }

const App = ({ name = '길동', job, forNumber, children }) => {
   return (
      <MyComponet name={name} job={job} forNumber={forNumber}>
         {children}
      </MyComponet>
   )
}

MyComponet.propTypes = {
   name: PropTypes.string,
   forNumber: PropTypes.number.isRequired,
}
export default App
