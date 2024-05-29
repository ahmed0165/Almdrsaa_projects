import { Link } from "react-router-dom";
import UnionImage from "../assets/Union.png";
import searchOutline from "../assets/search-outline.jpg";
const BlogHeader = () => {
  return (
    <div className="display: flex gap-5 justify-around mb-12">
      <div className="w-1/5  flex  justify-between">
        <img src={UnionImage} alt="logo image" />
        <p className="text-2xl font-bold">Blog</p>
      </div>
      <div className="w-4/5  flex  justify-between items-center">
        <Link to="/" className="w-4/5 text-center ">
          Home
        </Link>
        <label className="relative block bg-[#F4F4F5]">
          <input
            className=" placeholder:text-slate-400 block bg-[#F4F4F5] w-full  rounded-md py-2 pl-9 pr-3 shadow-sm  sm:text-sm"
            placeholder="Search"
            type="search"
            name="search"
          />
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 right-3 flex items-center pl-2 ">
            <img
              src={searchOutline}
              alt="search-icon"
              className="mix-blend-multiply"
            />
          </span>
        </label>
      </div>
    </div>
  );
};
export default BlogHeader;
