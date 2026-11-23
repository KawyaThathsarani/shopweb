
import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";

function ProductDetails({ addToCart }) {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  // Fetch the selected product
  useEffect(() => {
    setProduct(null);
    setQuantity(1);

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [id]);

  // Loading message
  if (!product) {
    return (
      <div className="p-10 text-center">
        Loading Product...
      </div>
    );
  }

  // Calculate total price
  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">

      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          to="/"
          className={buttonVariants({
            variant: "outline",
            className: "mb-6",
          })}
        >
          ← Back to Products
        </Link>

        <Card className="overflow-hidden">

          <CardContent className="grid gap-10 p-6 md:grid-cols-2 md:p-8">

            <MagicCard
              className="flex min-h-80 items-center justify-center rounded-2xl"
              gradientColor="#fed7aa"
              gradientOpacity={0.35}
            >
              <div className="flex h-full min-h-80 items-center justify-center p-6">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-72 w-full object-contain transition duration-300 hover:scale-105"
                />
              </div>
            </MagicCard>

            <div className="space-y-5">

              <Badge variant="secondary">
                {product.category}
              </Badge>

              <h1 className="text-3xl font-bold text-slate-900">
                {product.title}
              </h1>

              <p className="leading-7 text-slate-500">
                {product.description}
              </p>

              <p className="text-sm text-amber-600">
                ★ {product.rating} / 5
              </p>

              <h2 className="text-3xl font-bold text-orange-700">
                ${product.price.toFixed(2)}
              </h2>

              <Badge
                variant={product.stock > 0 ? "secondary" : "destructive"}
              >
                {product.stock > 0
                  ? `${product.stock} items available`
                  : "Out of Stock"}
              </Badge>

              <div>
                <p className="mb-3 font-medium">
                  Quantity
                </p>

                <div className="flex items-center gap-4">

                  <Button
                    variant="outline"
                    size="icon"
                    disabled={quantity <= 1}
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </Button>

                  <span className="text-lg font-semibold">
                    {quantity}
                  </span>

                  <Button
                    variant="outline"
                    size="icon"
                    disabled={quantity >= product.stock}
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                  >
                    +
                  </Button>

                </div>
              </div>

              <div className="rounded-xl bg-slate-100 p-5">

                <p className="text-sm text-slate-500">
                  Total Price
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  ${totalPrice.toFixed(2)}
                </h2>

                <Button
                  disabled={product.stock <= 0}
                  className="mt-5 w-full bg-orange-600 text-white hover:bg-orange-700"
                  size="lg"
                  onClick={() => {
                    addToCart(product, quantity);
                    navigate("/cart");
                  }}
                >
                  Add to Cart
                </Button>

              </div>

            </div>

          </CardContent>
        </Card>

      </div>

    </div>
  );
}

export default ProductDetails;
