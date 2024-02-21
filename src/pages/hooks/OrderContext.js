import React, { createContext, useContext, useState } from "react";

const myContex = createContext();

export default function OrderProvider({ children }) {
  const [basket, setBasket] = useState(0),
    value = {
      basket,
      setBasket,
    };

useState(()=>{
   try{setBasket(sessionStorage.getItem("basket").length);} catch {}}, [])

  return <myContex.Provider value={value}>{children}</myContex.Provider>;
}

const useOrderContext = () => useContext(myContex);

export { useOrderContext };
