import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Zappos",
      links: [
        "About", "Zappos ONE", "Zappos for Good", "Zappos at Work", 
        "Get the Zappos Mobile App", "Amazon Prime Benefits", 
        "Zappos VIP Benefits", "Coupons & Sales", "Accessibility Statement"
      ],
    },
    {
      title: "Customer Service",
      links: [
        "FAQs", "Contact Info", "¿Ayuda en español?", 
        "Shipping And Returns Policy", "About Proposition 65"
      ],
    },
    {
      title: "Resources",
      links: [
        "Measurement Guide", "Size Conversion Chart", 
        "Measure Your Bra Size", "Associates Program", "Jobs", 
        "Press Kit & Brand Inquiries", "Site Map", "Take Survey"
      ],
    },
    {
      title: "Explore Zappos",
      links: [
        "Brands", "Clothing", "The Style Room", "Eyewear", 
        "New Arrivals", "Running", "Jackets", "Shoes", 
        "Watches", "Zappos Adaptive", "All Departments"
      ],
    },
  ];

  const footerBottomLinks = [
    "Terms of Use", "Privacy Policy", "Fur Policy", 
    "Interest-Based Ads", "24/7 Customer Service (800) 927-7671"
  ];

  return (
    <>
      <section className="bg-blue-100 py-8">
        <div className="w-[95%] m-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Join Our List, Get 10% Off</h2>
          <p className="mb-4 font-semibold text-center md:text-left">
            Sign up for Zappos emails—new subscribers get 10% off a future order! Plus, get early access to
            sales, coupons, and more. (One code per email address.)
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded-md w-full md:w-64"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md w-full md:w-auto">
              Join the Party
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-300 py-8 w-[95%] m-auto">
        <div className="flex justify-center md:justify-start space-x-6 my-10 text-black">
          <FaFacebookSquare size={24} />
          <RiInstagramFill size={24} />
        </div> 
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black mb-4 text-[17px]">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="hover:underline hover:text-blue-600 text-[15px] text-black">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-black pt-4 mt-8 text-xs text-gray-600 text-center flex flex-col md:flex-row justify-between items-center">
            <p className='text-md mb-4 md:mb-0'>© 2009-2024 - Zappos.com LLC or its affiliates</p>
            <div className="flex justify-center space-x-4">
              {footerBottomLinks.map((bottomLink, bottomLinkIdx) => (
                <a
                  key={bottomLinkIdx}
                  href="#"
                  className="hover:underline hover:text-blue-600 font-semibold text-[15px] text-black"
                >
                  {bottomLink} {bottomLinkIdx < footerBottomLinks.length - 1 && "/"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
