import React, { useState, useRef } from "react";
import image01 from "../assets/images/house_morning_01_v02.jpeg";
import image02 from "../assets/images/house_night_04.jpeg";
import image03 from "../assets/images/garden_01_v02.jpeg";
import image04 from "../assets/images/living_01.jpeg";
import image05 from "../assets/images/kitchen_01.jpeg";
import image06 from "../assets/images/house_afternoon_06_v02.jpg";

const images = [image01, image02, image03, image04, image05, image06];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef(null); // Create a reference for the Cards component

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBooking = () => {
    // Scroll to the Cards component when the button is clicked
    cardsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="flex flex-col items-center relative text-white text-center">
        {/* Title and Subtitle */}
        <h1 className="text-[4rem] z-10 top-[5rem] font-bold absolute">
          อู่ทองพักดี
        </h1>
        <p className="text-[1rem] z-10 top-[12rem] absolute mt-2">
          ที่พักในบรรยากาศเงียบสงบ
        </p>
        <p className="text-[1rem] z-10 top-[9rem] absolute mt-2">
          โทร 0811565667
        </p>

        {/* Custom Carousel */}
        <div className="relative w-full h-[100vh] overflow-hidden bg-black">
          <div
            className="flex items-center transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100vh] object-cover object-top flex-shrink-0"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 text-white p-3 rounded-full shadow-md"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 text-white p-3 rounded-full shadow-md"
          >
            &#10095;
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleBooking}
          className="mt-6 p-3 bg-gray-900 text-white rounded-full absolute top-[15rem] hover:bg-black"
        >
          จองเลย
        </button>
      </header>

      {/* Cards Component */}
      <div ref={cardsRef}>
        {/* Cards content here */}
      </div>
    </>
  );
}

export default Header;
