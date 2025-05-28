import React from "react";
import SearchBar from "../utility/searchBar";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import CategoireList from "./CategoireList";

function Nav() {
  return (
    <>
      <div className="navbar bg-white shadow-sm 
      flex justify-center items-center text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-xl lg:hidden"
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
              bg-base-100 rounded-box z-1 mt-3 w-30 border p-2 shadow"
            >
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> E-Shop </a>
        </div>
        <div className="m-3 hidden md:block">
          <center>
            <SearchBar />
          </center>
        </div>
        <div className="navbar-end">
          <a className="">
            <FaCartShopping className="text-2xl" />
          </a>
          <a className="p-5">
            <CgProfile className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="m-2 md:hidden lg:hidden">
        <center>
          <SearchBar />
        </center>
      </div>

      <div
        className="navbar-cente hidden md:hidden 
      lg:flex justify-around text-black items-center"
      >
        <ul className="menu menu-horizontal px-1">
          <li>
            <a> Home </a>
          </li>
          <li>
            <details>
              <summary> Shop </summary>
              <ul className="p-2 w-50 bg-white">
                <li>
                  <a> Electronics </a>
                </li>
                <li>
                  <a> Fashion </a>
                </li>
                <li className="text-nowrap">
                  <a> Home & Kitchen </a>
                </li>
                <li>
                  <a> Beauty </a>
                </li>
                <li>
                  <a> Sports </a>
                </li>
                <li>
                  <a> Automotive </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a> Contact </a>
          </li>
          <li>
            <a> About </a>
          </li>
        </ul>
      </div>
      <div className=" lg:hidden ">
        <center>
          <CategoireList />
        </center>
      </div>
    </>
  );
}

export default Nav;
/* Move the search bar into the center of the navbar for md and larger screens */
