"use client";
import { createContext, useContext, useEffect, useState } from "react";
export const authContex = createContext({ auth: false });
import React from "react";
import { useRouter } from "next/navigation";
import { Elsie_Swash_Caps } from "next/font/google";
export function AuthContext({ children }) {
  const [auth, setAuth] = useState(false);
  const [myRoleId, setMyroleId] = useState(19);
  const router = useRouter();
  const changeAuth = (auth) => {
    console.log("changing auth", auth);
    setAuth(auth);
    // if (auth && localStorage.getItem("tkn")) {
    //   router.push("/Dashboard");
    // }
  };
  const handlemyUserId = (roleid) => {
    setMyroleId(roleid);
  };
  const handleStorage = () => {
    localStorage.removeItem("tkn");
    changeAuth(false);
    router.push("/login");
  };
  const handleLogout = () => {
    console.log("removing storage");
    localStorage.removeItem("tkn");
    changeAuth(false);
    router.push("/login");
  };
  // useEffect(() => {
  //   console.log(!localStorage.getItem("tkn"));
  //   if (!localStorage.getItem("tkn")) {
  //     router.push("/login");
  //     changeAuth(false);
  //   } else {
  //     router.push("/Dashboard");
  //     changeAuth(true);
  //   }
  //   window.addEventListener("storage", handleStorage());
  //   return () => {
  //     window.removeEventListener("storage", handleStorage());
  //   };
  // }, []);
  // useEffect(() => {
  //   if (!auth) {
  //     router.push("/login");
  //   }
  // }, [auth]);
  return (
    <authContex.Provider
      value={{ auth: auth, myRoleId, changeAuth, handlemyUserId, handleLogout }}
    >
      {children}
    </authContex.Provider>
  );
}
