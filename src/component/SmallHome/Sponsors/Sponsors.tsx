import { useEffect, useState } from "react";
import SponsorsContent from "./SponsorsContent";
import axios from "axios";

const Sponsors = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => setProducts(res.data.sponsorslist));
  }, []);
  return (
    <div className="h-full bg-white col-[1/13] ">
      <div className="flex flex-col">
        <div className="flex flex-row mx-4 mt-4 flex-[1]">
          <div className="inline whitespace-nowrap max-w-full text-[17px] !leading-[24px] font-[inter-semibold] tracking-[-.01px]">
            Sponsored
          </div>
        </div>
        <SponsorsContent product={products} startfrom={0} />
        <SponsorsContent product={products} startfrom={3} />
      </div>
    </div>
  );
};

export default Sponsors;
