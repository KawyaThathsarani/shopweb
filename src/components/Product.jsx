import "./Product.css"

function Product(props){
    return(
        <div className="product-card">
            <img src={props.image} alt={props.name} width="200"/>
            <h3>{props.name}</h3>
           {/* <p>{props.description}</p> 
                <h4>{props.tags}</h4>
           */}
            <p>Brand: {props.brand}</p>
            <p>Price: ${props.price}</p>
            <button>View Product</button>
        </div>
    );
}

export default Product;