import React, { useEffect, useState } from "react";
import axios from "axios";
function login() {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <div>
      login
      <div>
        <input type="text" name="userName" onChange={handleLogin} />
        <input type="passowrd" name="password" onChange={handleLogin} />
        <div
          onClick={() => {
            axios
              .post("http://localhost:3402/register", {
                userName,
                password,
              })
              .then((res) => {
                localStorage.set("tkn", res.data.token);
                console.log("session token--->", res.data.token);
              });
          }}
        >
          submit
        </div>
      </div>
    </div>
  );
}

export default login;
