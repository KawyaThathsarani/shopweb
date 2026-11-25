
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";

import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

import "./App.css";
import "./index.css";

function App() {

  // 1. Filter states
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    minPrice: "",
    maxPrice: "",
    sort: "default",
  });

  // 2. Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  // 3. Store API results from FilterSidebar
  const [results, setResults] = useState({
    products: [],
    total: 0,
    loading: true,
    error: "",
  });

  const { products, total, loading, error } = results;

  // 4. Calculate number of pages
  const totalPages = Math.ceil(
    total / productsPerPage
  );

  // 5. Update filters
  function updateFilter(name, value) {
    setFilters(previous => ({
      ...previous,
      [name]: value,
    }));

    // Return to first page when filter changes
    setCurrentPage(1);
  }

  // 6. Reset all filters
  function resetFilters() {
    setFilters({
      search: "",
      category: "All",
      minPrice: "",
      maxPrice: "",
      sort: "default",
    });

    setCurrentPage(1);
  }

  return (
    <div id="home">

      <Header />

      <Hero />

      <main
        id="products"
        className="container mx-auto scroll-mt-24"
      >

        <div className="shop-layout">

          <FilterSidebar
            filters={filters}
            currentPage={currentPage}
            onFilterChange={updateFilter}
            onReset={resetFilters}
            onResults={setResults}
          />

          <section className="products-area">

            <h1 className="mt-6 text-center">
              <TextAnimate
                animation="blurInUp"
                by="word"
              >
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

            )  : products.length === 0 ? (

              <p className="mt-8 text-center text-slate-500">
                No matching products found.
              </p>

            ) : (

              <div className="product-list mt-6">

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

            {totalPages > 1 && (

              <div className="mt-8 flex items-center justify-center gap-3">

                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage(page => page - 1)
                  }
                >
                  Previous
                </Button>

                <span className="p-2 text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                  variant="outline"
                  disabled={currentPage >= totalPages}
                  onClick={() =>
                    setCurrentPage(page => page + 1)
                  }
                >
                  Next
                </Button>

              </div>

            )}

          </section>

        </div>

      </main>

      <footer id="footer" className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
