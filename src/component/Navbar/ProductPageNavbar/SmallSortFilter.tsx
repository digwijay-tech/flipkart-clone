import { Link } from "react-router-dom"
import { FilterIcon } from "../../../assets/SVG/filterIcon"
import { SortIcon } from "../../../assets/SVG/sortIcon"

type SortFilterProps ={
  isScroll : boolean
  setIsSortVisible :React.Dispatch<React.SetStateAction<boolean>>
  isSortVisible : boolean
}

const SmallSortFilter = ({isScroll , setIsSortVisible, isSortVisible}:SortFilterProps) => {
  const handleSortButtonClick=()=>{
    setIsSortVisible(prev => prev= !isSortVisible)
  }

  return (
    <div className={`h-12 overflow-hidden transition-all transform relative  z-3 bg-white  ${isScroll?"":"translate-y-[-110%]"}`}>
      <div className="h-full w-full border-y border-y-[#dcdfe6] flex flex-row items-center">
        {/* Sort button  */}
        <button onClick={handleSortButtonClick} className="flex-[1_1_0%] ">
          <div className="flex flex-row items-center justify-center h-full relative w-[187px]">
            <SortIcon/>
            <div className="ms-2 text-[14px] font-[inter-semibold] !leading-[20px] shrink-[1] tracking-[-0.01px]">
              Sort
            </div>
          </div>
        </button>
        <div className="h-4 w-[1px] bg-[#d5d7db]"></div>
        {/* Filter Button  */}
        <Link to="filter" className="flex-[1_1_0%] ">
          <div className="flex flex-row items-center justify-center h-full relative w-[187px]">
            <FilterIcon/>
            <div className="ms-2 text-[14px] font-[inter-semibold] !leading-[20px] shrink-[1] tracking-[-0.01px]">
              Filter
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SmallSortFilter;
