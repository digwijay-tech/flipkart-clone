import { useEffect, useState } from "react";
import ProductCardSmall from "../ProductCardsmall/ProductCardSmall";
import axios from "axios";

const SuggestedSmall = () => {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => SetProducts(res.data.Suggestionforme));
  }, []);
  return (
    <div className="col-[1/13] bg-white h-full">
      <div className="flex flex-col mb-1 ">
        <div className="flex flex-row items-center p-4">
          <span className=" truncate whitespace-nowrap font-[inter-semibold] text-[17px] !leading-[24px]">
            Suggested for You
          </span>
        </div>
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
