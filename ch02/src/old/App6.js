function App() {
   // 4. CSS 인라인 스타일 적용
   const name = '리액트'

   // json 객체로 지정, CSS 속성은 카멜표기법 작성, 속성값은 문자열로 작성
   // 주의: 숫자값은 문자열로 작성하지 않음
   // 예: fontSize: '48px' (문자열), padding: 16 (숫자)
   // const style = {
   //    backgroundColor: 'red',
   //    color: 'black',
   //    fontSize: '48px',
   //    padding: 16,
   // }

   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}
export default App
