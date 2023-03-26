// import React, { useState } from "react";
// import "./App.css";

// export default function Cart() {
//   const [cart, setCart] = useState(0);

//   const increment = () => {
//     setCart(cart + 1);
//   };
//   const decrement = () => {
//     setCart(cart - 1);
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       {cart === 0 ? (
//         <button className="add" onClick={increment}>
//           Add
//         </button>
//       ) : (
//         <div className="cart">
//           <button className="cartButton" onClick={decrement}>
//             -
//           </button>
//           <div className="value">{cart}</div>
//           <button className="cartButton1" onClick={increment}>
//             +
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import Routers from "./components/Routers";

export default function App() {
  return (
    <div className="full-container">
      <Routers />
    </div>
  );
}
