const CustomHeaderSection = (props) => {
  return (
    <div className="flex gap-2 items-center mt-16 mb-2">
      <div className=" bg-[#DB4444] w-5 h-10"></div>
      <span className=" text-[#DB4444]">{props.title}</span>
    </div>
  );
};
export default CustomHeaderSection;
