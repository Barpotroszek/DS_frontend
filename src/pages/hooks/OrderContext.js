import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const myContex = createContext();

export default function OrderProvider({ children }) {
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("23456789"), 250);
    });

  const [userData, setData] = useState(null);
  const nav = useNavigate();

  const value = {
    userData
  };

  return <myContex.Provider value={value}>{children}</myContex.Provider>;
}

const useOrderContext = () => useContext(myContex);

export { useOrderContext };
