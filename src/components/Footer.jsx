
import { Link } from "react-router";
import { ShoppingBag, ArrowUp, ShoppingCart } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">

      <div className="h-1 bg-orange-400"></div>

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <Link to="/" className="flex items-center gap-2">

              <h2 className="text-2xl font-bold text-white">
                Shop<span className="text-orange-400">Web.</span>
              </h2>

            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Discover your next favorite.
              Explore a wide range of products and enjoy
              a simple, seamless shopping experience
              with ShopWeb.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Built with React, Tailwind CSS,
              shadcn/ui and Magic UI.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="transition-colors hover:text-orange-400"
              >
                Home
              </Link>

              <a
                href="/#products"
                className="transition-colors hover:text-orange-400"
              >
                Browse Products
              </a>

              <Link
                to="/cart"
                className="flex items-center gap-2 transition-colors hover:text-orange-400"
              >
                <ShoppingCart className="h-4 w-4" />
                My Shopping Cart
              </Link>

            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              ShopWeb Features
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Product Search</li>
              <li>Category & Price Filters</li>
              <li>Product Sorting</li>
              <li>Shopping Cart</li>
              <li>Demo Checkout</li>
            </ul>
          </div>

        </div>

        <div className="my-10 border-t border-slate-400"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-500">
            © 2026 ShopWeb.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Demo project 
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
