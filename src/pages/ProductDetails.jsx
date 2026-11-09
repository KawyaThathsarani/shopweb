import { useParams, Link } from "react-router";

function ProductDetails() {
    const { id } = useParams();

    return (
        <div style={{ padding: "30px" }}>
            <h1>Product Details Page</h1>

            <h2>Product ID: {id}</h2>

        <Link to="/">Back to Products</Link>
    </div>
    );
}

export default ProductDetails;