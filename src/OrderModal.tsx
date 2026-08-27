import { type CartItem } from "./App";

interface OrderModalProps {
  cart: CartItem[];
  onResetOrder: () => void;
}

export default function OrderModal({ cart, onResetOrder }: OrderModalProps) {
  const orderTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        {/* Green Tick Icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#0E8A5F" fillOpacity="0.1" />
          <circle cx="24" cy="24" r="16" fill="#0E8A5F" />
          <path
            d="M18 24L22 28L30 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2
          style={{ fontSize: "2rem", marginTop: "16px", marginBottom: "8px" }}
        >
          Order Confirmed
        </h2>
        <p style={{ color: "var(--rose-500)", fontSize: "0.875rem" }}>
          We hope you enjoy your food!
        </p>

        {/* Order Items List */}
        <div className="order-items-list">
          {cart.map((item) => (
            <div key={item.product.name} className="modal-item">
              <div className="modal-item-info">
                <img
                  src={item.product.image.thumbnail}
                  alt={item.product.name}
                  className="modal-item-thumb"
                />
                <div>
                  <p className="item-title">{item.product.name}</p>
                  <div className="item-details">
                    <span className="qty">{item.quantity}x</span>
                    <span className="unit-price">
                      @ ${item.product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className="total-price"
                style={{ color: "var(--rose-900)" }}
              >
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div
            className="cart-order-total"
            style={{ border: "none", paddingBottom: 0 }}
          >
            <span style={{ fontSize: "0.875rem" }}>Order Total</span>
            <span className="order-total-amount">${orderTotal.toFixed(2)}</span>
          </div>
        </div>

        <button className="confirm-btn" onClick={onResetOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
 