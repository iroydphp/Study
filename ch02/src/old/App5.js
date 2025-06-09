function App() {
   const type = 'radio'
   const str = 'string'
   const number = 0
   return (
      <>
         <input type="text" value="리액트" disabled={true} />
         <br />
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={true} />
         <br />
         <input type={type} checked={str || number} />
      </>
   )
}
export default App
