import React from "react";

function CategorySort() {
  return (
    <div className="border-1 border-black text-black bg-slate-200">
      <ul>
        <header className="mb-2 bg-red-400 p-2 text-white font-bold">
            <h1>
                SHOP BY CATEGORIES
            </h1>
        </header>
        <div className="p-2 ml-2 mb-2">
          <li className="mb-2">
            <a> Electronics </a>
          </li>
          <li className="mb-2">
            <a> Fashion </a>
          </li>
          <li className="text-nowrap mb-2">
            <a> Home & Kitchen </a>
          </li>
          <li className="mb-2">
            <a> Beauty </a>
          </li>
          <li className="mb-2">
            <a> Sports </a>
          </li>
          <li className="mb-1">
            <a> Automotive </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default CategorySort;
