import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

export default function App() {
  return (
    <main className="app-container">
      <ProductList />
      <Cart />
    </main>
  );
}
