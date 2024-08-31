import React from 'react';

const ProductDetails = () => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-wrap justify-between">
        {/* Product Image */}
        <div className="w-full md:w-1/3 p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Product"
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Intel Arc A750 Graphics Card
          </h1>
          <p className="mt-4 text-gray-600">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Model: Arc A750</li>
            <li>28 Xe Cores, 448 XMX Engines</li>
            <li>Xe HPG Microarchitecture</li>
            <li>256-Bit Memory Interface</li>
            <li>Interface: HDMI 2.1, DisplayPort 2.0</li>
          </ul>

          {/* Price and Purchase Options */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-2xl font-semibold text-[#FFA62F]">29,500৳</div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <input
              type="number"
              defaultValue="1"
              min="1"
              className="w-16 p-2 border border-gray-300 rounded-lg mr-4 text-center"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Tabs for additional information */}
      <div className="flex mt-8 border-b-2 border-gray-200">
        <button className="px-6 py-2 text-gray-800 font-semibold border-b-2 border-[#FFA62F]">
          Specification
        </button>
        <button className="px-6 py-2 text-gray-600">Description</button>
        <button className="px-6 py-2 text-gray-600">Questions (6)</button>
        <button className="px-6 py-2 text-gray-600">Reviews (1)</button>
      </div>

      {/* Specifications Section */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Specification</h2>
        <table className="w-full table-auto border border-gray-300">
          <tbody>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Type</th>
              <td className="px-4 py-2">GDDR6</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Size</th>
              <td className="px-4 py-2">8 GB</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Resolution</th>
              <td className="px-4 py-2">7680 × 4320 @60Hz</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Memory Clock</th>
              <td className="px-4 py-2">2050 MHz</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">BUS Type</th>
              <td className="px-4 py-2">PCI Express 4.0 x16</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Memory Interface</th>
              <td className="px-4 py-2">256 bit</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Connectors</th>
              <td className="px-4 py-2">1 x 8-Pin, 1 x 6-Pin</td>
            </tr>
            <tr className="border-b">
              <th className="px-4 py-2 text-left bg-gray-100">Recommended PSU</th>
              <td className="px-4 py-2">600 W</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
