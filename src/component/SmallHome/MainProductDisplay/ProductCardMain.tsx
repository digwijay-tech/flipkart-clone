import { Link } from "react-router-dom";
type ProductProps = {
  product: {
    id: string;
    title: string;
    second_title?: string | null;
    src: string;
    srcset1: string;
    srcset2: string;
    current_price: string;
    previous_price: string;
    isproduct_available: boolean;
  };
};
const ProductCardMain = ({ product }: ProductProps) => {
  return (
    <div className="h-full bg-white">
      <div className="ps-2.5 mx-2.5 ">
        <Link to="/" className="flex flex-col mx-1.5 mb-2 mt-2.5 ">
          <div className="justify-center aspect-[3/4] w-full flex flex-[1_1_0%] flex-col items-center relative">
            <picture>
              <source srcSet={product.srcset1} media="(min-width: 1192px)" />
              <source
                srcSet={product.srcset2}
                media="(min-width: 768px) and (max-width: 1191px)"
              />
              <img
                src={product.src}
                alt="Image"
                className="aspect-[3/4] w-full object-contain m-auto "
              />
            </picture>
            <div
              className={`absolute top-1.5 left-1.5 right-1.5   w-full flex justify-start ${
                product.isproduct_available ? "hidden" : ""
              }`}
            >
              <div className="bg-[#feecd0] flex items-center rounded-[6px]">
                <span className="font-[inter-semibold] whitespace-nowrap text-[#d64507] text-[12px] !leading-[16px] px-2 py-0.5">
                  Upcoming Deal
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 ">
            <span className="font-[inter-regular] text-[#707070] text-[12px] !leading-[18px] truncate">
              <span className="font-[inter-semibold] text-[12px] !leading-[18px] me-1 text-black ">
                {product.second_title}
              </span>{" "}
              {product.title}
            </span>
            <div className="flex flex-row">
              <span className="font-[inter-regular] text-[14px] !Leaading-[20px] text-[#707070]  line-through me-1 ">
                {" "}
                {product.previous_price}
              </span>
              <span className="font-[inter-semibold] text-[14px] !leading-[20px] text-black">
                {product.current_price}
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/"
          className={`${product.isproduct_available ? "hidden" : ""}`}
        >
          <div className="flex flex-row mx-1.5 mb-2 px-[18px] justify-center items-center rounded-[8px] border-[#e0e0e0] border min-h-[34px]">
            <div className="flex flex-row items-center justify-center">
              <div>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5.269 9.75A6.74 6.74 0 0 1 12.047 3c3.712.028 6.684 3.113 6.684 6.834v.666c0 3.356.703 5.306 1.322 6.375A.75.75 0 0 1 19.406 18H4.594a.75.75 0 0 1-.647-1.125c.618-1.069 1.322-3.019 1.322-6.375v-.75ZM9 18v.75a3 3 0 0 0 6 0V18"
                    stroke="#333333ff"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <span className=" ms-1 font-[inter-semibold] text-[#333333] text-[12px] !leading-[16px]">
                Notify Me
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardMain;
