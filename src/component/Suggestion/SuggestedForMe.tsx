import { Link } from "react-router-dom";

const SuggestedForMe = () => {
  return (
    <div className="h-auto col-[1/7] bg-white mb-4 min-[1190px]:col-[1/5]">
      <div className=" mb-4 flex flex-col h-full">
        <div className="flex flex-col ">
          <div className="px-3 py-4 whitespace-nowrap overflow-ellipsis align-middle  text-[22px] !leading-[30px] tracking-[-.02px] font-[inter-semibold]">
            Suggested for you
          </div>
        </div>
        <div className="flex flex-row [flex-flow:wrap] items-center border-t border-t-[#ebebeb] h-full">
          <div className="flex-[0.55_1_0%] py-3 flex flex-col relative ">
            <div className="flex flex-col  ">
              <Link to="/" className="max-w-[252.27px]">
                <div className="flex basis-auto flex-col px-2 ">
                  <div className="flex-[1_1_0%] rounded-[4px] overflow-hidden aspect-square">
                    <img
                      src="https://rukminim1.flixcart.com/image/340/340/xif0q/headphone/3/d/p/-original-imah6zpws9yh5gca.jpeg?q=90"
                      className="w-full aspect-square object-contain block"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" px-2 pt-2 truncate font-[inter-regular] tracting-[-0.1px] !leading-[20px] text-[14px] ">
                  boAt Airdopes 301 with 75HRS Battery, 4Mics ENx, Fast Charge,
                  Beast Mode, IPX5 Bluetooth Headset
                </div>
                <div className="flex justify-center basis-auto px-2">
                  <div className="text-[#707070] inline whitespace-pre-wrap text-center mx-1.5 line-through text-[14px] !leading-5 font-[inter-regular]">
                    4,900
                  </div>
                  <div className=" inline whitespace-pre-wrap text-center me-1.5 font-medium text-[14px] !leading-5 font-[inter-semibold]">
                    ₹1,299
                  </div>
                  <div className="text-[#108934] inline font-[inter-semibold] text-[14px]  !leading-[20px] tracking-[-.01px] shrink-[1] me-1.5">
                    74% off
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-[0.45_1_0%] flex flex-col">
            <div className="flex-[0.5_1_0%] border-l border-b border-l-[#ebebeb] border-b-[#ebebeb] py-3 w-[206.39px]">
              <div className="flex flex-col basis-auto shrink-0 ">
                <Link to="/">
                  <div className="flex flex-col items-stretch px-2 ">
                    <div className="flex-[1_1_0%] aspect-square">
                      <img
                        src="https://rukminim1.flixcart.com/image/340/340/xif0q/headphone/2/w/s/-original-imahfqzgmku3buk4.jpeg?q=90"
                        alt=""
                        className="w-full m-auto object-contain aspect-square"
                      />
                    </div>
                  </div>
                  <div className="px-2 pt-2 text-[#1f1f1f] truncate !leading-5 tracking-[.01px]">
                    Marshall Minor IV Wireless Earbuds 30+ Hr of Playtime,
                    Water-Resistant, Wireless Charging Bluetooth Headset
                  </div>
                  <div className="flex justify-center basis-auto px-2">
                    <div className="text-[#707070] inline whitespace-pre-wrap text-center mx-1.5 line-through text-[14px] !leading-5 font-[inter-regular]">
                      4,900
                    </div>
                    <div className=" inline whitespace-pre-wrap text-center me-1.5 font-medium text-[14px] !leading-5 font-[inter-semibold]">
                      ₹1,299
                    </div>
                    <div className="text-[#108934] inline font-[inter-semibold] text-[14px]  !leading-[20px] tracking-[-.01px] shrink-[1] me-1.5">
                      74% off
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="flex-[0.5_1_0%] border-l border-b border-l-[#ebebeb] border-b-[#ebebeb] py-3 w-[206.39px]">
              <div className="flex flex-col basis-auto shrink-0 ">
                <Link to="/">
                  <div className="flex flex-col items-stretch px-2 ">
                    <div className="flex-[1_1_0%] aspect-square">
                      <img
                        src="https://rukminim1.flixcart.com/image/340/340/xif0q/headphone/2/w/s/-original-imahfqzgmku3buk4.jpeg?q=90"
                        alt=""
                        className="w-full m-auto object-contain aspect-square"
                      />
                    </div>
                  </div>
                  <div className="px-2 pt-2 text-[#1f1f1f] truncate !leading-5 tracking-[.01px]">
                    Marshall Minor IV Wireless Earbuds 30+ Hr of Playtime,
                    Water-Resistant, Wireless Charging Bluetooth Headset
                  </div>
                  <div className="flex justify-center basis-auto px-2">
                    <div className="text-[#707070] inline whitespace-pre-wrap text-center mx-1.5 line-through text-[14px] !leading-5 font-[inter-regular]">
                      4,900
                    </div>
                    <div className=" inline whitespace-pre-wrap text-center me-1.5 font-medium text-[14px] !leading-5 font-[inter-semibold]">
                      ₹1,299
                    </div>
                    <div className="text-[#108934] inline font-[inter-semibold] text-[14px]  !leading-[20px] tracking-[-.01px] shrink-[1] me-1.5">
                      74% off
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuggestedForMe;
