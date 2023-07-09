// import React, { useState } from "react";
// import Products from "./products";
// import axios from "axios";

// function Cart() {
//   const [cart, setCart] = useState([]);
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//   });

//   const addToCart = (name, price) => {
//     const product = { name: name, price: price };
//     setProduct(product);
//     setCart([...cart, product]);
//     console.log(cart);
//     alert("Product added to cart!");
//   };

//   function addProductToDB(event) {
//     event.preventDefault();
//     console.log(product);
//     let url = "http://localhost:9595/add-product";
//     axios.post(url, product).then((response) => {
//       console.log(response.data);
//     });
//   }

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in the cart</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               {item.name} - ${item.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React, { useState } from "react";
import ProductList from "./ProductList";

function Cart() {
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