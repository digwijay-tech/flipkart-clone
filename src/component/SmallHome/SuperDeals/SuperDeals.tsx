import { useEffect, useState } from "react"
import SuperDealCard from "./SuperDealCard"
import axios from "axios"

const SuperDeals = () => {
  const [products,setProducts]= useState([])
  useEffect(()=>{
    axios.get("./carouse.json")
    .then(res=>setProducts(res.data.SuperDeal))
  },[])
  return (
    <div className="h-full bg-white col-[1/13]">
        <div className="flex flex-col items-stretch relative z-0">
          <div className="flex flex-[1_1_0%] flex-col ">
             <span className="flex flex-1 mx-4 mt-4 font-[inter-bold] text-[17px] !leading-[24px]  truncate">Super hot trends</span>
          </div>
          <div className="flex flex-row relative py-3 ps-4 pe-0.5 overflow-x-scroll scroll-smooth snap-mandatory overflow-y-hidden  [scrollbar-width:none]">
            {products.map((item,index)=>(
              <SuperDealCard image={item} key={index}/>
            ))}
            
          </div>
        </div>
    </div>
  )
}

export default SuperDeals