
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Hero from "./components/Hero"
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";

function App() {

  // Store API products
  const [products, setProducts] = useState([]);

  // Filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const categories = [
    "All",
    ...new Set(products.map(item => item.category))
  ];

  const filteredProducts = products.filter(item => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= minPrice &&
      item.price <= maxPrice
    );
  });

  const sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "az") {
    sortedProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setMinPrice(0);
    setMaxPrice(5000);
    setSort("default");
  }

  return (
    <div id="home">

      <Header />
      <Hero/>

      <main id="products" className="container">

        <h1>ShopNest Products</h1>

        <div className="shop-layout">

          <aside className="filters">

            <h2>Filters</h2>

            <label>Search Products</label>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <label>Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            <label>Minimum Price ($)</label>
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={e => setMinPrice(Number(e.target.value))}
            />

            <label>Maximum Price ($)</label>
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
            />

            <label>Sort By</label>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="az">Name: A to Z</option>
            </select>

            <button onClick={resetFilters}>
              Reset Filters
            </button>

          </aside>

          <section className="products-area">

            <p>{sortedProducts.length} products found</p>

            <div className="product-list">

              {sortedProducts.map(item => (
                <Product
                  key={item.id}
                  name={item.title}
                  price={item.price}
                  image={item.thumbnail}
                  category={item.category}
                />
              ))}

            </div>

            {sortedProducts.length === 0 && (
              <p>No matching products found.</p>
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
