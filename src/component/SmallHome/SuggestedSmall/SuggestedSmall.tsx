import { useEffect, useState } from "react";
import ProductCardSmall from "../ProductCardsmall/ProductCardSmall";
import axios from "axios";
import { Link } from "react-router-dom";
type SuggestProps ={
  visibility?:string|null
}
const SuggestedSmall = ({visibility}:SuggestProps) => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => SetProducts(res.data.Suggestionforme));
  }, []);
  return (
    <div className="col-[1/13] bg-white h-full">
      <div className="flex flex-col mb-1 ">
        <Link to="" className="flex flex-row items-center p-4 justify-between">
          <span className=" truncate whitespace-nowrap font-[inter-semibold] text-[17px] !leading-[24px]">
            Suggested for You
          </span>
          <div className={`flex flex-col ms-6 ${visibility}`}>
            <div className="bg-[#0779ff] w-10 h-6 flex flex-row justify-center items-center rounded-[30px]">
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M1 8H14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3.5L14.5 8L10 12.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          </div>
        </Link>
        <div className="flex [flex-flow:wrap] flex-[1_1_0%] me-1 ms-4 mb-1">
          {products.map((item, index) => (
            <ProductCardSmall details={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedSmall;
