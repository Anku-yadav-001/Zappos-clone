import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaShoppingCart, FaChevronLeft, FaChevronRight, FaSearch, FaTimes, FaHeart } from 'react-icons/fa';
import { PiSignOutBold } from "react-icons/pi";
import
ZapposLogo from "../assets/Zappos-25-Years-Logo-Site.svg"
import { SideBar } from './Sidebar';
import axios from "axios"
import { MapList } from './MapList';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
export const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  const username = localStorage.getItem("userName")
  const sliderTexts = [
    "Top Boots & Sneakers for Fall 2024. Shop Our Favorites",
    "The Best Fall Deals of the Year!",
    "New Arrivals Just for You!"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggleMoreDetails, setMoreDetailsToggle] = useState(false)
  const [toggleHelpDesk, setToggleHelpDesk] = useState(false)
  const [toogleSignin, setToggleSignin] = useState(false)

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

    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post("https://zappos-clone.onrender.com/auth/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userName");
      localStorage.removeItem("isAuthenticated")
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

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
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4">
            <div className='flex items-center space-x-6 mb-4 md:mb-0'>
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
              {isAuthenticated ? (
                <a href="#" className='text-gray-700'>
                  <Link to="/favorite">
                    <FaHeart size={24} />
                  </Link>
                </a>
              ) : ""}
              <a href="#" className="text-gray-700">
                {
                  isAuthenticated ? (
                    <>
                      <button className='flex items-center space-x-1 border-2 rounded-full px-2 py-1 border-black' onClick={() => setMoreDetailsToggle(prev => !prev)}>
                        <FaUserCircle size={24} />
                        <span>{username}</span>
                      </button>
                      <div className={`absolute right-20 mt-2 w-[200px] p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in ${!toggleMoreDetails ? "hidden" : ""}`}>
                        <ul className='space-y-4 text-sm'>
                          <li>Signup for Zappos VIP</li>
                          <li>Account Overview</li>
                          <li>View Order/Return</li>
                          <li className='flex items-center border border-gray-400 px-2 py-1 rounded-md justify-between' onClick={handleLogout}>
                            <span>Sign Out</span> <PiSignOutBold size={20} />
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <FaUserCircle size={24} onClick={() => setToggleSignin(prev => !prev)} />
                      <div className={`absolute right-12 mt-2 w-[200px] p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in ${!toogleSignin ? "hidden" : ""}`}>
                        <ul className='space-y-4 text-sm'>
                          <li><Link to="/register">Create Zappos Account</Link></li>
                        </ul>
                      </div>
                    </>
                  )
                }
              </a>
              <a href="#" className="text-gray-700">
                <FaShoppingCart size={24} onClick={toggleSidebar} />
              </a>
            </div>
          </div>
  
          <div className='flex flex-col md:flex-row justify-between px-4 py-2'>
            <div className="relative">
              <nav className="flex flex-wrap space-x-8 font-bold text-md items-center">
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
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                          {link === 'New' && (
                            <MapList title="New by Category" arr={menuItems} />
                          )}
  
                          {link === 'Women' && (
                            <MapList title="Woman's Clothing" arr={['Tops', 'Pants', 'Dresses', 'Outerwear']} />
                          )}
  
                          {link === 'Men' && (
                            <MapList title={"Men's Clothing"} arr={['T-shirts', 'Shirts', 'Jeans', 'Jackets']} />
                          )}
  
                          {link === 'Kids' && (
                            <MapList title="Kids' Clothing" arr={['Tops', 'Pants', 'Dresses', 'Outerwear']} />
                          )}
  
                          {link === 'Collections' && (
                            <MapList title={"Latest Collections"} arr={['Fall Collection', 'Winter Collection', 'Summer Sale']} />
                          )}
  
                          {link === 'Brands' && (
                            <>
                              <MapList title="Popular Brands" arr={['Nike', 'Adidas', 'Puma', 'Reebok']} />
                              <MapList title="New Brands" arr={['Allbirds', 'Rothy\'s', 'Veja', 'Hoka One One']} />
                            </>
                          )}
  
                          {link === 'Sale' && (
                            <>
                              <MapList title="Trending Sales" arr={['Up to 50% off', 'Clearance', 'Limited Time Offers', 'Seasonal Sale']} />
                              <MapList title="Shop by Category" arr={['Clothing', 'Shoes', 'Accessories', 'Home & Living']} />
                            </>
                          )}
  
                          {link === 'Gifts' && (
                            <>
                              <MapList title="Gift Ideas" arr={['For Him', 'For Her', 'For Kids', 'For Home']} />
                              <MapList title="Shop by Occasion" arr={['Birthday Gifts', 'Holiday Gifts', 'Anniversary Gifts', 'Wedding Gifts']} />
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
              <a href="#" className={`text-gray-700 ${toggleHelpDesk ? "border border-black rounded-full bg-black text-gray-200 px-4 py-2 " : ""}`} onClick={() => setToggleHelpDesk(prev => !prev)}>Help & Support</a>
            </div>
  
            <div className={`absolute right-12 mt-10 w-[200px] p-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 animate-fade-in ${!toggleHelpDesk ? "hidden" : ""}`}>
              <ul className='space-y-4 text-sm'>
                <li><Link to="/return-trans-options">Return Options</Link></li>
                <li><Link to="/customer-service">Get Help</Link></li>
                <li>FAQs</li>
                <li>Give Us Feedback</li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr className='border-1 w-full mb-4' />
  
      </div>
    </div>
    <div
      className={`fixed top-0 right-0 h-full w-[35%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="p-4">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleSidebar}
        >
          <FaTimes size={24} />
        </button>
  
        <SideBar />
      </div>
    </div>
  </header>
    );
};

