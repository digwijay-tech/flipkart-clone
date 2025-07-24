import { useEffect, useState } from "react";
import RecentViewCard from "./RecentViewCard";
import axios from "axios";

const RecentlyViewed = () => {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("/carouse.json")
    .then(res=>setProducts(res.data.RecentViewProducts))
    .catch(err => console.log(err))
  },[])
  return (
    <div className="col-[1/13] h-full bg-white">
      <div className="flex flex-col items-stretch">
        {/* Title  */}
        <a href="#" className="flex items-center flex-[1_1_0%]">
          <div className="px-3 py-4 flex items-center min-h-[80px] w-full">
            <div className="flex flex-[1_1_0%]">
              <div className="w-full font-[inter-semibold] text-[22px] !leading-[30px] tracking-[-.02px] text-[#1f1f1f] inline max-w-full whitespace-nowrap truncate ">
                Recently Viewed
              </div>
            </div>
            <div className=" m-1 flex basis-auto flex-col items-stretch relative ">
              <div className=" flex basis-auto shrink-0 bg-[#2a55e5] rounded-[42px]">
                <div className="m-1">
                  <svg width="16" height="16" fill="none" viewBox="0 0 17 17">
                    <path
                      d="m6.627 3.749 5 5-5 5"
                      stroke="#FFFFFF"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* content  */}
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-row pb-3 px-1.5 overflow-y-hidden overflow-x-scroll scroll-smooth [scrollbar-width:none] w-full ">
            {products.map((item,index)=>(
              <RecentViewCard product={item} key={index}/>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
