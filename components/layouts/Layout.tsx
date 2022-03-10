import React from "react";
import Navbar from "../core/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto px-3">
        {children}
      </div>
    </>
  );
}

export default Layout;
