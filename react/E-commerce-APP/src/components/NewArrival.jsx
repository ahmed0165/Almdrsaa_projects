import CustomHeaderSection from "./CustomHeaderSection";
import Playstation from "../assets/Playstation.png";
import Frame738 from "../assets/Frame738.png";
import Frame702 from "../assets/Frame702.png";

const NewArrival = () => {
  return (
    <div className="relative">
      <CustomHeaderSection title="Featured" />
      <h1 className="text-2xl font-medium mb-20">New Arrival</h1>
      <div className="flex gap-3 mb-72 ">
        <img src={Playstation} alt="" />
        <img src={Frame738} alt="" />
      </div>
      <img
        className=" mt-52 left-14 mb-14 absolute bottom-0"
        src={Frame702}
        alt=""
      />
      <button className=" absolute right-0   bottom-5  text-2xl rounded-full bg-[#F5F5F5] p-2 flex w-11 h-11 items-center justify-center">
        ↑
      </button>
    </div>
  );
};

export default NewArrival;
