import React from "react";
import Nav from "../Components/nav";
import CategoireList from "../Components/CategoireList";
import SearchBar from "../utility/searchBar";
import Carousel from "../Components/Carousel";

function Hero() {
  return (
    <div>
      <Nav />
      <div className="mt-5">
        <Carousel />
      </div>
    </div>
  );
}

export default Hero;
