import { useEffect, useState } from "react"
import ProductCategoryItem from "./ProductCategoryItem"
import axios from "axios"


const ProductCategoryList = () => {
    const[categoryListItem , setCategoryListItem]=useState([])
    useEffect(()=>{
        axios.get("/carouse.json")
        .then(res=>setCategoryListItem(res.data.categoryItems))
        .catch(error=>console.log(error))
    })
  return (
    <div className='hidden md:block h-[135px] bg-white z-10 m-[0px_0px_16px_0px] col-[1/13]'>
        <div className='  flex flex-col items-stretch relative z-0 h-full w-full '>
            <div className=' min-h-[126px] overflow-x-scroll [scrollbar-width:none] w-full text-[#111112] flex flex-row relative'>
                {categoryListItem.map((items,index)=>(
                    <ProductCategoryItem item={items} index={index} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductCategoryList