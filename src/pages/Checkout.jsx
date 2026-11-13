import {useState} from "react";
import {Link, useNavigate} from "react-router";

function Checkout({cart,setCart}){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    const total = cart.reduce(
        (sum,item)=> sum + item.price * item.quantity,0
    );

    function handleOrder(e){
        e.preventDefault();
        navigate("/order-success",{
            state:{name,total}
        });

        setCart([]);
    }

    if (cart,length === 0){
        return(
            <div className = "p-8">
                <h1>yor cart is empty!</h1>
                <Link to="/cart" className="text-blur-600">Back to Cart</Link>
            </div>
        );
    }

    return(
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <form onSubmit={handleOrder} className="flex flex-col gap-4">
                <label>full Name</label>
                <input type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="border p-3 rounded"/>
                
                <label>Email</label>
                <input type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="border p-3 rounded"/>
                
                <label>Phone:</label>
                <input type="tel" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        className="border p-3 rounded"/>
                
                <label>Delivery Address</label>
                <textarea 
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                        className="border p-3 rounded"/>
                
                <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>

                <button
                    type="submit"
                    className="bg-green-600 text-white p-3 rounded"
                >Place Demo Order</button>

            </form>
        </div>
    );
}

export default Checkout;
