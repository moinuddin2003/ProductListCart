// src/Cart.tsx
import { type CartItem } from "./App";

interface CartProps {
  cart: CartItem[];
  onRemoveItem: (productName: string) => void;
  onConfirmOrder: () => void;
}

export default function Cart({
  cart,
  onRemoveItem,
  onConfirmOrder,
}: CartProps) {
  // Total Items count
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Total Order Price
  const orderTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <section className="cart-card">
      <h2 className="cart-title">Your Cart ({cartItemsCount})</h2>

      {cartItemsCount === 0 ? (
        <div className="empty-cart">
          <img
            src="./public/images/illustration-empty-cart.svg"
            alt="Empty Cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.product.name} className="cart-item">
              <div>
                <p className="item-title">{item.product.name}</p>
                <div className="item-details">
                  <span className="qty">{item.quantity}x</span>
                  <span className="unit-price">
                    @ ${item.product.price.toFixed(2)}
                  </span>
                  <span className="total-price">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => onRemoveItem(item.product.name)}
              >
                ✕
              </button>
            </div>
          ))}

          <div className="cart-order-total">
            <span>Order Total</span>
            <span className="order-total-amount">${orderTotal.toFixed(2)}</span>
          </div>

          <div className="carbon-neutral">
            <span>
              🌱 This is a <b>carbon-neutral</b> delivery
            </span>
          </div>

          <button onClick={() => onConfirmOrder()} className="confirm-btn">
            Confirm Order
          </button>
        </div>
      )}
    </section>
  );
}
