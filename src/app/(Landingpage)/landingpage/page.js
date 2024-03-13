"use client";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authContex } from "../../../authcontext/withAuthContext";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import ptree from "../../../../public/image/pa-img.png";
import Image from "next/image";

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
    <div className="login-box">
      <section className=" py-3 py-md-5 py-xl-8">
        <div className="">
          <div className=" justify-content-center">
            <div className="">
              {/* <div className="mb-3">
                <div className="text-center mb-3">
                  <a href="#!">
                    <Image
                      className="akasha-logo"
                      src={ptree}
                      alt="Photographer app logo"
                      width="100"
                      height="50"
                      style={{ margin: "auto" }}
                    />
                  </a>
                </div>
              </div> */}
              <div className="card border border-light-subtle rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <form action="#!">
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="userName"
                            id="userName"
                            placeholder="name@example.com"
                            onChange={handleLogin}
                            required
                          />
                          <label for="userName" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={handleLogin}
                            placeholder="Password"
                            required
                          />
                          <label for="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12"></div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              signIn("credentials", {
                                callbackUrl: "/Dashboard",
                                userName: loginDetails.userName,
                                password: loginDetails.password,
                              });
                              console.log(
                                "my login request details--->",
                                loginDetails
                              );
                              router.push("/Dashboard");
                            }}
                          >
                            Log in
                          </button>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="true"
                          aria-expanded="false"
                        >
                          Select Role
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Photographer
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Customer
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                <a href="#!" className="link-secondary text-decoration-none">
                  Create new account
                </a>
                <a href="#!" className="link-secondary text-decoration-none">
                  Forgot password
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default login;
