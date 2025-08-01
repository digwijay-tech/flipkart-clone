import { useEffect, useState } from "react";

type SortProps ={
    isSortVisible : boolean
    setIsSortVisible : React.Dispatch<React.SetStateAction<boolean>>
}

const SortComponent = ({isSortVisible , setIsSortVisible}:SortProps) => {
 
  const handleClick = () => {
    setIsSortVisible((prev) => (prev = !isSortVisible));
  };
  useEffect(() => {
    isSortVisible
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isSortVisible]);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ease-linear   ${isSortVisible ? "visible ": "invisible"}  `} onClick={handleClick} >
      <div
        className={`h-[925px] bg-black transition-opacity duration-300  ${
          isSortVisible ? " opacity-[0.5] " : "opacity-0"
        }`}
      ></div>
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white pb-6 ease-in-out duration-300 transform translate-y-[0%] ${isSortVisible ? "" : " translate-y-[100%]"}`}>
        <div className="m-3 text-[#878787] text-[14px] font-roboto uppercase">
          Sort by
        </div>
        <div className="pt-3 border-t border-t-[#eaeaea]">
          <form>
            <div className="mb-2 me-2 flex flex-row items-center">
              <div className="flex-1 py-1.5 px-3 !leading-0">
                <span className="font-roboto text-[14px] ">Popularity</span>
              </div>
              <div className="h-4 w-4 mt-0.5 me-2 flex items-center">
                <input
                  type="radio"
                  name="sortby"
                  value="Popularity"
                  className="h-4 w-4"
                  defaultChecked
                />
              </div>
            </div>
            <div className="mb-2 me-2 flex flex-row items-center">
              <div className="flex-1 py-1.5 px-3 !leading-0">
                <span className="font-roboto text-[14px] ">
                  Price -- High to Low
                </span>
              </div>
              <div className="h-4 w-4 mt-0.5 me-2 flex items-center">
                <input
                  type="radio"
                  name="sortby"
                  value="price-high_to_low"
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="mb-2 me-2 flex flex-row items-center">
              <div className="flex-1 py-1.5 px-3 !leading-0">
                <span className="font-roboto text-[14px] ">
                  Price -- Low to High
                </span>
              </div>
              <div className="h-4 w-4 mt-0.5 me-2 flex items-center">
                <input
                  type="radio"
                  name="sortby"
                  value="price-low_to_high"
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="mb-2 me-2 flex flex-row items-center">
              <div className="flex-1 py-1.5 px-3 !leading-0">
                <span className="font-roboto text-[14px] ">Newest First</span>
              </div>
              <div className="h-4 w-4 mt-0.5 me-2 flex items-center">
                <input
                  type="radio"
                  name="sortby"
                  value="newsest_first"
                  className="h-4 w-4"
                />
              </div>
            </div>
            <div className="mb-2 me-2 flex flex-row items-center">
              <div className="flex-1 py-1.5 px-3 !leading-0">
                <span className="font-roboto text-[14px] ">Discount</span>
              </div>
              <div className="h-4 w-4 mt-0.5 me-2 flex items-center">
                <input
                  type="radio"
                  name="sortby"
                  value="discount"
                  className="h-4 w-4 "
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;
