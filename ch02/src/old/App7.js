import './App.css'

function App() {
   // 5. CSS 외부 스타일 시트 사용 방법 (import)
   const name = '리액트'
   // class 가 아닌 calssname 속성 사용
   return <div className="react">{name}</div>
   // id 는 기존 tag 속성과 동일하게 사용하나 자주 사용하지 않음
   // <div id="react">{name}</div>
}
export default App
