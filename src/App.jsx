
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import ProductGrid from "./components/ProductGrid";
import Hero from "./components/Hero";
import FilterSidebar from "./components/FilterSidebar";
//import "./App.css";
//import "./index.css";

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

    <main
      id="products"
      className="mx-auto w-full max-w-1400px px-5 py-8 scroll-mt-24"> 
      <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">  {/* 250px: first col (side filter) remaining col (second col): based on the space of the window (0 -1fr) */}

        <FilterSidebar
          filters={filters}
          currentPage={currentPage}
          onFilterChange={updateFilter}
          onReset={resetFilters}
          onResults={setResults}
        />

        <div className="min-w-0">

          <ProductGrid
            products={products}
            total={total}
            loading={loading}
            error={error}
          />

          {!loading && !error && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}

        </div>

      </div>
    </main>

    <footer id="footer">
      <Footer />
    </footer>
  </div>
);

}

export default App;
