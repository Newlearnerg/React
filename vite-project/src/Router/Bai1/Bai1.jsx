import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import Home from "./Home.jsx"
import About from './About.jsx'
import Contact from "./Contact.jsx"
import ErrorPage from "../Bai2/ErrorPage.jsx"

function Bai1(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>


  )
}

export default Bai1
