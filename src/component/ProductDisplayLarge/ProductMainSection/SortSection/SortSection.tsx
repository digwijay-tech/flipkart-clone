import { useContext } from "react";
import { SortContext } from "../../../context/SortContext";

const SortSection = () => {
  const { setSort, setSearchParam, sort } = useContext(SortContext);

  const handleOnclick = (value: string) => {
    setSort(value);
    setSearchParam({ sort: value });
  };

  return (
    <div className="flex w-full font-[inter] ">
      <span className="border-b-2 border-transparent inline-block pt-2 pe-2.5 pb-1  font-medium !leading-[1.4]">
        Sort By
      </span>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter]  text-[14px] !leading-[1.4] ${
          sort === "popularity"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={() => {
          handleOnclick("popularity");
        }}
      >
        Popularity
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter] text-[14px] !leading-[1.4] ${
          sort === "price-low_to_high"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={() => {
          handleOnclick("price-low_to_high");
        }}
      >
        Price -- Low to High
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter] text-[14px] !leading-[1.4] ${
          sort === "price-high_to_low"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={() => {
          handleOnclick("price-high_to_low");
        }}
      >
        Price -- High to Low
      </div>
      <div
        className={`cursor-pointer pt-2 pb-1 mx-2.5  border-b-2  font-[inter]  text-[14px] !leading-[1.4] ${
          sort === "newsest_first"
            ? " text-[#2874f0] border-b-[#2874f0] cursor-default font-medium"
            : "border-b-transparent"
        } `}
        onClick={() => {
          handleOnclick("newsest_first");
        }}
      >
        Newest First
      </div>
    </div>
  );
};

export default SortSection;
