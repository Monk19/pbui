"use client";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authContex } from "../../authcontext/withAuthContext";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
function login() {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const auth = useContext(authContex);
  console.log(auth);
  const session = useSession();
  console.log("my session data--->", session);
  const router = useRouter();
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  useEffect(() => {
    console.log(auth.changeAuth);
  }, []);
  return (
    <div>
      login
      <div>
        <div>
          rad <input type="text" name="userName" onChange={handleLogin} />
        </div>
        <div>
          psdd
          <input type="passowrd" name="password" onChange={handleLogin} />
        </div>
        <div
          onClick={() => {
            // signIn({
            //   userName: loginDetails.userName,
            //   password: loginDetails.password,
            // });
            // signIn(
            //   {
            //     userName: loginDetails.userName,
            //     password: loginDetails.password,
            //   },
            //   { token: res.data.token }
            // );
            signIn("credentials", {
              redirect: false,
              userName: loginDetails.userName,
              password: loginDetails.password,
            });
            // axios
            //   .post("http://localhost:3402/api/login", {
            //     userName: loginDetails.userName,
            //     password: loginDetails.password,
            //   })
            //   .then((res) => {
            //     localStorage.setItem("tkn", res.data.token);
            //     console.log("session token--->", res.data.token);
            //     const token = res.data.token;

            //     auth.handlemyUserId(res.data.uId);
            //     auth.changeAuth(true);
            //     router.push("/Dashboard");
            //   });
          }}
        >
          submit
        </div>
      </div>
    </div>
  );
}

export default login;
