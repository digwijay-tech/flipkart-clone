import { useEffect, useState } from "react";
import ProductCardLimited from "./ProductCardLimited";
import axios from "axios";
import ProductNotFound from "../../pages/ProductNotFound";
import { Link } from "react-router-dom";

type CategoryProps = {
  category: string;
  style?: string;
};
const ProductDisplayLimited = ({ category, style }: CategoryProps) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => {
        setProducts(res.data.ProductDisplayBtn[category].products);
        setTitle(res.data.ProductDisplayBtn[category].title);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(style);
  return (
    <div className={` mb-4 min-h-[381px] col-[1/13] ${style} bg-white`}>
      <div className="  flex flex-col  ">
        <div className="flex flex-col ">
          {/* Heading of the component */}
          <Link to={`/products/${title}`}>
            <div className="flex items-center z-0">
              <div className="px-3 py-4 flex flex-[1_1_0%] flex-row min-h-[80px] items-center justify-between">
                <div className="text-[#1f1f1f] inline truncate align-middle text-[22px] leading-[30px] tracking-[-.02px] font-[inter-semibold]">
                  {title}
                </div>
                <div className=" m-1 flex basis-auto flex-col items-stretch relative ">
                  <div className=" flex basis-auto shrink-0 bg-[#2a55e5] rounded-[42px]">
                    <div className="m-1">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 17 17"
                      >
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
            </div>
          </Link>
          {/* Card content  */}
          <div className="bg-white">
            <div className="px-1.5 pb-1 flex items-stretch flex-wrap">
              {/* Card items  */}
              {products.length === 0 ? (
                <ProductNotFound />
              ) : (
                products.map((items, index) => (
                  <ProductCardLimited key={index} product={items} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayLimited;
