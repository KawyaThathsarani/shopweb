import{Link} from "react-router";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { buttonVariants } from "./ui/button";
import {Button} from "@/components/ui/button"

function Header() {
    return (
        <header className="header">
            <h2 className="text-2xl font-bold text-brown-400"><AnimatedGradientText colorFrom="#f6c693" colorTo="#814b13" speed={1.5}>ShopWeb</AnimatedGradientText></h2>

            <nav>
                <a href="/">Home</a>
                <a href="#products">Products</a>
                <a href="/cart">Cart</a>    
            </nav>

            <a href="#products" className="hero-button">Shop now</a>
            <Button href="#products" className="hero-button">Shop now</Button>
            <Button variant="default">Add to Cart</Button>
        </header>
    );
}

export default Header;
