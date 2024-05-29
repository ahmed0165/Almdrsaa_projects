import React from "react";
import HomePageHeader from "../components/HomePageHeader";
import CustomHeaderSection from "../components/CustomHeaderSection";
import ProductCard from "../components/ProductCard";
import joyStick from "../assets/JoyStick.png";
import keyBoard from "../assets/keyBoard.png";
import LCD from "../assets/LCD.png";
import HalfChair from "../assets/HalfChair.png";
import SmallChair from "../assets/SmallChair.png";
import Arrow from "../components/Arrow";
import CustomCategory from "../components/CustomCategory";
import CategoryCellPhone from "../assets/CategoryCellPhone.png";
import CategoryComputer from "../assets/CategoryComputer.png";
import CategoryCamera from "../assets/CategoryCamera.png";
import CategoryGamepad from "../assets/CategoryGamepad.png";
import CategoryHeadphone from "../assets/CategoryHeadphone.png";
import CategorySmartWatch from "../assets/CategorySmartWatch.png";
import CustomProductCard from "../components/CustomProductCard";
import TheNorthCost from "../assets/TheNorthCost.png";
import Gucci from "../assets/Gucci.png";
import RGBCPU from "../assets/RGBCPU.png";
import SmallBookSHelf from "../assets/SmallBookSHelf.png";
import Frame600 from "../assets/Frame600.png";
import OurProducts from "./OurProducts";
import NewArrival from "../components/NewArrival";
import { useAuth } from "../context/AuthContext";
import DryFoodDog from "../assets/DryFoodDog.png";
import CanonCamera from "../assets/CanonCamera.png";
import lap from "../assets/lap.png";
import jacket from "../assets/jacket.png";
import shoes from "../assets/shoes.png";
import car from "../assets/car.png";
import jack from "../assets/jack.png";

const HomePage = () => {
  const { addToWishlist } = useAuth();

  const products = [
    {
      id: 1,
      image: joyStick,
      alt: "joystick",
      discount: "40%",
      title: "Cart With Flat Discount",
      price: "$120",
      originalPrice: "$160",
    },
    {
      id: 2,
      image: keyBoard,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 3,
      image: LCD,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
    },
    {
      id: 4,
      image: SmallChair,
      alt: "SmallChair",
      discount: "25%",
      title: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
    },
    {
      id: 5,
      image: HalfChair,
      alt: "HalfChair",
      discount: "25%",
      title: "S-Series Com",
      price: "$370",
      originalPrice: "$400",
    },
  ];
  const customProducts = [
    {
      id: 6,
      image: TheNorthCost,
      alt: "thenorthcoast",
      discount: "40%",
      title: "Cart With Flat Discount",
      price: "$120",
      originalPrice: "$160",
    },
    {
      id: 7,
      image: Gucci,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 8,
      image: RGBCPU,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
    },
    {
      id: 9,
      image: SmallBookSHelf,
      alt: "SmallChair",
      discount: "25%",
      title: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
    },
  ];
  const ourProducts = [
    {
      id: 10,
      image: DryFoodDog,
      alt: "thenorthcoast",
      discount: "40%",
      title: "Cart With Flat Discount",
      price: "$120",
      originalPrice: "$160",
    },
    {
      id: 11,
      image: CanonCamera,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 12,
      image: lap,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 13,
      image: jacket,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 14,
      image: jack,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 15,
      image: shoes,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 16,
      image: car,
      alt: "keyBoard",
      discount: "35%",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
    },
    {
      id: 17,
      image: LCD,
      alt: "LCD",
      discount: "30%",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-lg flex flex-col align-middle justify-between">
      <HomePageHeader />
      <CustomHeaderSection title="Today’s" />
      <Arrow />
      <div className="flex gap-5">
        {products.map((product) => (
          <ProductCard
            products={products}
            key={product.id}
            id={product.id}
            {...product}
            onAddToWishlist={() => addToWishlist(product)}
            onPreview={() => console.log("Preview", product)}
            onClick={() => console.log("Product Clicked", product)}
          />
        ))}
      </div>
      <CustomHeaderSection title="Categories" />
      <Arrow title="Browse By Category" />
      <div className="flex gap-7">
        <CustomCategory image={CategoryCellPhone} title="Phones" />
        <CustomCategory image={CategoryComputer} title="Computers" />
        <CustomCategory image={CategorySmartWatch} title="SmartWatch" />
        <CustomCategory image={CategoryCamera} title="Camera" />
        <CustomCategory image={CategoryHeadphone} title="Headphone" />
        <CustomCategory image={CategoryGamepad} title="GamePad" />
      </div>
      <CustomHeaderSection title="This Month" />
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Best Selling Products</h1>
        <button className="bg-[#DB4444] text-white w-1/6 p-2 rounded-sm">
          View All
        </button>
      </div>
      <div className="flex gap-5">
        {customProducts.map((product) => (
          <CustomProductCard
            products={customProducts}
            productId={product.id}
            key={product.id}
            id={product.id}
            {...product}
            onAddToWishlist={() => addToWishlist(product)}
            onPreview={() => console.log("Preview", product)}
            onClick={() => console.log("Product Clicked", product)}
          />
        ))}
      </div>

      <img src={Frame600} alt="Frame600" />
      <div className="flex justify-center flex-col">
        <CustomHeaderSection title="Our Products" />
        <Arrow title="Explore Our Products" />
        <div className=" grid grid-cols-4 gap-5 mb-5">
          {ourProducts.map((product) => (
            <OurProducts
              products={ourProducts}
              productId={product.id}
              key={product.id}
              id={product.id}
              {...product}
              onAddToWishlist={() => addToWishlist(product)}
              onPreview={() => console.log("Preview", product)}
              onClick={() => console.log("Product Clicked", product)}
            />
          ))}
        </div>
        <button className="bg-[#DB4444] text-white w-1/6 p-2 rounded-sm self-center">
          View All Products
        </button>
      </div>
      <NewArrival />
    </div>
  );
};

export default HomePage;
