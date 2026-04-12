import "./Card.css"
import { Link } from "react-router-dom"

function Card({id, name}) {
  return (
    <Link to={`/product/${id}`} style={{textDecoration: "none", color: "black"}}>
      <div className="card-container">
        <h2 className="card-title">{name}</h2>
      </div>
    </Link>
  );
}

export default Card;