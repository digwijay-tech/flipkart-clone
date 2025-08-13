import { useState } from "react";

const FilterPriceRange = () => {
  const [value, setValue] = useState(0);
  return (
    <section className="p-4 border-b border-b-[#f0f0f0] flex flex-col h-[134.19px] bg-white">
      <div className="flex flex-row ">
        <span className="uppercase font-[inter] font-medium text-[13px] !leading-[1.4] tracking-[.3px] text-[#212121]">
          Price
        </span>
      </div>
      <div className="h-[25px] w-full">
        <div className="h-full relative -bottom-1.5 ">
          <div className="w-[33.38px] h-[21.875px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[20.875px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[18.875px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[21.875px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[25px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[25px] bg-[#e0e0e0] inline-block"></div>
          <div className="w-[33.38px] h-[25px] bg-[#e0e0e0] inline-block"></div>
        </div>
      </div>
      <div className="">
          <div className="h-[13px] relative">
            <div className="absolute left-[-13.5px] z-[1] cursor-pointer w-5 h-5 top-[-3.5px] ">
              <div className="absolute right-0 w-[13px] h-[13px] rounded-[50%] border border-[#bababa] bg-white top-[3.5px]"></div>
            </div>
            <div className="right-[-13.5px] inline-block absolute z-[1] cursor-pointer w-[20px] h-[20px] -top-[3.5px] ">
              <div className="absolute  w-[13px] h-[13px] rounded-[50%] border border-[#bababa] bg-white top-[3.5px]"></div>
            </div>
            <div className="absolute inline-block h-0.5 bg-[#c2c2c2] w-full top-[6px]"></div>
            <div className="bg-[#2874f0] top-1 h-1.5 inline-block absolute w-full"></div>
          </div>
          <div className="-mt-3 ">
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[33.83px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
            <div className="w-[0px] inline-block text-start text-[#c2c2c2] text-[20px] !leading-[1.4] content-[\0087]">
              .
            </div>
          </div>
          <div className="m-[5px_-4px_0px] font-[inter] text-[#a3a3a3] flex items-center justify-stretch">
            <div className="inline-block flex-[2]">
              <select
                className="w-[99.41px] border border-[#e0e0e0] rounded-[1px] h-6 text-[14px]  px-[5px] outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:90%_50%] text-[#212121]"
              >
                <option value="min" defaultChecked>
                  Min
                </option>
                <option value="400" defaultChecked>
                  400
                </option> 
                <option value="1000" defaultChecked>
                  1000
                </option>
                <option value="2000" defaultChecked>
                  2000
                </option>
              </select>
            </div>
            <div className=" mx-[9px] flex-[1] text-[14px] font-[inter] text-[#a3a3a3] inline-block text-center">
              to
            </div>
            <div className="inline-block flex-[2] ms-[1.5px] ">
              <select
                name=""
                className=" w-[108.41px] border border-[#e0e0e0] rounded-[1px] h-6 text-[14px] text-[#212121] px-[5px] outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:90%_50%]"
              >
                <option value="min" defaultChecked>
                  ₹40000+
                </option>
                <option value="400" defaultChecked>
                  400
                </option>
                <option value="1000" defaultChecked>
                  1000
                </option>
                <option value="2000" defaultChecked>
                  2000
                </option>
              </select>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FilterPriceRange;
