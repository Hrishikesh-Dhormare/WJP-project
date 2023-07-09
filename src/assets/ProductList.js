import React from "react";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Chocolate", price: 5.99 },
    { id: 2, name: "Vanilla", price: 4.99 },
    { id: 3, name: "Strawberry", price: 6.99 },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      <h3>Products</h3>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
