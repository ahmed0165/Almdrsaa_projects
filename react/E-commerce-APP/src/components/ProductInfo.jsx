// ProductInfo.jsx
import React from "react";
import { FaStar, FaHeart, FaShoppingCart, FaShareAlt } from "react-icons/fa";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <div className="flex items-center gap-2 my-2">
        <div className="text-yellow-500">
          {Array.from({ length: product.rating }, (_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <span className="text-gray-600">{product.reviews} reviews</span>
        <span className="text-gray-600">{product.sold} sold</span>
      </div>
      <p className="text-xl text-red-600 font-bold">${product.price}</p>
      <p className="my-4">{product.description}</p>
      <div className="my-4">
        <span>Colours:</span>
        <div className="flex gap-2 mt-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full cursor-pointer`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
          <FaShoppingCart /> Add to Cart
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
          <FaHeart /> Add to Wishlist
        </button>
      </div>
      <div className="my-4">
        <div className="flex gap-2 items-center">
          <FaShareAlt />
          <span>Share this product</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="my-4">
        <h3 className="font-bold">Free Delivery</h3>
        <p>Enter your postal code for Delivery Availability</p>
        <h3 className="font-bold">Return Delivery</h3>
        <p>Free 30-day Delivery Returns. Details</p>
      </div>
    </div>
  );
};

export default ProductInfo;
