const MyComponet = ({ name = '길동', job, forNumber, children }) => {
   return (
      <div>
         <p>안녕하세요. 제 이름은 {name} 입니다.</p>
         <p>제 직업은 {job} 입니다.</p>
         <p>제가 좋아하는 숫자는 {forNumber} 입니다.</p>
         <p>children 값은 {children} 입니다.</p>
      </div>
   )
}

export default MyComponet
