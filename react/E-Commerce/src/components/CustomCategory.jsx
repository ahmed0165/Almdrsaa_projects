const CustomCategory = (props) => {
  return (
    <div className="border border-[#bbbbb6] rounded-lg p-5 w-1/6 h-1/6 flex flex-col justify-center items-center">
      <img src={props.image} alt="Category-CellPhone" />
      <p className=" mt-3">{props.title}</p>
    </div>
  );
};
export default CustomCategory;
