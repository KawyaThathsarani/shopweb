
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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">

    <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-lg">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
        *
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-800">
            Order Confirmed!
        </h1>

        <p className="mt-4 text-slate-500">
            Thank you, {order.name}!
        </p>

        <p className="mt-2 text-slate-500">
            Your demo checkout has been completed.
        </p>

        <div className="mt-8 rounded-xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
                Order Subtotal
            </p>

            <h2 className="mt-2 text-3xl font-bold text-orange-600">
                ${order.total}
            </h2>

        </div>

        <p className="mt-5 text-sm text-slate-500">
            No actual payment
            or order submission has occurred.
        </p>

        <Link to="/" className="mt-8 inline-block w-full rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700">
            Continue Shopping
        </Link>

    </div>

    </div>
    );
}

export default OrderSuccess;
