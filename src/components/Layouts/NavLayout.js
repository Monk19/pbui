import React from "react";

function NavLayout({ children }) {
  return (
    <div>
      <div className="nested-layout-trail">
        <div>This</div>
        <div>{children}</div>
        <div>Sparta</div>
      </div>
    </div>
  );
}

export default NavLayout;
