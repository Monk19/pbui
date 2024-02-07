"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { authContex } from "@/authcontext/withAuthContext";
import { useRouter } from "next/navigation";
import authInterceptor from "@/api/checkAuthInterceptor";
function Dashboard() {
  const session = useSession();
  const auth = useContext(authContex);
  const router = useRouter();
  console.log("sessino--0-", session);
  const checkAuth = () => {
    if (!auth.auth) {
      router.push("/login");
    }
  };
  useEffect(() => {
    console.log(auth);
    checkAuth();
  }, []);
  return (
    <div>
      <div>From Dashboard</div>
      <div
        onClick={() => {
          const headers = {
            Authorization: `Bearer ${localStorage.getItem("tkn")}`,
          };

          const a = authInterceptor("/checkauth", { headers });
          console.log(a);
        }}
      >
        Check auth
      </div>
    </div>
  );
}

export default Dashboard;
