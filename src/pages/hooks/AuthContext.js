import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import routes from "../../routes";
import Loading from "../components/Loading";

const myContex = createContext(),
  // defaultUser = { name: "Bartek", token: "123456"};
  defaultUser = null,
  KEY = "user-credentials",
  fakeAuth = (creds) =>
    new Promise((resolve) => {
      setTimeout(() => resolve("12345678"), 2500);
    });

export default function AuthProvider({ children }) {
  const [userData, setCredentials] = useState(defaultUser),
    [ifLoadedCreds, setLoadedCreds] = useState(false),
    location = useLocation();

  const updateCreds = () => {
    let creds = {};
    try {
      creds = JSON.parse(sessionStorage.getItem(KEY));
    } catch (error) {}
    fakeAuth(creds).then((token) => {
      creds.token = token;
      setCredentials({...creds})
      setLoadedCreds(true);
    })
    .catch(()=>{
      setCredentials(null);
      setLoadedCreds(true);
    });
  };

  useEffect(updateCreds, []);


  const midSetCredentials = (c) => {
    sessionStorage.setItem(KEY, JSON.stringify(c));
    setCredentials(c);
  };

  const nav = useNavigate();
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    const t = await fakeAuth();
    midSetCredentials({ name: "Bartek", token: t });
    nav(routes.SELLER_DASHBOARD);
  };
  const handleLogout = async (e) => {
    if (e) e.preventDefault();
    midSetCredentials(null);
    nav(routes.CLIENT_MAIN);
  };

  const value = {
    userData,
    handleLogin,
    handleLogout,
  };

  if(!ifLoadedCreds)
   return <Loading />;
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
  const { userData } = useAuthContext(),
    loc = useLocation();
  if (!userData) {
    return <Navigate to={routes.CLIENT_MAIN} state={{ from: loc }} />;
  }
  return children;
};

export { useAuthContext, ProtectedPage };
