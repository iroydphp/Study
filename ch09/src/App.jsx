import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Go-home.svg/1024px-Go-home.svg.png" alt="" width="200px" height="200px" />
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topics() {
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h1>TOPICS</h1>
         <ul></ul>

         <Routes>
            <Route path="/1" element={'HTML is ...'} />
            <Route path="/2" element={'JS is ...'} />
            <Route path="/3" element={'React is ...'} />

            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

function App() {
   return (
      <>
         <div>
            <h1>리액트 라우터</h1>
            <ul>
               <li>
                  <NavLink to="/">HOME</NavLink>
               </li>
               <li>
                  <NavLink to="/topics">TOPICS</NavLink>
               </li>
               <li>
                  <NavLink to="/contact">CONTACT</NavLink>
               </li>
            </ul>

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/topics/*" element={<Topics />} />

               <Route path="/*" element={'Not Found'} />
            </Routes>
         </div>
      </>
   )
}

export default App
