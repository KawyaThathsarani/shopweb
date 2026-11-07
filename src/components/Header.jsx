import "./Header.css"

function Header() {
    return (
        <header className="header">
            <h2>ShopNest</h2>

            <nav>
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#cart">Cart</a>    
            </nav>

          <a href="#products" className="hero-button">Shop now</a>

        </header>
    );
}

export default Header;
