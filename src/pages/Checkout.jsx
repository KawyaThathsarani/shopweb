import {useState} from "react";
import {Link, useNavigate} from "react-router";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardHeader,CardTitle,}from "@/components/ui/card";

function Checkout({cart,setCart}){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const total = cart.reduce(                      //reduce-> array method  , process products one by one
        (sum,item)=> sum + item.price * item.quantity,0
    );

    function handleOrder(e){
        //e.preventDefault();
        navigate("/order-success",{
            state:{name,total}
        });

        setCart([]);
    }

    if (cart.length === 0){
        return(
            <div className = "p-8">
                <h1>yor cart is empty!</h1>
                <Link to="/cart" className="text-blur-600">Back to Cart</Link>
            </div>
        );
    }

    return(
        <div className="min-h-screen bg-slate-50 px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <Link to="/cart" className="text-orange-800 hover:underline"> Back to Cart</Link>
                <h1 className="mt-5 text-3xl">Checkout</h1>
                <p className="mt-2 text-slate-400">Enter your details.</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Billing Information</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleOrder} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>

                                    <Input id="name" type="text" placeholder="Enter your name" value={name} onChange={e=> setName(e.target.value)} required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>

                                    <Input id="email" type="email" placeholder="example@email.com" value={email} onChange={e=> setEmail(e.target.value)} required />
                                </div> 

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>

                                    <Input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={e=> setPhone(e.target.value)} required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Delivery Address </Label>

                                    <Textarea id="address" placeholder="Enter your Delivery Address" value={address} onChange={e=> setAddress(e.target.value)} required />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-orange-600 text-white hover:bg-orange-700">
                                    Place Order
                                </Button>

                                <p className="text-center text-xs text-slate-500">Demo payments only.....</p>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-4">
                                {cart.map(item=>(
                                    <div key={item.id} className="flex justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-medium">{item.title}</p>
                                        </div>
                                            <p className="text-xs text-slate-500">Quantity:{item.quantity}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="my-5 border-t border-slate-200"/>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Sub Total</span>
                                <span className="text-xl font-bold text-orange-600">${total}</span>
                            </div>

                            <p className="mt-3 text-xs text-slate-600"> Free Delivery </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
