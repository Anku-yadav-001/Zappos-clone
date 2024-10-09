import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaShoppingCart, FaChevronLeft, FaChevronRight,FaSearch } from 'react-icons/fa';

import 
ZapposLogo from "../assets/Zappos-25-Years-Logo-Site.svg"
export const Navbar = () => {
  const sliderTexts = [
    "Top Boots & Sneakers for Fall 2024. Shop Our Favorites",
    "The Best Fall Deals of the Year!",
    "New Arrivals Just for You!"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderTexts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderTexts.length) % sliderTexts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full">
      <div className="bg-blue-50 text-center py-2 flex items-center justify-between">
        <button className="px-4" onClick={handlePrevSlide}>
          <FaChevronLeft size={20} className="text-gray-600" />
        </button>
        <div className="flex-1 overflow-hidden">
          <p
            className="text-sm whitespace-nowrap"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            {sliderTexts.map((text, index) => (
              <span key={index} className="inline-block w-full font-semibold text-[15px]">
                {text}
              </span>
            ))}
          </p>
        </div>
        <button className="px-4" onClick={handleNextSlide}>
          <FaChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      <div className='flex justify-center'>
        <div className='w-[94%]'>
      <div className="bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className='flex items-center space-x-6'>
         
          <div className="flex items-center">
            <img
              src={ZapposLogo}
              alt="Zappos Logo"
              className="h-16"
            />
          </div>

          <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center border-2 border-black rounded-full overflow-hidden">
        <span className="px-3 text-gray-400">
          <FaSearch />
        </span>
       
        <input
          type="text"
          placeholder="Search for shoes, clothes, etc."
          className="flex-grow px-2 py-2 text-gray-600 focus:outline-none"
        />
       
        <button className="bg-white px-5 py-2 text-black font-semibold border-l border-black rounded-r-full">
          Search
        </button>
      </div>
    </div>
   
    </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700">
              <FaUserCircle size={24} />
            </a>
            <a href="#" className="text-gray-700">
              <FaShoppingCart size={24} />
            </a>
          </div>
        </div>

        <div className='flex justify-between px-4 py-2'>
        <nav className="flex space-x-8 font-bold text-md">
            {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts'].map((link) => (
              <a href="#" className="text-gray-700 hover:underline" key={link}>
                {link}
              </a>
            ))}
          </nav>

            <div className='font-bold'>
            <a href="#" className="text-gray-700">Help & Support</a>
            </div>

        </div>
      </div>

        <hr className='border-1 w-full mb-4'/>

      <div className="bg-gray-400 text-center py-6 space-y-2">
        <h2 className="text-3xl font-semibold">The Big October Sale</h2>
        <p className="text-black text-xl">It’s an autumn dream come true. Explore HUGE deals up to 80% off!</p>
        <a href="#" className=" font-bold underline">Shop the Sale</a>
      </div>

      </div>
      </div>
    </header>
  );
};

