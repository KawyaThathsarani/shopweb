
import { Link, useLocation } from "react-router";
import { Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Confetti } from "@/components/ui/confetti";

function OrderSuccess() {

    const location = useLocation();
    const order = location.state;

    if (!order) {
    return (
        <div className="min-h-screen bg-slate-50 p-10 text-center">

            <h1 className="text-2xl font-bold">
                No order details available.
            </h1>   

            <Link to="/" className={buttonVariants({
                className: "mt-6 bg-orange-600 text-white"})}
            >
                Back to Shop
            </Link>

        </div>
    );
    }

    return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">

        <div className="relative w-full max-w-lg">

        <Confetti className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            options={{
            particleCount: 70,
            spread: 80,
            startVelocity: 30,
            colors: [
            "#16a34a",
            "#f97316",
            "#facc15"
            ]
        }}
        />

        <Card className="overflow-hidden shadow-xl">

            <CardContent className="px-6 py-10 text-center sm:px-10">

                {/* Animated Green Tick */}
                <div className="success-circle mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-200 bg-green-100">

                <Check
                className="success-tick h-12 w-12 text-green-600"
                strokeWidth={3}
                />

            </div>

            <h1 className="mt-7 text-3xl font-bold text-slate-800">
                Order Confirmed!
            </h1>

            <p className="mt-4 text-lg text-slate-700">
                Thank you, {order.name}!
            </p>

            <p className="mt-2 text-slate-500">
                Your checkout has been completed successfully.
            </p>

            <div className="mt-8 rounded-xl bg-slate-50 p-6">

                <p className="text-sm text-slate-500">
                Order Subtotal
                </p>

                <h2 className="mt-2 text-3xl font-bold text-orange-600">
                ${Number(order.total).toFixed(2)}
                </h2>

            </div>

            <p className="mt-5 text-sm text-slate-500">
                This is a demo confirmation.
            </p>

            <Link
                to="/"
                className={buttonVariants({
                size: "lg",
                className:
                    "mt-8 w-full bg-orange-600 text-white hover:bg-orange-700"
                })}
            >Continue Shopping  </Link>

        </CardContent>
        </Card>

    </div>

    </div>
    );
}

export default OrderSuccess;
