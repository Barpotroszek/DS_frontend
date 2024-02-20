import React from "react";
import { useAuthContext } from "../hooks/AuthContext";
import { NavLink } from "react-router-dom";
import routes from "../components/routes";

const renderList = (e) => {
  return (
    <ul>
      {e.map((v) => {
        return (
          <li>
            <NavLink to={v.href}>{v.txt}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

function Dashboard() {
  const { userData } = useAuthContext();

  return (
    <>
      <h2 className="topic border-bottom">Panel sprzedawcy</h2>
      <div className="Dashboard">
       <i>Tutaj będzie coś ciekawego... kiedyś...</i>
        </div>
    </>
  );
}

export default Dashboard;
