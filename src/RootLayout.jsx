import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function RootLayout() {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>My Application</h1>
      <Link to="/">Home</Link> | 
      <Link to="services">Services</Link>
      <hr />
      <Outlet />
      <h3 style={{ backgroundColor: "silver" }}>
        Copyright 2026. All rights reserved.
      </h3>
    </div>
  );
}
