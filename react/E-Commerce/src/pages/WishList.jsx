import React from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Wishlist = ({
  id,
  image,
  alt,
  discount,
  title,
  price,
  originalPrice,
  onPreview,
}) => {
  const { wishlist } = useAuth();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto py-8 px-6">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              <div className="relative">
                {item.discount && (
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-xs p-1 rounded-br">
                    -{item.discount}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-red-500 mt-1">${item.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
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
                  Add To Cart
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
