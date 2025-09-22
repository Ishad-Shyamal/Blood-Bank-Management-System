import React from "react";
import Customnavbar from "../components/Customnavbar/Customnavbar";

const NavBar = () => {
  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Donors", path: "/donors" },
    { label: "Inventory", path: "/inventory" },
    { label: "Requests", path: "/requests" },
    { label: "Reports", path: "/reports" }
  ];

  return (
    <div>
      <Customnavbar  brandPath='/home' brand="💉🩸 Blood Bank Management System" links={navLinks} />
    </div>
  );
};

export default NavBar;
