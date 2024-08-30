import { createContext, useContext } from "react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("loggedInUserId");
  });

  useEffect(() => {
    if (userId && token) {
      localStorage.setItem("loggedInUserId", userId);
      localStorage.setItem("token", token);
    }
  }, [userId, token]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUserId");
    setToken(undefined);
    setUserId(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, userId, setUserId, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
