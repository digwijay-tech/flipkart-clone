import { useEffect, useState } from "react";
import SmallProductCard from "./SmallProductCard";
import axios from "axios";

const SmallProductDisplay = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => setProduct(res.data.SmallTopPick))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-full bg-white col-[1/13] ">
      <div className="flex flex-col">
        <div className="flex flex-row mx-4 mt-4 flex-[1]">
          <div className="inline whitespace-nowrap max-w-full text-[17px] !leading-[24px] font-[inter-semibold] tracking-[-.01px]">
            Top Picks
          </div>
        </div>
        <div className="flex flex-col py-3 pe-0.5 ps-4">
          <div className="flex flex-row overflow-x-scroll overflow-y-hidden snap-start snap-mandatory [scrollbar-width:none]">
            {/* card component */}
            {product.map((item,index) => (
              <SmallProductCard product={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProductDisplay;
