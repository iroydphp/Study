function App() {
   const name = '리액트'
   const level = '리액트'
   // 2. {} 중괄호를 이용하여 자바스크립트 표현식을 사용 할 수 있음
   // jsx 문법에서는 if문 대신에 삼항연산자를 주로 사용
   return (
      <>
         <h1>{name} 안녕</h1>
         {level === name ? <h1>관리자</h1> : <h2>일반회원</h2>}
      </>
   )
}

export default App
