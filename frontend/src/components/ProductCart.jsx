import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border p-4">
      <div className="relative">
        <img 
          src={product.images[activeIndex]} 
          alt={product.name} 
          className="w-full h-auto object-cover" 
        />
        <button className="border-2 px-4 py-2 rounded-full border-gray-400 absolute top-2 right-2 text-gray-500">
          <FaHeart />
        </button>
      </div>
      <div className="flex space-x-2 mt-2"> 
        {product.colors.map((color, index) => (
          <div
            key={index}
            className="h-8 w-8 rounded-full border-2 border-gray-300 cursor-pointer transition-all duration-300" // Added transition for hover effect
            style={{ backgroundColor: color }}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold hover:underline mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500 hover:underline">{product.description}</p>
      <p className="text-lg font-bold mt-1">{product.price[activeIndex]}</p>
      <div className="flex items-center mt-2">
        <div className="text-blue-600 font-bold text-xl">
          {"★".repeat(Math.max(0, product.rating[activeIndex]))}
          {"☆".repeat(Math.max(0, 5 - product.rating[activeIndex]))}
        </div>
        <span className="ml-2 text-gray-500">({product.reviews})</span>
      </div>
    </div>
  );
};
