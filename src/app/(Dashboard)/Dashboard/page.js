"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
function Dashboard() {
  return (
    <div>
      
      <div>From Dashboard</div>
      <div
        onClick={() => {
          const headers = {
            Authorization: `Bearer ${localStorage.getItem("tkn")}`,
          };

          axios
            .get("http://localhost:3402/checkauth", { headers })
            .then((res) => {
              console.log("response Status Code", res.status);
              console.log("request data", res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Check auth
      </div>
    </div>
  );
}

export default Dashboard;
