import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

function ProductDetails({addToCart}) {
    const { id } = useParams();
    const [product,setProduct]=useState(null);
    const [quantity,setQuantity]=useState(1);
    const navigate = useNavigate();

    useEffect(()=>{
        setProduct(null);
        setQuantity(1);

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[id]);                                       //call the product based on the ip address otherwise it will load the page repeatedly

    if(!product){
        return <h2> Loading Products...</h2>
    }

    const totalPrice = product.price * quantity;

    return (
    <div className=" max-w-5xl mx-auto p-6">
        <Link to="/" className="text-blue-600"> Back to Products </Link>

        <h1 className="text-3xl" font-bold mt-6>{product.title}</h1>

        <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-contain"/>
        <p>{product.description}</p>
        <h2 className="text-xl font-bold mt-4">Price: ${product.price}</h2>

        <div className="flex items-center gap-4 mt-4">
            <button onClick={()=>setQuantity(quantity-1)}
            className="bg-gray-200 px-4 py-2"> - </button>

            <span>{quantity}</span>
            <button onClick={()=>setQuantity(quantity+1)}
            className="bg-gray-200 px-4 py-2"> + </button>

        </div>

        <h2 className="text-xl font-bold mt-4">Total:${totalPrice.toFixed(2)}</h2>

        <button onClick={() =>{addToCart(product, quantity); navigate("/cart")}}
        className="bg-orange-600 text-white px-6 py-3 mt-4 rounded">Add to Cart</button>
    </div>
    );
}

export default ProductDetails;