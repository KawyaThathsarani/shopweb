
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import ProductGrid from "./components/ProductGrid";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";
import "./App.css";
import "./index.css";

function App() {

  //Filter states
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    minPrice: "",
    maxPrice: "",
    sort: "default",
  });

  //Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  //Store API results from FilterSidebar
  const [results, setResults] = useState({
    products: [],
    total: 0,
    loading: true,
    error: "",
  });

  const { products, total, loading, error } = results;

  //Calculate number of pages
  const totalPages = Math.ceil(
    total / productsPerPage
  );

  //Update filters
  function updateFilter(name, value) {
    setFilters(previous => ({
      ...previous,
      [name]: value,
    }));
    setCurrentPage(1);     // Return to first page when filter changes
  }

  //Reset all filters
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
      <main id="products" className="container mx-auto scroll-mt-24">

        <div className="shop-layout">

          <FilterSidebar
            filters={filters}
            currentPage={currentPage}
            onFilterChange={updateFilter}
            onReset={resetFilters}
            onResults={setResults}
          />

          <section className="products-area">

              <ProductGrid
                products={products}
                total={total}
                loading={loading}
                error={error}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />

          </section>

        </div>

      </main>

        <Footer />

    </div>
  );
}

export default App;
