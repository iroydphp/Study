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

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

/* 

=꿀팁====================================================================================================

<a></a> 태그로 링크를 이동시 페이지가 전체 새로고침되어 모든 DOM 을 리렌더링이 된다. 이를 MPA 방식이라 부름

<Link></Link> 컴포넌트로 이동시 바뀐 페이지의 일부분인 DOM 만 리렌더링이 된다. 이를 SPA 방식이라 부름

리액트(React)는 기본적으로 SPA 방식으로 동작하므로 <Link> 컴포넌트 사용을 추천한다.

========================================================================================================

*/

function App() {
   return (
      <>
         <div>
            <h1>리액트 라우터</h1>
            <ul>
               <li>
                  <NavLink to="/">HOME</NavLink>
                  {/* <Link to="/">Home</Link> */}
               </li>
               <li>
                  <NavLink to="/topics">TOPICS</NavLink>
                  {/* <Link to="/topics">Topics</Link> */}
               </li>
               <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                  {/* <Link to="/contact">Contact</Link> */}
               </li>
            </ul>

            {/* 주소에 따라 어떠한 경로를 보여줄지 정함 */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/topics" element={<Topics />} />
               <Route path="/contact" element={<Contact />} />

               {/* 지정한 경로 외에 다른 경로는 모두 Not Found 를 보여준다. */}
               <Route path="/*" element={'Not Found'} />
            </Routes>
         </div>
      </>
   )
}

export default App
