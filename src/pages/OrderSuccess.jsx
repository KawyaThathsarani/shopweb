
import { Link, useLocation } from "react-router";

function OrderSuccess() {

    const location = useLocation();
    const order = location.state;

    if (!order) {
    return (
        <div className="p-8">
            <p>No order details available.</p>
            <Link to="/">Back to Shop</Link>
        </div>
    );
    }

    return (
    <div className="text-center p-10">

        <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully!
        </h1>

        <p className="mt-4">
        Thank you, {order.name}!
        </p>

        <p className="mt-2">
        Order Total: ${order.total.toFixed(2)}
        </p>

        <p className="text-gray-500 mt-4">
        This was a demo order. No real payment was made.
        </p>

        <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded mt-6"
        >
        Continue Shopping
        </Link>

    </div>
    );
}

export default OrderSuccess;
