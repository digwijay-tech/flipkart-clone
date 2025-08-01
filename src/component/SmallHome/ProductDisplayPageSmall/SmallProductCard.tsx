import { useState } from "react";
import { Link } from "react-router-dom";
type CardProductProps = {
  product: {
    prod_id: string;
    brand: string;
    title : string
    prod_image : {
      src : string 
      srcset1 : string 
    }
    discount_percentage: string;
    previous_price: string;
    current_price: string;
    emi_price: string;
    offered_banks: string;
    assuredby: string;
    tag: string;
    isSponsored: boolean;
  };
};

const SmallProductCard = ({ product }: CardProductProps) => {
  const [addWishList, setAddWishList] = useState<Boolean>(false);
  const handleWishListClick = () => setAddWishList((prev) => !prev);
  return (
    <div className="w-[187.5px] flex flex-col justify-start items-start relative pb-2 border-r border-r-[#eaeaea]">
      {/* product image container  */}
      <div className="w-[187.5px] flex-[1_1_0%] flex flex-col relative">
        <div className="w-[187.5px] h-[225px] flex relative">
          <img
            src={product.prod_image.src}
            srcSet={product.prod_image.srcset1}
            width="187.5"
            height="225"
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-12 p-2 absolute bottom-0 left-0 flex items-center">
          <div className="flex flex-col w-[32px] h-[32px] justify-center items-center bg-white rounded-[20px] border border-white">
            <div className="w-6 h-6 flex items-center">
              <img
                src="https://rukminim1.flixcart.com/www/48/48/promos/22/09/2023/8f8ed4e7-5572-4756-bbec-19df46cbac7d.png?q=90"
                srcSet="https://rukminim1.flixcart.com/www/24/24/promos/22/09/2023/8f8ed4e7-5572-4756-bbec-19df46cbac7d.png?q=80 1x, https://rukminim1.flixcart.com/www/48/48/promos/22/09/2023/8f8ed4e7-5572-4756-bbec-19df46cbac7d.png?q=60 2x,"
                className="object-contain w-full h-full m-auto"
                alt="Variant image"
              />
            </div>
          </div>
        </div>
        {/* wishlist button  */}
        <button
          className="absolute top-3 right-3 flex items-center"
          onClick={handleWishListClick}
        >
          <svg width="24" height="24" viewBox="0 0 256 256">
            <path fill="none" d="M0 0h256v256H0z"></path>
            <path
              d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"
              fill={`${addWishList ? "red" : "white"}`}
              stroke="#B8BBBF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="12"
            ></path>
          </svg>
        </button>
      </div>
      {/* Product content container  */}
      <div className="w-[187.5px] py-2 ps-3 pe-1 flex flex-col ">
        {/* hashtag Section  */}
        {product.isSponsored  && <div className="text-[#b8bbbf] text-[10px] !leading-4 font-[inter-regular]">
          Sponsored
        </div>}
        {product.tag === "" ? "":
        <div className="mt-0.5 mb-1 flex flex-row items-center">
          <div className="w-[5px] h-4 me-1 flex bg-[#7048c6]"></div>
          <div className="text-[12px] text-[#7048c6] font-roboto">#</div>
          <div className="text-[#7048c6] font-roboto text-[12px]">{product.tag}</div>
        </div>
        }
        <div className="me-1.5  h-[18px] font-[inter-semibold] text-[14px]">
          <span className="!Leading-[20px] whitespace-nowrap">{product.brand}</span>
        </div>
        <Link to="/">
          <div className=" pe-2 pb-0.5 me-1.5 flex flex-row items-center ">
            <span className="truncate text-[#717478] font-[inter-regular] text-[12px] !leading-[18px] ">
              {product.title}
            </span>
          </div>
        </Link>
        <div className="flex flex-row items-center shrink-0 ">
          {/* Offer percentage  */}
          <div className="flex flex-row items-center me-1">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path
                d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                fill="#008C00"
              ></path>
            </svg>
            <span className="text-[14px] !leading-[20px] font-[inter-semibold] text-[#008c00] ">
              69%
            </span>
          </div>
          {/* previous Price  */}
          <div className="me-1 flex items-center font-[inter-semibold] text-[14px] !leading-5 text-[#727478] line-through">
            ₹3,999
          </div>
          {/* current price  */}
          <div className="flex flex-row font-[inter-semibold] text-[#111112] !leading-5 text-[14px]">
            ₹1,200
          </div>
        </div>
        
        <div className="flex flex-row mt-1.5 items-center">
          <div className="w-[38px] h-[16px] flex relative me-0.5 ">
            <img
              src="https://rukminim1.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
              srcSet="https://rukminim1.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90 1x, https://rukminim1.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90 2x,"
              alt="Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" text-[12px] font-roboto inline whitespace-pre-wrap text-[#061f80]">
            ₹1,026
          </div>
          <div className=" text-[12px] font-roboto inline whitespace-pre-wrap text-[#061f80]">
            &nbsp;with 2 offers
          </div>
        </div>

        <div className="flex flex-row flex-[1_1_0%] items-center  pt-1 pb-1  ">
          <div className="pe-0.5 mt-0.5 ">
            <div className="py-[5px] flex flex-row items-center  h-[22px]"></div>
          </div>
          {/* assured section  */}
          {product.assuredby === ""? "" :
          <div className="w-[60px] h-4 shrink-0 flex ">
            <img
              src={product.assuredby}
              
              className="w-full h-full m-auto object-contain"
              alt=""
            />
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
