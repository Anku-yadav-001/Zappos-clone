import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaShoppingCart, FaChevronLeft, FaChevronRight,FaSearch,FaTimes, FaHeart } from 'react-icons/fa';
import { PiSignOutBold } from "react-icons/pi";
import 
ZapposLogo from "../assets/Zappos-25-Years-Logo-Site.svg"
import { SideBar } from './Sidebar';
import {useAuth0} from "@auth0/auth0-react"
import axios from "axios"
import { MapList } from './MapList';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const {loginWithRedirect, isAuthenticated,user,logout} = useAuth0()
  const sliderTexts = [
    "Top Boots & Sneakers for Fall 2024. Shop Our Favorites",
    "The Best Fall Deals of the Year!",
    "New Arrivals Just for You!"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggleMoreDetails,setMoreDetailsToggle] = useState(false)
  const [toggleHelpDesk,setToggleHelpDesk] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const menuItems = [
    'Shoes',
    'Clothing',
    'Bags',
    'Accessories',
    'Shop All New',
  ];

  const toggleDropdown = (item) => {
    setActiveItem(activeItem === item ? null : item); 
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderTexts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderTexts.length) % sliderTexts.length);
  };
 

  useEffect(() => {
  console.log(user )
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleUserAuth(){
    loginWithRedirect()
  }

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

          <div className="flex items-center space-x-6">
            {isAuthenticated?(<a href="#" className='text-gray-700'>
           <Link to="/favorite"> <FaHeart size={24}/></Link>
            </a>):""}
            <a href="#" className="text-gray-700">
              {
                isAuthenticated?<>
<button className='flex items-center space-x-1 border-2 rounded-full px-2 py-1 border-black' onClick={() => setMoreDetailsToggle(prev => !prev)}>
  <FaUserCircle size={24} onClick={handleUserAuth}/>
  <span>{user.nickname}</span>
</button>
                    <div className={`absolute right-20 mt-2 w-[200px] p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in ${!toggleMoreDetails?"hidden":""}`}>
                     <ul className='space-y-4 text-sm'>
                      <li>Signup for Zappos VIP</li>
                      <li>Account Overview</li>
                      <li>View Order/Return</li>
                      <li className='flex items-center border border-gray-400 px-2 py-1 rounded-md justify-between' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><span>Sign Out</span> <PiSignOutBold size={20}/></li>
                     </ul>
                    </div>
                    </>
                :(
                <FaUserCircle size={24} onClick={handleUserAuth}/>
              )
              }
            </a>
            <a href="#" className="text-gray-700">
              <FaShoppingCart size={24} onClick={toggleSidebar}/>
            </a>
          </div>
        </div>

        <div className='flex justify-between px-4 py-2'>
        <div className="relative">
        <nav className="flex space-x-8 font-bold text-md items-center">
  {['New', 'Women', 'Men', 'Kids', 'Collections', 'Brands', 'Sale', 'Gifts'].map((link) => (
    <a
      href="#"
      className={`text-gray-700 hover:underline relative ${activeItem === link ? 'text-white border-2 border-black px-4 py-1 bg-black rounded-full' : ''}`}
      key={link}
      onClick={() => toggleDropdown(link)}
    >
      {link}
      {activeItem === link && (
        <div className="absolute left-0 top-full mt-2 w-[900px] p-6 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in">
          <div className="grid grid-cols-4 gap-6">
            {link === 'New' && (
              <MapList title="New by Category" arr={menuItems}/>
            )}

            {link === 'Women' && (
             <MapList title="Woman's"/>
            )}

            {link === 'Men' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Men's Clothing</h4>
                  <ul>
                    {['T-shirts', 'Shirts', 'Jeans', 'Jackets'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {link === 'Kids' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Kids' Clothing</h4>
                  <ul>
                    {['Tops', 'Pants', 'Dresses', 'Outerwear'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {link === 'Collections' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Latest Collections</h4>
                  <ul>
                    {['Fall Collection', 'Winter Collection', 'Summer Sale'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {link === 'Brands' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Popular Brands</h4>
                  <ul>
                    {['Nike', 'Adidas', 'Puma', 'Reebok'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">New Brands</h4>
                  <ul>
                    {['Allbirds', 'Rothy\'s', 'Veja', 'Hoka One One'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {link === 'Sale' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Trending Sales</h4>
                  <ul>
                    {['Up to 50% off', 'Clearance', 'Limited Time Offers', 'Seasonal Sale'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Shop by Category</h4>
                  <ul>
                    {['Clothing', 'Shoes', 'Accessories', 'Home & Living'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {link === 'Gifts' && (
              <>
                <div>
                  <h4 className="font-bold mb-2 text-black">Gift Ideas</h4>
                  <ul>
                    {['For Him', 'For Her', 'For Kids', 'For Home'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Shop by Occasion</h4>
                  <ul>
                    {['Birthday Gifts', 'Holiday Gifts', 'Anniversary Gifts', 'Wedding Gifts'].map((item) => (
                      <li key={item} className="mb-1">
                        <a href="#" className="text-gray-600 hover:text-black">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </a>
  ))}
</nav>

    </div>

            <div className='font-bold'>
            <a href="#" className={`text-gray-700 ${toggleHelpDesk?"border border-black rounded-full bg-black text-gray-200 px-4 py-2 ":""}`} onClick={() => setToggleHelpDesk(prev => !prev)}>Help & Support</a>
            </div>

            <div className={`absolute  right-12 mt-10 w-[200px] p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in ${!toggleHelpDesk?"hidden":""}`}>
                     <ul className='space-y-4 text-sm'>
                      <Link to="/return-trans-options"><li>Return Options</li></Link>
                      <li>Get Help</li>
                      <li>FAQs</li>
                      <li>Give Us Feedback</li>
                     </ul>
                    </div>

        </div>
      </div>

        <hr className='border-1 w-full mb-4'/>
{/* 
      <div className="bg-gray-400 text-center py-6 space-y-2">
        <h2 className="text-3xl font-semibold">The Big October Sale</h2>
        <p className="text-black text-xl">It’s an autumn dream come true. Explore HUGE deals up to 80% off!</p>
        <a href="#" className=" font-bold underline">Shop the Sale</a>
      </div> */}

      </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-[35%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleSidebar}
          >
            <FaTimes size={24} />
          </button>

          <SideBar/>
        </div>
      </div>
    </header>
  );
};

