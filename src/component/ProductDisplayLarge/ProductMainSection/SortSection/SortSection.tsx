import { useState } from "react";

const SortSection = () => {
  const [isActive, setIsActive] = useState("Popularity");

  const handleOnclick = (value: string) => {
    setIsActive(value);
  };
  console.log(isActive);

  return (
    <div className="flex w-full font-[inter] ">
      <span className="border-b-2 border-transparent inline-block pt-2 pe-2.5 pb-1  font-medium !leading-[1.4]">
        Sort By
      </span>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter]  text-[14px] !leading-[1.4] ${
          isActive === "Popularity"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={(e) => {
          handleOnclick((e.target as HTMLElement).innerText);
        }}
      >
        Popularity
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter] text-[14px] !leading-[1.4] ${
          isActive === "Price -- Low to High"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={(e) => {
          handleOnclick((e.target as HTMLElement).innerText);
        }}
      >
        Price -- Low to High
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter] text-[14px] !leading-[1.4] ${
          isActive === "Price -- High to Low"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={(e) => {
          handleOnclick((e.target as HTMLElement).innerText);
        }}
      >
        Price -- High to Low
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter]  text-[14px] !leading-[1.4] ${
          isActive === "Newest First"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={(e) => {
          handleOnclick((e.target as HTMLElement).innerText);
        }}
      >
        Newest First
      </div>
    </div>
  );
};

export default SortSection;
