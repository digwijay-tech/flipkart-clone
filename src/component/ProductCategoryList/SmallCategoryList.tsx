import { useEffect, useState } from "react"
import SmallCategoryitems from "./SmallCategoryitems"
import axios from "axios"

const SmallCategoryList = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("./carouse.json")
        .then(res=>setProducts(res.data.categoryItems.categorysmall))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className="min-h-[58.1299px] bg-white col-[1/13] ">
        <div className="pt-3 pb-1 ps-2  overflow-x-scroll overflow-y-hidden flex flex-row [scrollbar-width:none]">
            <div className="flex flex-col shrink-0 me-2">
                <div className="flex flex-row shrink-0 mb-2">
                    <div className="w-[133.45454545454544px] md:w-[151.63636363636363px]  flex flex-col shrink-0">
                        <div className="flex-col items-center ">
                            <div className="flex flex-col">
                                <div className="mx-auto overflow-hidden w-[117.455px] h-[50.3377px]">
                                    <img src="#" alt="Not Available" />
                                </div>
                            </div>
                            <div className="text-[10px] mt-1.5 text-center !leading-[14px] whitespace-nowrap max-w-full font-[inter-semibold]" >
                                Flipkart Minutes
                            </div>
                        </div>
                    </div>
                    {products.slice(0,8).map(item=>(
                        <SmallCategoryitems product={item}/>
                    ))}
                     
                </div>
               <div className="flex flex-row shrink-0 mb-2">
                {products.slice(8).map(item=>(
                     <SmallCategoryitems product={item}/>
                ))}
               
               </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default SmallCategoryList