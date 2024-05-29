// ProductImages.jsx
import React from "react";

const ProductImages = ({ image, selectedImage, setSelectedImage }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
        <img src={selectedImage} alt="Selected Product" className="w-full" />
      </div>
      <div className="flex gap-2 justify-center">
        <img
          src={image}
          alt={`Product`}
          className="w-16 cursor-pointer border-2 border-gray-200"
          onClick={() => setSelectedImage(image)}
        />
      </div>
    </div>
  );
};

export default ProductImages;
