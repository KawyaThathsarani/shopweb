
import { Link } from "react-router";

function Cart({ cart, setCart }) {

    function removeProduct(id) {
    setCart(cart.filter(item => item.id !== id));
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
    0
    );

    return (
    <div className="max-w-4xl mx-auto p-6">
    
        <h1 className="text-3xl font-bold">
            My Shopping Cart
        </h1>

        <Link to="/" className="text-blue-600">
            Continue Shopping
        </Link>

        {cart.length === 0 && (
        <p className="mt-6">Your cart is empty.</p>
        )}

        {cart.map(item => (
            <div
            key={item.id}
            className="flex gap-6 items-center border-b p-4"
            >
        
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain"
            />

            <div className="flex-1">
                <h2 className="font-bold">{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
    
                <button
                onClick={() => removeProduct(item.id)}
                className="text-red-600 mt-3"
                >
                Remove
                </button>
            </div>
    
            </div>
        ))}

            <h2 className="text-2xl font-bold mt-6">
            Subtotal: ${total.toFixed(2)}
        </h2>
    
    </div>
    );
}   
export default Cart;
