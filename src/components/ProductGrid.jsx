
import Product from "./Product";
import { TextAnimate } from "@/components/ui/text-animate";

function ProductGrid({ products, total, loading, error }) {

    return (
    <section className="products-area">

        <h1 className="mt-6 text-center">
            <TextAnimate animation="blurInUp" by="word">
            Our Products ..
            </TextAnimate>
        </h1>

        {!loading && !error && (
            <p className="mt-3 text-center text-sm text-slate-500">
            {total} matching products
            </p>
        )}

        {loading ? (

            <p className="mt-8 text-center text-slate-500">
            Loading products...
            </p>

        ) : error ? (

            <p className="mt-8 text-center text-red-600">
            {error}
            </p>

        ) : products.length === 0 ? (

        <p className="mt-8 text-center text-slate-500">
            No matching products found.
        </p>

        ) : (

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

            {products.map(item => (

            <Product
                key={item.id}
                id={item.id}
                name={item.title}
                price={item.price}
                image={item.thumbnail}
                category={item.category}
            />

            ))}

        </div>

        )}

    </section>
    );
}

export default ProductGrid;
