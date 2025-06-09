const Type = (props) => {
   const { str, num, bool, arr, json, func } = props
   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumberProps: {num}</p>
         <p>BoolProps: {bool.toString()}</p>
         <p>arrProps: {arr.toString()}</p>
         <p>JSONProps: {JSON.stringify()}</p>
         <p>FunctionProps: {func(1, 2)}</p>
      </div>
   )
}

export default Type
