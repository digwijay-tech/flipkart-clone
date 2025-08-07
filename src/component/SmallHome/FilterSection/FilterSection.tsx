import { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";
import { SortContext } from "../../context/SortContext";

const FilterSection = () => {
  const { filterCategory } = useContext(SortContext);
  const filterList = [
    "Price",
    "F-Assured",
    "Brand",
    "Discount",
    "Category",
    "Customer Ratings",
  ];

  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleOnClickApply = () => {
    console.log("Applied");
    navigate("-1");
  };

  return (
    <div className=" flex flex-col max-h-svh bg-white w-full  top-0 bottom-0 left-0 right-0 z-50 overflow-y-hidden ">
      {/* Navbar  */}
      <div className="fixed top-0 right-0 left-0 z-50 flex flex-row h-[52px] bg-white shrink-0 items-center">
        {/* arrow icon */}
        <button
          className="flex flex-col w-[42px] max-h-4 !leading-2.5 relative justify-center items-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            ></path>
          </svg>
        </button>
        {/* title section  */}
        <div className="flex flex-1 ps-3 font-roboto font-[400] text-[16px] ">
          <span>Filters</span>
        </div>
        {/* Clear button */}
        <button className=" w-[75px] flex flex-col me-4">
          <span className="text-[13px] font-roboto !leading-3 ">
            Clear Filters
          </span>
        </button>
      </div>
      {/* content  */}
      <div className="bg-white flex-1 h-lvh flex flex-row top-0 absolute z-40 right-0 left-0 pt-[52px] pb-14 w-full">
        <div className="flex flex-row  h-[818px] w-full ">
          <div className="w-full flex flex-col  bg-[#f1f3f6] h-[817px] flex-1">
            <div className="flex flex-col flex-1 overflow-y-scroll [scrollbar-width:none]">
              <div className="w-[125px] h-[896px] flex flex-col">
                {filterList.map((item) => (
                  <NavLink to={`${item}`} className="h-[56px] w-full">
                    {({ isActive }: { isActive: boolean }) => {
                      setValue((prev )=> isActive ? prev = item : prev)
                      return (
                        <div>
                          <div
                            className={`py-3 ps-4 pe-2 flex items-center w-full ${
                              isActive ? " bg-white text-[#2874f0]" : " "
                            }`}
                          >
                            <span className="me-2 !leading-5 text-[14px] font-roboto  line-clamp-2">
                              {item}
                            </span>
                          </div>
                        </div>
                      );
                    }}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <FilterContext.Provider value={{ value, filterCategory }}>
            <Outlet />
          </FilterContext.Provider>
        </div>
      </div>
      {/* bottom navbar  */}
      <div className="bg-white h-14 fixed bottom-0 left-0 right-0 py-2 z-50 ps-4 pe-2 flex items-center">
        <div className="flex flex-1 flex-col">
          <div className="text-[16px]  !leading-[19px] whitespace-nowrap font-roboto flex-1">
            80,977
          </div>
          <div className="text-[12px] font-roboto whitespace-nowrap flex-1 text-[#878787]">
            products found
          </div>
        </div>
        <button
          className="px-[65px] flex min-h-10 flex-row items-center bg-[#ff5800] rounded"
          onClick={handleOnClickApply}
        >
          <span className="text-white text-[14px] font-roboto whitespace-nowrap ">
            Apply&nbsp;
          </span>
        </button>
      </div>
    </div>
  );
};
export default FilterSection;
