import Link from "next/link";
import Sidenav from "@/components/Sidenav";
import "../../../public/assets/main.scss";
import Image from "next/image";
import logo from "../../../public/image/logo.png";
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className="wrapper">
      <Sidenav />
      <div className="content-wrapper">{children}</div>
    </div>
  );
}
//  <div class="top-bar">
//    <button
//      id="sidebarToggleTop"
//      class="btn btn-link d-md-none rounded-circle mr-3"
//    >
//      <span class="icon-menu"></span>
//    </button>

//    <div class="search-bar">
//      <input
//        type="text"
//        class="form-control bg-light border-0 small"
//        placeholder="Search for..."
//      />
//      <i class="icon-magnifier search-icon"></i>
//    </div>
//    <ul class="navbar-nav ml-auto">
//      <li class="nav-item dropdown no-arrow d-sm-none">
//        <a
//          class="nav-link dropdown-toggle"
//          href="#"
//          id="searchDropdown"
//          role="button"
//          data-toggle="dropdown"
//          aria-haspopup="true"
//          aria-expanded="false"
//        >
//          <i class="icon-search"></i>
//        </a>
//        <div
//          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
//          aria-labelledby="searchDropdown"
//        >
//          <form class="form-inline mr-auto w-100 navbar-search">
//            <div class="input-group">
//              <input
//                type="text"
//                class="form-control bg-light border-0 small"
//                placeholder="Search for..."
//                aria-label="Search"
//                aria-describedby="basic-addon2"
//              />
//              <div class="input-group-append">
//                <button class="btn btn-primary" type="button">
//                  <i class="fas fa-search fa-sm"></i>
//                </button>
//              </div>
//            </div>
//          </form>
//        </div>
//      </li>

//      <li class="nav-item dropdown no-arrow">
//        <a
//          class="nav-link dropdown-toggle fs-18"
//          href="#"
//          id="alertsDropdown"
//          role="button"
//          data-toggle="dropdown"
//          aria-haspopup="true"
//          aria-expanded="false"
//        >
//          <i class="icon-question"></i>
//        </a>
//      </li>

//      <li class="nav-item dropdown no-arrow">
//        <a
//          class="nav-link dropdown-toggle fs-18"
//          href="#"
//          id="messagesDropdown"
//          role="button"
//          data-toggle="dropdown"
//          aria-haspopup="true"
//          aria-expanded="false"
//        >
//          <i class="icon-bell"></i>
//        </a>
//        {/* <!-- <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
//               aria-labelledby="messagesDropdown">

//             </div> --> */}
//      </li>

//      <li class="nav-item dropdown no-arrow user-menu">
//        <a
//          class="nav-link dropdown-toggle"
//          href="#"
//          id="userDropdown"
//          role="button"
//          data-toggle="dropdown"
//          aria-haspopup="true"
//          aria-expanded="false"
//        >
//          <span class="user-avatar-icon">VK</span>
//          <span class="d-none d-lg-inline text-gray-600 small">VIJAY KUMAR</span>
//        </a>
//        <div
//          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
//          aria-labelledby="userDropdown"
//        >
//          <a class="dropdown-item" href="#">
//            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
//            Profile
//          </a>
//          <a class="dropdown-item" href="#">
//            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
//            Settings
//          </a>
//          <a class="dropdown-item" href="#">
//            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
//            Activity Log
//          </a>
//          <div class="dropdown-divider"></div>
//          <a class="dropdown-item" href="login.html">
//            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//            Logout
//          </a>
//        </div>
//      </li>
//    </ul>
//  </div>;
