function App() {
   const name = undefined // falsy 값
   return (
      // 3. || 연산자
      // 문자열은 true
      <div>{name || '리액트'}</div>
   )
}
export default App
