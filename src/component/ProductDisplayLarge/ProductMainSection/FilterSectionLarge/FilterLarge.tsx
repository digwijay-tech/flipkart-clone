import { useState } from "react";
import FilterCategory from "./FilterCategory";
import FilterCheckbox from "./FilterCheckbox";
import { Link } from "react-router-dom";
import FilterPriceRange from "./FilterPriceRange";

const FilterLarge = () => {
  const [isCategoryOpen, setIscategoryOpen] = useState(false);
  return (
    // h-[1262.38px]
    <div className="basis-[280px] max-w-[280px] pe-2.5 ">
      <div className="flex flex-col  w-full h-full ">
        {/* filter title */}
        <section className="pb-3 pt-4 px-4 flex border-b border-b-[#f0f0f0] bg-white">
          <div className="w-[67%] font-[inter] text-[18px] font-medium">
            <span className="tracking-[.3px] !leading-[1.4]">Filters</span>
          </div>
        </section>
        {/* categories section  */}
        <section className="p-4 border-b border-b-[#f0f0f0] bg-white">
          <div className=" uppercase mb-[5px] flex">
            <span className="text-[12px] font-[inter] font-medium !leading-[1.4] ">
              Categories
            </span>
          </div>
          <div className="py-[5px]  whitespace-nowrap flex flex-row items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="me-[5px] mb-0.5"
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#878787"
              ></path>
            </svg>
            <span className="text-[#878787] text-[14px] !leading-[1.4] font-[inter]">
              Cameras & Accessories
            </span>
          </div>
          <div className="py-[5px]  whitespace-nowrap flex flex-row items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="me-[5px] "
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#212121"
              ></path>
            </svg>
            <span className="text-[#212121] text-[14px] !leading-[1.4] font-[inter] font-medium">
              Cameras
            </span>
          </div>
        </section>
        {/* Price range filter */}
        <FilterPriceRange/>
        {/* Flip Assured  */}
        <section className="p-4 flex flex-row justify-between border-b border-b-[#f0f0f0] bg-white">
          <label htmlFor="flipAssured" className="flex w-full">
            <input type="checkbox" className=" !w-[14px] !h-[14px] " />
            <div className="ps-[11px] flex-1">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                height="21"
                alt="image"
                className="h-[21px]   "
              />
            </div>
          </label>
          <div className=" bg-white text-[#878787]  text-[11px] font-[inter] font-medium flex items-center">
            <span className="ms-2 me-0.5 rounded-[50%] text-center border border-[#e0e0e0] !leading-4 h-4 w-4 inline-block align-middle ">
              ?
            </span>
          </div>
        </section>
        {/* Brand Checkbox  */}
        <section className="p-4 border-b border-b-[#f0f0f0] bg-white">
          <div className="p-4 -m-4 flex justify-between items-center">
            <div className="text-[13px] font-[inter] font-medium uppercase tracking-[.3px] text-[#212121] !leading-[1.4] inline-block w-[95%]">
              Brand
            </div>
            <button
              className="flex"
              onClick={() => setIscategoryOpen(!isCategoryOpen)}
            >
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-[11px] w-[6px] cursor-pointer inline-block  ${
                  isCategoryOpen ? "rotate-[90deg]" : "rotate-[-90deg]"
                }`}
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#878787"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`my-[7px] ${isCategoryOpen ? "block" : "hidden"}`}>
            <div className="flex flex-row mb-[7px] ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 18"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-5 absolute"
              >
                <g fill="#878787" fill-rule="evenodd">
                  <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                  <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
                </g>
              </svg>
              <input
                type="text"
                className="outline-none border-b-2 text-[#878787] h-5 ps-[21px] font-[inter] text-[14px] border-[#e0e0e0] font=[inter]  w-full placeholder:text-[#878787] placeholder:font-[inter] placeholder:text-[14px] focus:border-b-[#2874f0]"
                placeholder="Search Brand"
              />
            </div>
            <FilterCheckbox />
          </div>
        </section>
        <FilterCategory title="Display Size" initialValue={true} />
        <FilterCategory title="customer ratings" />
        <FilterCategory title="offers" />
        <FilterCategory title="discount" />
        <FilterCategory title="availability" />
        <FilterCategory title="Display Size" />

        <div className="w-full">
          <Link
            to="/"
            className="pt-[30px]  cursor-pointer flex flex-col items-center"
          >
            <div className="text-center">
              <span className="font-[inter] text-[14px] !leading-[1.4] ">
                Need Help?
              </span>
            </div>
            <div className="flex items-center mt-[5px] mb-[20px] !leading-[1]">
              <span className="text-[#2874f0] font-[inter] text-[18px] !leading-[1]">Help me decide </span>
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1.5 h-3 ms-1 rotate-[180deg]"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#2874f0"
                ></path>
              </svg>
            </div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png"
              className=""
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterLarge;

