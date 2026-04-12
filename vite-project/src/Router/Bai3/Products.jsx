import Card from "./Card.jsx"
function Products(){
    const products = [
        {id: 1, name: "Samsung"},
        {id: 2, name: "Iphone"},
        {id: 3, name: "Laptop"}
    ]
    return(
        <div style={{display: "flex"}}>
            {products.map((p) => (
                <Card key={p.id} id={p.id} name={p.name} />
            ))}
        </div>
    )
}

export default Products;