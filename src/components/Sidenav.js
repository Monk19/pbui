"use client";
import React, { useEffect, useState, useContext } from "react";
import "./sidenav.css";
import Link from "next/link";
import { authContex } from "@/authcontext/withAuthContext";
import { signOut } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/image/logo.png";
export default function Sidenav() {
  const dispatchRemoveToken = () => {
    console.log("remove storage event");
    window.dispatchEvent(new Event("storage"));
  };
  const auth = useContext(authContex);
  console.log(auth);
  useEffect(() => {}, []);
  return (
    // <nav className="d-flex align-items-center">
    //   <ul>
    //     <Link href="/Dashboard" className="">
    //       <li>Home</li>
    //     </Link>
    //     <Link href="/Dashboard/myspace">
    //       <li>Space</li>
    //     </Link>
    //     <Link
    //       href="#"
    //       onClick={() => {
    //         // auth.handleLogout();
    //         // dispatchRemoveToken();
    //         signOut({ callbackUrl: "/" });
    //       }}
    //     >
    //       <li> Logout</li>
    //     </Link>
    //     <Link
    //       href="#"
    //       onClick={() => {
    //         // auth.handleLogout();
    //         // dispatchRemoveToken();
    //         signOut({ callbackUrl: "/" });
    //       }}
    //     >
    //       <li> create Customer</li>
    //     </Link>
    //   </ul>
    // </nav>
    <div class="sidebar">
      <div class="brand-logo">
        <a href="index.html">
          <Image src={logo} alt="" />
        </a>
      </div>
      <ul class="nav">
        <li>
          <Link href="/Dashboard">
            <span class="icon-grid"></span>Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Dashboard/myspace">
            <span class="icon-folder"></span> My space
          </Link>
        </li>
        <li>
          <a href="#">
            <span class="icon-picture"></span>Photos
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon-people"></span>Shared Files
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <span class="icon-wallet"></span>Payment History
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <span class="icon-clock"></span>Recent
          </a>{" "}
        </li>
        <li>
          <Link
            href="#"
            onClick={() => {
              // auth.handleLogout();
              // dispatchRemoveToken();
              signOut({ callbackUrl: "/login" });
            }}
          >
            <span className="icon-logout"></span>Logout
          </Link>
        </li>
      </ul>
      {/* <Sidenav /> */}
    </div>
  );
}
