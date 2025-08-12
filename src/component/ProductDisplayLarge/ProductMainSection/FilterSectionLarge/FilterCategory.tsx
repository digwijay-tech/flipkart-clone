import { useState } from "react";
import FilterCheckbox from "./FilterCheckbox";
import { Link } from "react-router-dom";
type FilterCategoryProps = {
  title: string;
  checkbox?: string[];
  initialValue?: boolean;
};
const FilterCategory = ({
  title,
  checkbox,
  initialValue,
}: FilterCategoryProps) => {
  const [isCategoryOpen, setIscategoryOpen] = useState(initialValue?? false);
  return (
      <section className="p-4 border-b border-b-[#f0f0f0] bg-white">
        <div className="p-4 -m-4 flex justify-between items-center">
          <div className="text-[13px] font-[inter] font-medium uppercase tracking-[.3px] text-[#212121] !leading-[1.4] inline-block w-[95%]">
            {title}
          </div>
          <button className="flex" onClick={()=>setIscategoryOpen(!isCategoryOpen)}>
            <svg
              width="16"
              height="27"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-[11px] w-[6px] cursor-pointer inline-block  ${isCategoryOpen ? "rotate-[90deg]":"rotate-[-90deg]"}`}
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#878787"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`my-[7px] ${isCategoryOpen ? "block" : "hidden"}`}>
          <FilterCheckbox />
        </div>
      </section>
  );
};

export default FilterCategory;
