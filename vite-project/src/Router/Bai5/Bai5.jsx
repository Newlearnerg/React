import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetail from "./ProductDetail.jsx"
import CheckOut from "./CheckOut.jsx"

function Bai5(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductDetail/>}/>
                <Route path="/product-detail/success" element={<CheckOut/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Bai5