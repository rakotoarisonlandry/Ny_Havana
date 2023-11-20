import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContexte = createContext();

export const AuthContexteProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };
  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <AuthContexte.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContexte.Provider>
  );
};
