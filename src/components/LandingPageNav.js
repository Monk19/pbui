import React from "react";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import "../../public/assets/main.scss";
import Link from "next/link";
function LandingPageNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <a class="navbar-brand" href="index.html">
        <Image src={logo} alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link href="/landingpage/home">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/landingpage/features">Features</Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li> */}
          <li class="nav-item">
            <Link href="/login" className="pintr">
              Login
            </Link>
          </li>
          {/* <!-- <li class="nav-item">
            <a class="nav-link signup-btn" href="signup.html">Signup</a>
          </li> --> */}
        </ul>
      </div>
    </nav>
  );
}

export default LandingPageNav;
