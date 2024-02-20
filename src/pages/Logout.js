import React from "react";
import { useAuthContext } from "./hooks/AuthContext";

export default function LoginPage() {
  const { handleLogout } = useAuthContext();
  handleLogout();
}
