// src/ProductCard.tsx
export interface Product {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    desktop: string;
    mobile: string;
    tablet: string;
  };
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onRemoveOne: () => void;
}

export default function ProductCard({
  product,
  quantity,
  onAddToCart,
  onRemoveOne,
}: ProductCardProps) {
  const isSelected = quantity > 0;

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={product.image.desktop}
          alt={product.name}
          className={`product-image ${isSelected ? "selected" : ""}`}
        />

        <div className="btn-container">
          {!isSelected ? (
            <button className="add-to-cart-btn" onClick={onAddToCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                <path fill="#C73B0F" d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.333 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM1.666 2.5h2.5l1.667 10h10l1.667-7.5H5.833"/>
              </svg>
              Add to Cart
            </button>
          ) : (
            <div className="quantity-btn-group">
              <button className="qty-circle" onClick={onRemoveOne}>-</button>
              <span>{quantity}</span>
              <button className="qty-circle" onClick={onAddToCart}>+</button>
            </div>
          )}
        </div>
      </div>

      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
}