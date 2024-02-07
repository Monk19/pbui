"use client";
import { createContext, useContext, useEffect, useState } from "react";
export const authContex = createContext({ auth: false });
import React from "react";
import { useRouter } from "next/navigation";
export function AuthContext({ children }) {
  const [auth, setAuth] = useState(false);
  const router = useRouter();
  const changeAuth = () => {
    setAuth(!auth);
  };
  useEffect(() => {
    if (!localStorage.getItem("tkn")) {
      router.push("/login");
      changeAuth();
    }
  }, []);
  return (
    <authContex.Provider value={{ auth: auth, changeAuth }}>
      {children}
    </authContex.Provider>
  );
}
