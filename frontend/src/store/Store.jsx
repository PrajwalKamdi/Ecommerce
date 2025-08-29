import { createContext, useState } from "react";

export const Mycontext = createContext();
const Context = ({children}) => {
   const [cartItems, setCartItems] = useState([]);
  return <Mycontext.Provider value={{cartItems, setCartItems}}>{children}</Mycontext.Provider>;
}
export default Context;