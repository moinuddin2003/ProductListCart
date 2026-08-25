import { useState } from "react";
// import images from
export default function Cart() {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <section className="cart-card">
      <h2 className="cart-title">Your Cart ({cartItemsCount})</h2>

      {cartItemsCount === 0 ? (
        <div className="empty-cart">
          <img src="../images/illustration-empty-cart.svg" alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div>
          {/* Cart Item Loop */}
          <div className="cart-item">
            <div>
              <p className="item-title">Classic Tiramisu</p>
              <div className="item-details">
                <span className="qty">1x</span>
                <span className="unit-price">@ $5.50</span>
                <span className="total-price">$5.50</span>
              </div>
            </div>
            <button className="remove-btn">✕</button>
          </div>

          <div className="cart-order-total">
            <span>Order Total</span>
            <span className="order-total-amount">$5.50</span>
          </div>

          <div className="carbon-neutral">
            <span>
              🌱 This is a <b>carbon-neutral</b> delivery
            </span>
          </div>

          <button className="confirm-btn">Confirm Order</button>
        </div>
      )}
    </section>
  );
}
