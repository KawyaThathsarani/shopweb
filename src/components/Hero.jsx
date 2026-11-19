import{Link} from "react-router";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { buttonVariants } from "./ui/button";

function Hero() {
    return (
        <section className="bg-slate-950 px-6 py-20 text-center text-white md:py-28">
            <p className="mb-4 text-sm font-semibold tracking-widest text-orange-300">WELCOME To SHOPWEB </p>

            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl"> Discover Your{""} <AnimatedGradientText colorFrom="#f6c693" colorTo="#814b13" speed={1.5}> Next Favorite ... </AnimatedGradientText></h1>

            <p className="mx-auto mt-6 max-w-xl text-slate-300">Explore amazing products, discover great deals,
                and enjoy a better shopping experience.
            </p>

            <Link to="/#products" className={buttonVariants({size:"lg", className:"mt-8 bg-orange-600 text-white hover:bg-orange-700"})}>Explore Products</Link>
        </section>
    );
}

export default Hero;