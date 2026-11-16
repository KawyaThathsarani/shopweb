import "./Header.css"

function Header() {
    return (
        <header className="header">
            <h2 className="text-2xl font-bold text-brown-400">ShopWeb</h2>

            <nav>
                <a href="/">Home</a>
                <a href="#products">Products</a>
                <a href="/cart">Cart</a>    
            </nav>

          <a href="#products" className="hero-button">Shop now</a>

        </header>
    );
}

export default Header;
