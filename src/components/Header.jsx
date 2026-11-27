
import { Link } from "react-router";
import { Search, ShoppingCart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white"> 

            <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 py-4 sm:px-6">  

            <Link to="/"><h2 className="text-2xl font-bold text-black">
                Shop<span className="text-orange-400">Web.</span>
              </h2></Link>  

            <div className="flex items-center justify-center gap-3 whitespace-nowrap sm:gap-8"> 

                <Link to="/" className="text-xs font-medium hover:text-orange-400 sm:text-sm"> Home </Link> 

            <a href="#products" className="text-xs font-medium hover:text-orange-400 sm:text-sm" >
                Products
            </a>    

            </div>  

            <div className="flex items-center justify-end gap-2">   

            <a href="#search" aria-label="Search products" className="hidden rounded-lg p-2 hover:bg-orange-50 sm:inline-flex"> <Search className="h-5 w-5" /></a>
            
            <Link to="/cart" className={buttonVariants({ variant: "outline", size: "sm", className: "gap-2 whitespace-nowrap text-orange-400"})}>
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline"> Cart</span>
            </Link> 

            </div>  

        </nav>  

        </header>
    );
}

export default Header;
