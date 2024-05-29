import HomePageImage from "../assets/HomePageImage.jpg";
import { Link } from "react-router-dom";

const HomePageHeader = () => {
  return (
    <div className="flex gap-9 ">
      <ul className="flex flex-col gap-2 p-5  border-r border-teal-400">
        <Link>Woman’s Fashion</Link>
        <Link>Men’s Fashion</Link>
        <Link>Electronics</Link>
        <Link>Home & Lifestyle</Link>
        <Link>Medicine</Link>
        <Link>Sports & Outdoor</Link>
        <Link>Baby’s & Toys</Link>
        <Link>Groceries & Pets</Link>
        <Link>Health & Beauty</Link>
      </ul>
      <img src={HomePageImage} alt="HomePage" className=" w-4/5 p-5" />
    </div>
  );
};
export default HomePageHeader;
