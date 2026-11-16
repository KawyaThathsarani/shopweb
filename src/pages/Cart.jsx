
import { Link } from "react-router";

function Cart({ cart, setCart }) {

    function removeProduct(id) {
    setCart(cart.filter(item => item.id !== id));
    }

    function updateQuantity(id, amount) {
    setCart(cart.map(item =>
    item.id === id? {
            ...item,
            quantity: Math.max(1,Math.min(item.stock, item.quantity + amount))}: item));
    }

    const total = cart.reduce(      //reduce() -> calculate in every product (sum is the array with holding current sum )
    (sum, item) => sum + item.price * item.quantity,
    0
    );

    return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">

        <div className="mx-auto max-w-6xl">

        <Link
            to="/"
            className="text-sm font-medium text-orange-800 hover:text-orange-300"
        >
            Continue Shopping
        </Link>

        <h1 className="mt-5 text-3xl font-bold text-slate-800">
            My Shopping Cart
        </h1>


        {cart.length === 0 ? (

        <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-sm">

            <h2 className="mt-5 text-2xl font-bold text-slate-800">
                Your cart is empty
            </h2>

            <p className="mt-2 text-slate-500">
                Explore our products and start shopping!
            </p>

            <Link
                to="/"
                className="mt-6 inline-block rounded-xl bg-orange-600 px-6 py-3 text-white hover:bg-orange-700"
            >
                Browse Products
            </Link>
        </div>

        ) : (

            <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <div className="space-y-5 lg:col-span-10">

                {cart.map(item => (

                <div
                    key={item.id}
                    className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >

                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-45 w-full rounded-xl bg-slate-100 object-contain sm:w-32"
                />

                <div className="flex-1">

                    <h2 className="text-lg font-semibold text-slate-800">
                    {item.title}
                    </h2>

                    <p className="text-sm font-semibold text-slate-800">
                    {item.category}
                    </p>

                    <p className="mt-2 font-semibold text-orange-700">
                    ${item.price}
                    </p>

                    <div className="mt-4 flex items-center gap-3">

                    <button
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200 disabled:opacity-40"
                    >
                        −
                    </button>

                    <span className="font-semibold">
                        {item.quantity}
                    </span>

                    <button
                        onClick={() => updateQuantity(item.id, 1)}
                        disabled={item.quantity >= item.stock}
                        className="rounded-lg bg-slate-100 px-4 py-2 hover:bg-slate-200 disabled:opacity-40"
                    >
                        +
                    </button>

                    </div>

                    <button
                    onClick={() => removeProduct(item.id)}
                    className="mt-4 text-sm font-medium text-red-500 hover:text-red-700"
                    >
                    Remove Product
                    </button>

                </div>

                <p className="text-xl font-bold text-slate-800">
                    ${(item.price * item.quantity)}
                </p>

                </div>

            ))}

            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-slate-800">
                Order Summary
            </h2>

            <div className="mt-6 flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <div className="mt-4 flex justify-between text-slate-500">
                <span>Shipping</span>
                <span>Not calculated</span>
            </div>

            <div className="my-6 border-t border-slate-200"></div>

            <div className="flex justify-between font-bold text-slate-800">
                <span>Subtotal</span>
                <span className="text-xl text-orange-600">
                ${total.toFixed(2)}
                </span>
            </div>

            <Link
                to="/checkout"
                className="mt-6 block rounded-xl bg-orange-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-orange-800"
            >
                Proceed to Checkout
            </Link>

            </div>

        </div>
        )}

    </div>
    </div>
    );
}

export default Cart;
