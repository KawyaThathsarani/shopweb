import "./Hero.css";

function Hero() {
    return (
    <section className="hero">
    <div className="hero-content">

        <h1>Discover Your Next Favorite</h1>

        <p>
        Shop the latest products at amazing prices!
        </p>

        <a href="#products" className="hero-button">
            Shop Now
        </a>
    </div>
    </section>
    );
}

export default Hero;