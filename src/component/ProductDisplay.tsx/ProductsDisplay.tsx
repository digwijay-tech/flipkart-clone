import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
type ProductProps={
  categoryname :string
  style? :string
}
const ProductsDisplay = ({categoryname,style}:ProductProps) => {
  const [productTitle, setProductTitle] = useState();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => {
        setProductTitle(res.data.ProductHighlight[categoryname].title);
        setProductDetails(res.data.ProductHighlight[categoryname].Products);
      })
      .catch((error) => console.log(error));
  },[]);
  console.log(categoryname)
  return (
    <div className={`h-auto bg-white mb-[16px] ${style}`}>
      <div className="flex flex-col relative z-0">
        <div className="flex flex-[1] flex-row items-center px-3 py-4  lg:p-4 ">
          <div className="text-[#1f1f1f] inline whitespace-nowrap overflow-hidden overflow-ellipsis align-middle text-[22px] !leading-[30px] tracking-[-.02px] font-[inter-semibold]">
            {productTitle}
          </div>
        </div>
        <div className="flex flex-col relative">
          <div className="flex overflow-x-scroll overflow-y-hidden scroll-smooth snap-mandatory p-1.5 [scrollbar-width:none] pb-3">
            {productDetails.map((productdetail, index) => (
              <ProductCard product={productdetail} key={index} />
            ))}
          </div>  
          <button className=" hidden absolute   bottom-0 top-20 right-0 min-[1190px]:flex h-[88px] w-10 shadow-[0px_1px_4px_rgba(0,0,0,.12)] rounded-[4px_0px_0px_4px] bg-white">
            <span className="absolute right-[16px] top-[50%] transform-[scale(1)_translateY(-50%)] before: [content:''] before:relative before:border-[#878787] before:border-[2px_2px_0px_0px] before:inline-block before:h-[6px] before:w-[6px] before:transform-[rotate(45deg)] ">
            </span>   
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
