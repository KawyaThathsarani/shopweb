import { Link } from "react-router";

function Product(props) {
    return (
        <div className="product-card">

        <img
            src={props.image}
            alt={props.name}
        />

        <h3>{props.name}</h3>

        <p>{props.category}</p>

        <h3>${props.price}</h3>

        <Link to={`/products/${props.id}`}>
            View Product
        </Link>

        </div>
    );
}

export default Product;