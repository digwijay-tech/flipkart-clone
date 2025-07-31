const SmallSortFilter = () => {
  const handleSortButtonClick=()=>{
    console.log("Sort button Click")
  }
  const handleFilterButtonClick=()=>{
    console.log("filter button click")
  }
  return (
    <div className="h-12 overflow-hidden ">
      <div className="h-full w-full border-y border-y-[#dcdfe6] flex flex-row items-center">
        {/* Sort button  */}
        <button onClick={handleSortButtonClick} className="flex-[1_1_0%] ">
          <div className="flex flex-row items-center justify-center h-full relative w-[187px]">
            <svg width="20" height="20" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path
                fill="none"
                stroke="#111112"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"
              ></path>
            </svg>
            <div className="ms-2 text-[14px] font-[inter-semibold] !leading-[20px] shrink-[1] tracking-[-0.01px]">
              Sort
            </div>
          </div>
        </button>
        <div className="h-4 w-[1px] bg-[#d5d7db]"></div>
        {/* Filter Button  */}
        <button onClick={handleFilterButtonClick} className="flex-[1_1_0%] ">
          <div className="flex flex-row items-center justify-center h-full relative w-[187px]">
            <svg width="20" height="20" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path
                fill="none"
                stroke="#111112"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M148 172H40M216 172h-28"
              ></path>
              <circle
                cx="168"
                cy="172"
                r="20"
                fill="none"
                stroke="#111112"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></circle>
              <path
                fill="none"
                stroke="#111112"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="M84 84H40M216 84h-92"
              ></path>
              <circle
                cx="104"
                cy="84"
                r="20"
                fill="none"
                stroke="#111112"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
              ></circle>
            </svg>
            <div className="ms-2 text-[14px] font-[inter-semibold] !leading-[20px] shrink-[1] tracking-[-0.01px]">
              Filter
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SmallSortFilter;
