import React from "react";

export default function ProductItem({
  product,
  addToCart,
  removeFromCart,
  cartItem
}) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <img
        heigth={30}
        title={product.name}
        src={`products/123.gif`}
        alt="text"
      />
      <div>{product.description}</div>
      <h2 style={{ color: "blue" }}>${product.price}</h2>
      <h3>Qty:{(cartItem && cartItem.quantity) || 0}</h3>
      <div>
        <button onClick={() => addToCart(product)}>add to cart</button>
        {cartItem ? (
          <button onClick={() => removeFromCart(cartItem)}>remove</button>
        ) : null}
      </div>
    </div>
  );
}
