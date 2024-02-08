"use client";
import React, { useEffect, useState, useContext } from "react";
import "./sidenav.css";
import Link from "next/link";
import { authContex } from "@/authcontext/withAuthContext";
export default function Sidenav() {
  const dispatchRemoveToken = () => {
    console.log("remove storage event");
    window.dispatchEvent(new Event("storage"));
  };
  const auth = useContext(authContex);
  console.log(auth);
  useEffect(() => {}, []);
  return (
    <nav className="d-flex align-items-center">
      <ul>
        <Link href="/Dashboard" className="">
          <li>Home</li>
        </Link>
        <Link href="/Dashboard/myspace">
          <li>Space</li>
        </Link>
        <Link
          href="#"
          onClick={() => {
            auth.handleLogout();
            dispatchRemoveToken();
          }}
        >
          Logout
        </Link>
      </ul>
    </nav>
  );
}
