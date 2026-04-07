import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from "./Home.jsx"
import About from './About.jsx'
import Contact from "./Contact.jsx"

function Bai1(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </BrowserRouter>

    </div>


  )
}

export default Bai1
