import Products from "./Products.jsx"
import ErrorPage from "../Bai2/ErrorPage.jsx"
import ProductDetail from "./ProductDetail.jsx"
import { BrowserRouter , Routes, Route} from "react-router-dom"

function Bai3(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default Bai3;