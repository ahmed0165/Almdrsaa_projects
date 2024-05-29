import React from "react";
import { useNavigate } from "react-router-dom";
import FillEye from "../assets/FillEye.png";
import FillHeart from "../assets/FillHeart.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";

const CustomProductCard = ({
  id,
  image,
  alt,
  discount,
  title,
  price,
  originalPrice,
  onPreview,
}) => {
  const { addToWishlist } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist({
      id,
      image,
      alt,
      discount,
      title,
      price,
      originalPrice,
    });
  };

  return (
    <div
      className="relative flex flex-col items-center border p-4 rounded-md hover:shadow-lg mt-5"
      onClick={handleProductClick}
    >
      <img
        src={image}
        alt={alt}
        className="mb-4 p-7 h-[150px] overflow-hidden flex items-center justify-center"
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreview();
          }}
        >
          <img src={FillEye} alt="Preview" className="w-6 h-6" />
        </button>
        <button onClick={handleAddToWishlist}>
          <img src={FillHeart} alt="Favorite" className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
        {discount}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-xl font-semibold mb-2">{price}</div>
      <div className="text-gray-500 line-through">{originalPrice}</div>
      <div className="flex items-center gap-1 text-yellow-500">
        <FaStar key={1} />
        <FaStar key={2} />
        <FaStar key={3} />
        <FaStar key={4} />
      </div>
      <button
        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-100 text-white opacity-0 hover:opacity-100 flex items-center justify-center h-10 rounded-b-md"
        onClick={(e) => {
          e.stopPropagation();
          addToCart({
            id,
            image,
            alt,
            discount,
            title,
            price,
            originalPrice,
          });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CustomProductCard;
