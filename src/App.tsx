// src/App.tsx
import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { type Product } from "./ProductCard";
import "./App.css";
import OrderModal from "./OrderModal";

// Cart item ke liye interface (Product + quantity)
export interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Cart state array
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function 1: Product ko Cart mein add karna ya quantity barhana
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check karo kya product pehle se cart mein hai?
      const existingItem = prevCart.find(
        (item) => item.product.name === product.name,
      );

      if (existingItem) {
        // Agar hai, toh sirf uski quantity +1 kar do
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Agar naya product hai, toh array mein push kar do quantity: 1 ke sath
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Function 2: Quantity kam karna (Decrement)
  const handleRemoveOne = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.name === product.name,
      );

      if (existingItem?.quantity === 1) {
        // Agar quantity 1 hai aur minus dabaya, toh array se remove kar do
        return prevCart.filter((item) => item.product.name !== product.name);
      } else {
        // Warna quantity -1 kar do
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  // Function 3: Cart se poori item delete karna (cross icon ke liye)
  const handleRemoveItem = (productName: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.name !== productName),
    );
  };

  // Function 4: Confirm Button click hony pr Order Modal Open hoga
  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleResetOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <main className="app-container">
      {/* ProductList ko functions aur cart data bhej rahe hain */}
      <ProductList
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveOne={handleRemoveOne}
      />
      {/* Cart ko cart data aur delete function bhej rahe hain */}
      <Cart
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onConfirmOrder={handleConfirmOrder}
      />

      {isModalOpen && (
        <OrderModal cart={cart} onResetOrder={handleResetOrder} />
      )}
    </main>
  );
}
