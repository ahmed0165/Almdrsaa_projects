import React from "react";
import { FaStar } from "react-icons/fa";

const RelatedProducts = ({ products }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Related Items</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {products.map((product, index) => (
          <div key={index} className="min-w-[200px] p-4 border rounded-md">
            <div className="h-[150px] overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: product.rating }, (_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <p className="text-red-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
