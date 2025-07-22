import { useEffect, useState } from "react";
import ProductCardLimited from "./ProductCardLimited";
import axios from "axios";

type CategoryProps ={
    category : string 
}
const ProductDisplayLimited = ({category}: CategoryProps) => {
    const [products,setProducts]= useState([])
    const [title , setTitle]= useState("")
    useEffect(()=>{
        axios.get("/carouse.json")
        .then(res=>{
            setProducts(res.data.ProductDisplayBtn[category].products)
            setTitle(res.data.ProductDisplayBtn[category].title)
        })
        .catch(error=> console.log(error))
    },[])
    
  return (
    <div className=" min-h-[381px] col-[1/13] mt-[16px]">
      <div className="bg-white mb-4 flex flex-col  ">
        <div className="flex flex-col ">
          {/* Heading of the component */}
          <a href="#" className="flex items-center z-0">
            <div className="px-3 py-4 flex flex-[1_1_0%] flex-row min-h-[80px] items-center justify-between">
              <div className="text-[#1f1f1f] inline truncate align-middle text-[22px] leading-[30px] tracking-[-.02px] font-[inter-semibold]">
                {title}
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
          {/* Card content  */}
          <div className="bg-white">
            <div className="px-1.5 pb-1 flex items-stretch flex-wrap">
              {/* Card items  */}

              {products.length === 0 ?<div>No Data founded</div> : products.map((items,index)=>(
                
                <ProductCardLimited key={index} product={items}/>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayLimited;
