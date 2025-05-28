import React from "react";

function CategoireList() {
  return (
    <div className="navbar-center">
      <ul className="menu flex px-2">
        <div className="w-95 flex justify-start
        overflow-auto lg:hidden">

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
        </div>
      </ul>
    </div>
  );
}

export default CategoireList;
