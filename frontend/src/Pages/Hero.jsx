import React from "react";
import Nav from "../Components/nav";
import Carousel from "../Components/Carousel";
import CategorySort from "../Components/CategorySort";

function Hero() {
  return (
    <div className="bg-white">
      <div className="relative z-1">
        <Nav />
      </div>
      <div className="flex m-5 lg:ml-5 mt-0 mr-5">
        <div className="w-190 m-2 hidden lg:block">
          <CategorySort />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Hero;
