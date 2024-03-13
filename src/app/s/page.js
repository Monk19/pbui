import React from "react";
import ptree from "../../../public/image/pa-img.png";
import Image from "next/image";

function s() {
  return (
    <section className="bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="mb-3">
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
            </div>
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <form action="#!">
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                        <label for="email" className="form-label">
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
                          value=""
                          placeholder="Password"
                          required
                        />
                        <label for="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary"
                          for="remember_me"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
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
                        Photographer
                      </button>
                      <ul className="dropdown-menu">
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
  );
}

export default s;
