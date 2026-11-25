
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

function FilterSidebar({
  filters,
  currentPage,
  onFilterChange,
  onReset,
  onResults,
}) {
  const { search, category, minPrice, maxPrice, sort } = filters;

  const [categories, setCategories] = useState([]);

  const productsPerPage = 6;

  // 1. GET CATEGORIES API
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  // 2. GET PRODUCTS API
  useEffect(() => {
    const controller = new AbortController();
    const keyword = search.trim();
    const skip = (currentPage - 1) * productsPerPage;

    // Fetch all matching results when extra filtering is needed
    const needsAll =
      keyword !== "" ||
      minPrice !== "" ||
      maxPrice !== "";

    const limit = needsAll ? 0 : productsPerPage;
    const apiSkip = needsAll ? 0 : skip;

    // Default API: All products + Pagination
    let url =
      `https://dummyjson.com/products?limit=${limit}&skip=${apiSkip}`;

    // SEARCH API
    if (keyword !== "") {
      url =
        `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&skip=${apiSkip}`;
    }

    // CATEGORY API
    else if (category !== "All") {
      url =
        `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${apiSkip}`;
    }

    // SORTING API
    if (sort === "low") {
      url += "&sortBy=price&order=asc";
    }

    if (sort === "high") {
      url += "&sortBy=price&order=desc";
    }

    if (sort === "az") {
      url += "&sortBy=title&order=asc";
    }

    console.log("Calling API:", url);

    onResults(previous => ({
      ...previous,
      loading: true,
      error: "",
    }));

    // ACTUAL FETCH REQUEST
    fetch(url, { signal: controller.signal })
      .then(res => {
        return res.json();
      })
      .then(data => {

        let products = data.products;
        let total = data.total;
        // Extra filters
        if (needsAll) {
          products = products.filter(item => {
            const matchesSearch =
              keyword === "" ||
              item.title.toLowerCase().includes(
                keyword.toLowerCase()
              );

            const matchesCategory =
              category === "All" ||
              item.category === category;

            const matchesMin =
              minPrice === "" ||
              item.price >= Number(minPrice);

            const matchesMax =
              maxPrice === "" ||
              item.price <= Number(maxPrice);

            return (
              matchesSearch &&
              matchesCategory &&
              matchesMin &&
              matchesMax
            );
          });

          total = products.length;

          // Display 6 products per page
          products = products.slice(
            skip,
            skip + productsPerPage
          );
        }

        // Send products to App.jsx
        onResults({
          products: products,
          total: total,
          loading: false,
          error: "",
        });
      })
      .catch(error => {
        if (error.name !== "AbortError") {
          console.error(error);

          onResults({
            products: [],
            total: 0,
            loading: false,
            error: error.message,
          });
        }
      });

    return () => controller.abort();

  }, [
    search,
    category,
    minPrice,
    maxPrice,
    sort,
    currentPage,
    onResults,
  ]);

  return (
    <aside className="filters">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">

          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Search Products</Label>

            <Input
              id="search"
              placeholder="Search products..."
              value={search}
              onChange={e =>
                onFilterChange("search", e.target.value)
              }
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>

            <select
              id="category"
              className="w-full rounded-md border p-2"
              value={category}
              onChange={e =>
                onFilterChange("category", e.target.value)
              }
            >
              <option value="All">All Categories</option>

              {categories.map(cat => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Price */}
          <div className="space-y-2">
            <Label htmlFor="minPrice">
              Minimum Price ($)
            </Label>

            <Input
              id="minPrice"
              type="number"
              min="0"
              placeholder="No minimum"
              value={minPrice}
              onChange={e =>
                onFilterChange("minPrice", e.target.value)
              }
            />
          </div>

          {/* Maximum Price */}
          <div className="space-y-2">
            <Label htmlFor="maxPrice">
              Maximum Price ($)
            </Label>

            <Input
              id="maxPrice"
              type="number"
              min="0"
              placeholder="No maximum"
              value={maxPrice}
              onChange={e =>
                onFilterChange("maxPrice", e.target.value)
              }
            />
          </div>

          {/* Sorting */}
          <div className="space-y-2">
            <Label htmlFor="sort">Sort By</Label>

            <select
              id="sort"
              className="w-full rounded-md border p-2"
              value={sort}
              onChange={e =>
                onFilterChange("sort", e.target.value)
              }
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="az">Title: A to Z</option>
            </select>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={onReset}
          >
            Reset Filters
          </Button>

        </CardContent>
      </Card>
    </aside>
  );
}

export default FilterSidebar;
