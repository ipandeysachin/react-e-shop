import React from "react";

function Carousel() {
  return (
    <div className="relative">
      <div className="carousel carousel-center rounded-box m-2 lg:h-135 ">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Pizza"
          />
        </div>
      </div>

      <div className="absolute text-black 
      top-60 left-10 md:top-10 md:left-15 lg:h-70 lg:w-80
      flex flex-col justify-center">
        <div className="lg:text-2xl">
          Sachin | e-Shop
        </div>
        <div className="font-bold lg:text-3xl">
          WELCOME TO E-SHOP 
        </div>
        <div className="font-medium">
          Thousands+ Products 
        </div>
        <div>
          <button className="bg-red-400 text-white font-medium px-5 py-2 mt-2">
            SHOP NOW
          </button>
        </div>
      </div>

    </div>
  );
}

export default Carousel;
