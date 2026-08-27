// src/ProductList.tsx
import { data } from "./data";
import ProductCard, { type Product } from "./ProductCard";
import { type CartItem } from "./App";

interface ProductListProps {
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveOne: (product: Product) => void;
}

export default function ProductList({
  cart,
  onAddToCart,
  onRemoveOne,
}: ProductListProps) {
  return (
    <div>
      <h1 className="products-title">Desserts</h1>
      <section className="products-grid">
        {data.map((product: Product, index: number) => {
          // Check karo is product ki quantity cart mein kitni hai
          const cartItem = cart.find(
            (item) => item.product.name === product.name
          );
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <ProductCard
              key={index}
              product={product}
              quantity={quantity}
              onAddToCart={() => onAddToCart(product)}
              onRemoveOne={() => onRemoveOne(product)}
            />
          );
        })}
      </section>
    </div>
  );
}