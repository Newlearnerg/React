import { useNavigate } from "react-router-dom"
import "./ProductDetail.css"
function ProductDetail(){
    const navigate = useNavigate();
    return(
        <div className="btn-container">
            <h1>Product Detail</h1>
            <button className="btn-buy" onClick={() => navigate("/product-detail/success")}>Mua hàng</button>
        </div>
    )
}
export default ProductDetail;