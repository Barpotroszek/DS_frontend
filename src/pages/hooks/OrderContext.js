import React, { createContext, useContext, useState } from "react";

const myContex = createContext();

export default function OrderProvider({ children }) {
  const [basket, setBasket] = useState(JSON.parse(sessionStorage.getItem("basket")).length),
   value = {
    basket, setBasket
  };

  return <myContex.Provider value={value}>{children}</myContex.Provider>;
}

const useOrderContext = () => useContext(myContex);

export { useOrderContext };
