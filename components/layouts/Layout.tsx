import React from "react";
import Navbar from "../core/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <div>
        {children}
      </div>
    </>
  );
}

export default Layout;
