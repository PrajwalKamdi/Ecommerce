import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();
const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  return (
    <Mycontext.Provider value={{ cartItems, setCartItems, price, setPrice }}>
      {children}
    </Mycontext.Provider>
  );
};
export default Context;
