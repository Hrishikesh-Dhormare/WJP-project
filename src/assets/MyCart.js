// import React, { useState } from "react";
// import ProductList from "./ProductList";

// function Cart({cart}) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in the cart</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//             </li>
//           ))}
//         </ul>
//       )}
//       <ProductList addToCart={addToCart} />
//     </div>
//   );
// }

// export default Cart;

import React, { useState } from "react";
import ProductList from "./ProductList";

function Cart({ cart }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Cart;
