const Arrow = (props) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-medium">{props.title}</h1>
      <div className="flex gap-2">
        <button className=" text-2xl rounded-full bg-[#F5F5F5] p-2 flex w-11 h-11 items-center justify-center">
          ←
        </button>
        <button className=" text-2xl rounded-full bg-[#F5F5F5] p-2 flex w-11 h-11 items-center justify-center ">
          →
        </button>
      </div>
    </div>
  );
};
export default Arrow;
