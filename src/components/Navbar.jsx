import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    console.log("Navbar is rendering..."); 
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white px-10 py-4 flex justify-between items-center z-50">
      
      {/* Zomato Logo */}
      <h1 className="text-3xl font-bold italic">zomato</h1>

      {/* Right - Navigation Links */}
      <ul className="flex gap-8 text-lg">
        <li>
          <NavLink to="/investor" className="text-gray-400">
            Investors Relations
          </NavLink>
        </li>
        <li>
          <NavLink to="/addrest" className="text-gray-400">
            Add Restaurant
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-gray-400">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="text-gray-400">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
