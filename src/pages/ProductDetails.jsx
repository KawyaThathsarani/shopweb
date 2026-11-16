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
    <div className=" min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl">
            <button className="mt-6 w-18px rounded-xl bg-orange-700 px-6 py-4 font-semibold text-white transition hover:bg-orange-900 disabled:opacity-50">
                <Link to="/"  className="text-center text-brown-900 "> Back to Products </Link>
            </button>

        <div  className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-50 ">
            <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-8">        
                <img src={product.thumbnail} alt={product.title} className="h-72 w-full object-contain transition duration-300 hover:scale-105"/>
            </div>
        
        
            <div> 
            <span className="rounded-full bg-brown-40 px-3 py-1 text-sm text-brown-800">
                Category : {product.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-800">
                {product.title}
            </h1>

            <p className="mt-4 leading-6 text-slate-500">  
                {product.description}
            </p>

            <p className="mt-4 text-sm text-amber-600">
                ★ {product.rating} / 5
            </p>

            <h2 className="mt-10 text-3xl font-bold text-brown-800">
                ${product.price}
            </h2>

            <p className="mt-2 text-sm text-green">
                {product.stock>0? `${product.stock} items available`: "out of stock"}
            </p>

            <div className="flex w-fit items-center overflow-hidden round-lg border border-slate-200">
                <button onClick={()=> setQuantity(Math.max(1,quantity-1))}
                        disabled={quantity <=1}
                        className="px-5 py-3 text-lg hover:bg-slate-100 ">
                            -
                </button>
                
                <span className="px-5 font-semibold">
                    {quantity}
                </span>

                <button onClick={()=> setQuantity(quantity+1)}
                        disabled={quantity >= product.stock}
                        className="px-5 py-3 text-lg hover:bg-slate-100 disabled:opacity-40">
                            +
                </button>
            </div>
            </div>
            <div className="mt-w-6xl rounded-xl bg-slate-50 p-10">
                <p>
                    Total Price:
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    ${totalPrice}
                </h2>
                <button
                    disabled={product.stock <= 1}
                    onClick={() => {
                    addToCart(product, quantity);
                    navigate("/cart");
                }}
                className="mt-6 w-full rounded-xl bg-orange-700 px-6 py-4 font-semibold text-white transition hover:bg-orange-900 disabled:opacity-50"
                >
                    Add to Cart
                </button>
            </div>
        </div>
        </div>
    </div>
    );
}

export default ProductDetails;