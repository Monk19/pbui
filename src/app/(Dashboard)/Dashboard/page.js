"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { authContex } from "@/authcontext/withAuthContext";
import { useRouter } from "next/navigation";
import authInterceptor from "@/api/checkAuthInterceptor";
import TopBar from "@/components/TopBar";
import PieGraph from "@/components/graphs/PieGraph";
import Image from "next/image";
import personImage from "../../../../public/image/user1.png";
function Dashboard() {
  // const session = useSession();
  const auth = useContext(authContex);
  const router = useRouter();
  const session = useSession();
  console.log("session in myspace-->", session?.data);
  // console.log("sessino--0-", session);
  const checkAuth = () => {
    if (!auth.auth) {
      // router.push("/login");
    }
  };
  useEffect(() => {
    console.log(auth);
    checkAuth();
    console.log("my session after login-->", session);
  }, []);
  return (
    <div>
      <TopBar
        user={session.data?.user ? session.data.user : { name: "", email: "" }}
      />
      <div class="row mt-3">
        <div class="col-md-12 col-lg-6">
          <div class="card-box">
            <div class="card-title">My Space</div>
            <div class="row">
              <div class="">
                <PieGraph />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="card-box">
            <div class="card-title">My Customers</div>
            <div class="customer-item">
              <div class="customer-name">
                <Image src={personImage} alt="" /> Venkatesh Prasad
              </div>
              <div className="badge badge-primary">500 MB</div>
            </div>
            <div className="customer-item">
              <div className="customer-name">
                <Image src={personImage} alt="" /> Srinath Kumar
              </div>
              <div className="badge badge-primary">300 MB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
