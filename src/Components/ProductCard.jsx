import React from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Product Image */}
      <img
        src="https://via.placeholder.com/200"
        alt="Meetion MT-M362 USB Optical Mouse"
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold mt-4">Meetion MT-M362 USB Optical Mouse</h2>

      {/* Product Specifications */}
      <ul className="mt-2 text-gray-600">
        <li>Number of buttons: 3+1 (scroll wheel)</li>
        <li>Resolution: 800-1600dpi</li>
        <li>Max. Tracking Speed: 20 ips</li>
        <li>Interface: USB</li>
      </ul>

      {/* Price */}
      <div className="text-red-500 text-xl font-semibold mt-4">320৳</div>

      {/* Buy Now Button */}
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out">
        <FaShoppingCart className="mr-2" />
        Buy Now
      </button>

      {/* Add to Compare */}
      <button className="mt-2 w-full border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300 ease-in-out">
        <FaCheck className="mr-2" />
        See More       
      </button>
    </div>
  );
};

export default ProductCard;
