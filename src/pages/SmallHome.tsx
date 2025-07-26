import { useEffect, useState } from "react";
import HeroCarousel from "../component/Hero/HeroCarousel";
import SmallCategoryList from "../component/ProductCategoryList/SmallCategoryList";
import axios from "axios";

const SmallHome = () => {
  const [product , setProduct]=useState([])

  useEffect(()=>{
    axios.get("./carouse.json")
    .then(res=>setProduct(res.data.categoryItems.categorysmall))
    .catch()
  },[])
  return (
    <div className="hidden bg-[#f1f2f4] max-[1024px]:block">
      <div className="md:px-4 min-h-lvh  md:pt-2 md:[scrollbar-width:none] max-[1190px]:max-w-[996px] lg:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-[repeat(12,1fr)] gap-x-[12px]  w-full">
          <HeroCarousel />
          <SmallCategoryList/>
        </div>
      </div>
    </div>
  );
};

export default SmallHome;
