import { Link } from "react-router-dom";

const ProductCardVertical = () => {
  return (
    <div className="w-full font-[inter] bg-white  !leading-[1]">
      <div className="pt-6 pb-[30px] ps-6 border-b border-b-[#f0f0f0]">
        <Link to="" className="flex flex-row">
          <div className="w-[200px] relative">
            <div className="h-[200px] w-[200px] mb-4">
              <img
                className="mx-auto h-full "
                src="https://rukminim2.flixcart.com/image/312/312/kbzergw0/instant-camera/m/h/u/instax-instant-camera-mini-11-fujifilm-original-imaft7fpfzkcsequ.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="absolute top-0.5 -right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 16"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  fill="#c2c2c2"
                  stroke="#FFF"
                  fill-rule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex-1 ps-[25px] flex flex-row ">
            <div className="w-[58.33%] ">
              <div className="font-medium font-[inter] text-[18px] cursor-pointer !leading-[1]">
                FUJIFILM Instax Mini 11 Instant Camera
              </div>
              <div className="mt-1.5 flex flex-row">
                <div className=" h-[19px]  p-[2px_4px_2px_6px] rounded-[3px] text-[12px]  bg-[#388e3c] text-white  font-[inter]  font-medium flex ">
                  4.2
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    className="m-[2px_0px_0px_2px] inline h-2.5"
                  ></img>
                </div>
                <div className="ps-2 text-[#878787] font-[inter] text-[14px] font-medium ">
                  1,319 Ratings & 80 Reviews
                </div>
              </div>
              <div className="mt-[13px]">
                <ul className="mt-[5px]  text-[#212121] ">
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    Exposure Mode: Manual
                  </li>
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    View Finder: Yes
                  </li>
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    Self Timer: No
                  </li>
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    Battery Included
                  </li>
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    Battery Included
                  </li>
                  <li className="before:content-['•'] before:text-[#c2c2c2] before:pe-2 before:!leading-[22px] text-[14px] ">
                    1 Year Warranty
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[41.66%] flex flex-col ps-[25px]">
              <div>
                <div className="-mt-[1px] pe-2.5 inline-block !leading-[1]">
                  <span className="block text-[25px] text-[#212121] ![line-height:1] font-[inter] font-medium">
                    ₹5,499
                  </span>
                  <span className="pt-2.5 text-[14px] text-[#878787] ![line-height:1] inline-block line-through">
                    ₹7,999
                  </span>
                  <span className="text-[#388e3c] text-[13px] tracking-[-.2px] font-medium ms-2 !leading-[1]">
                    31% off
                  </span>
                </div>
                <div className="inline-block align-top pb-1">
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                    height="21"
                    className="h-[21px]"
                    alt="Assured"
                  />
                </div>
                <span className="mt-[5px] text-[#c70055] font-[inter] font-bold text-[12px] !leading-[1] block">
                  Only few left
                </span>
                <span className="inline-flex text-[#26a541] !leading-[1] text-[14px] font-bold mt-[5px]">
                  <span className="!leading-[1]">Bank Offer</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardVertical;
