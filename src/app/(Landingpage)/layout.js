import React from "react";
import LandingPageNav from "@/components/LandingPageNav";
function LandingPageLayout({ children }) {
  return (
    <div className="wrapper">
      <LandingPageNav />
      <div className="login-container">{children}</div>
    </div>
  );
}

export default LandingPageLayout;
