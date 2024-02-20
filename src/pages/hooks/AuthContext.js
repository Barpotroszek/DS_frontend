import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import routes from "../components/routes";

const myContex = createContext(),
  // defaultUser = { name: "Bartek", token: "123456"};
defaultUser = null;

export default function AuthProvider({ children }) {
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("23456789"), 250);
    });

  const [userData, setToken] = useState(defaultUser);
  const nav= useNavigate();
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    const t = await fakeAuth();
    setToken({ name: "Bartek", token: "123456", ...t });
    nav(routes.SELLER_DASHBOARD);    
  };
  const handleLogout = async (e) => {
    if (e) e.preventDefault();
    setToken(null);
    nav(routes.CLIENT_MAIN);
  };

  const value = {
    userData,
    handleLogin,
    handleLogout,
  };

  return <myContex.Provider value={value}>{children}</myContex.Provider>;
}

const useAuthContext = () => useContext(myContex);

const redirectUnauthorized = () => {
  return (
    <>
      <h2 className="topic border-bottom">Brak uprawnień</h2>
      <span>Nie możesz tu wejść bez zalogowania. Nie masz uprawnień</span>
    </>
  );
};

const ProtectedPage = ({ children }) => {
  const { userData } = useAuthContext();
  if (!userData) return <Navigate to={routes.CLIENT_MAIN} />;
  return children;
};
const authUser = ()=> {return true}
export { useAuthContext, ProtectedPage };
