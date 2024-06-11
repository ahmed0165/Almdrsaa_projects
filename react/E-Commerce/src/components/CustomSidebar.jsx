import React from "react";
import CustomProductCard from "./CustomProductCard";
import joyStick from "../assets/JoyStick.png";
import keyBoard from "../assets/keyBoard.png";
const CustomSidebar = ({ handleProductClick }) => {
  return (
    <aside className="w-1/4">
      <h2 className="text-xl font-bold mb-4">Flash Sales</h2>
      <div className="flex flex-col gap-4">
        <CustomProductCard
          image={joyStick}
          alt="Sale Product 1"
          discount="40%"
          title="Product 1"
          price="100$"
          originalPrice="150$"
          onClick={() => handleProductClick(5)}
        />
        <CustomProductCard
          image={keyBoard}
          alt="Sale Product 2"
          discount="30%"
          title="Product 2"
          price="200$"
          originalPrice="300$"
          onClick={() => handleProductClick(6)}
        />
      </div>
    </aside>
  );
};

export default CustomSidebar;
