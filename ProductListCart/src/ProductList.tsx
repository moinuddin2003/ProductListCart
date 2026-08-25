import { data } from "./data";
import ProductCard, { type Product } from "./ProductCard";

export default function ProductList() {
  return (
    <div>
      <h1 className="products-title">Desserts</h1>
      <section className="products-grid">
        {data.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
}