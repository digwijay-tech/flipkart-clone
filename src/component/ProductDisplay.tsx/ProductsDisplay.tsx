import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductsDisplay = () => {
  const [productTitle, setProductTitle] = useState();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => {
        setProductTitle(res.data.ProductHighlight[0].BestDealMobile.title);
        setProductDetails(res.data.ProductHighlight[0].BestDealMobile.Products);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div className="h-auto bg-white mb-[16px] lg:w-[1170.66px]">
      <div className="flex flex-col relative z-0">
        <div className="flex flex-[1] flex-row items-center px-3 py-4  lg:p-4 ">
          <div className="text-[#1f1f1f] inline whitespace-nowrap overflow-hidden overflow-ellipsis align-middle text-[22px] !leading-[30px] tracking-[-.02px] font-[inter-semibold]">
            {productTitle}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex overflow-x-scroll overflow-y-hidden scroll-smooth snap-mandatory p-1.5 [scrollbar-width:none] pb-3">
            {productDetails.map((productdetail, index) => (
              <ProductCard product={productdetail} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
