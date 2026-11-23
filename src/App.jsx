
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Hero from "./components/Hero"
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
"use client"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import { TextAnimate } from "@/components/ui/text-animate"

function App() {

  // Store API products
  const [products, setProducts] = useState([]);

  // Filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState("default");
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
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

  const productsPerPage = 6;
  const totalPages = Math.ceil(           //Math.ceil -> use to roundup the number after deviding it  
    sortedProducts.length/productsPerPage
  );
  useEffect(() => {
  if (currentPage > Math.max(1, totalPages)) {
    setCurrentPage(1);
  }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage -1) * productsPerPage;

  const currentProducts = sortedProducts.slice(   //retrieve a selected portion from an array
    startIndex,
    startIndex + productsPerPage
  );

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
      <main id="products" className="container scroll-mt-54">


        <div className="shop-layout">

          <aside className="filters">
            <Card>
              <CardHeader>
              <CardTitle >Filters</CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
              <div className="space-y-2">
              <Label htmlFor="search">Search Products</Label>

              <Input id="search" type="text" placeholder="Search products ..."  value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>

            <div className="space-y-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category"/>
              </SelectTrigger>

              <SelectContent>
              {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                  </SelectItem>
              ))}
              </SelectContent>
            </Select>
            </div>
            
            <div className="space-y-2">
            <Label htmlFor="minPrice">Minimum Price ($)</Label>
            <input
              id="minPrice"
              type="number"
              min="0"
              value={minPrice}
              onChange={e => setMinPrice(Number(e.target.value))}
            />
            </div>

            <div className="space-y-2">
            <Label htmlFor="maxPrice">Maximum Price ($)</Label>
            <input
              id="maxPrice"
              type="number"
              min="0"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
            />
            </div>

            <label>Sort By</label>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

              <Button variant="outline" className="w-full" onClick={resetFilters}>Reset Filters</Button> 

              </CardContent>
            </Card>
            

          </aside>


          <section className="products-area">
              <h1 className="text-center mt-6 "><TextAnimate animation="blurInUp" by="word">
                Our Products ..
              </TextAnimate></h1>
            <div className="product-list mt-6">
              
              {currentProducts.map(item => (
                <Product
                  key={item.id}
                  name={item.title}
                  id={item.id}
                  price={item.price}
                  image={item.thumbnail}
                  category={item.category}
                />
              ))}

            </div>

            {sortedProducts.length === 0 && (
              <p>No matching products found.</p>
            )}


            {totalPages > 1 && (     //pagination with shadcn
            <div className="flex justify-center gap-3 mt-8">          

              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>         

              <span className="p-2">
                Page {currentPage} of {totalPages}
              </span>         

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>         

            </div>
          )}          

          </section>          

        </div>
        </main>         

        <footer id="footer" className="footer">
          <Footer/>
        </footer>         

        </div>
  );
}

export default App;
