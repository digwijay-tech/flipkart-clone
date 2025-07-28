import { useEffect, useState } from "react";
import SpecialDealsCard from "./SpecialDealsCard";
import axios from "axios";
type SpecialProps={
    path: string
}
type ProductImage = {
  src: string;
  srcset1: string;
  srcset2: string;
};
type DealType = {
  title: string;
  dealbg: {
    bgsrc: string;
    bgsrcset1: string;
    bgsrcset2: string;
    bgcolor :string
  };
  dealimage: ProductImage[];
};
const SpecialDeals = ({path}:SpecialProps) => {
  const [deal, SetDeal] = useState<DealType>();

  useEffect(() => {
    axios.get("./carouse.json").then((res) => SetDeal(res.data.superdeals[path]));
  }, []);
  return (
    <div className="h-full bg-white col-[1/13] relative overflow-hidden">
      <div className="my-3 mx-4 flex flex-col ">
        <div className=" flex flex-col  h-[108px]  relative">
          <div className="flex flex-col ">
            <div className="aspect-[82/33] w-full relative">
              <picture>
                <source
                  srcSet={deal?.dealbg.bgsrcset1}
                  media="(min-width: 1192px)"
                />
                <source
                  srcSet={deal?.dealbg.bgsrcset2}
                  media="(min-width: 768px) and (max-width: 1191px)"
                />
                <img
                  src={deal?.dealbg.bgsrc}
                  alt="Image"
                  className="rounded-2xl rounded-b-[0px] aspect-[82/33] object-contain block w-full"
                />
              </picture>
            </div>
          </div>
          <div className="mx-4 mt-4 font-[inter-bold] text-[17px] !leading-[24px] flex-1 absolute top-0">
            {deal?.title}
          </div>
        </div>
        <div className={`flex flex-1 ${deal?.dealbg.bgcolor}  rounded-b-2xl`}>
          <div className="flex flex-row relative overflow-x-scroll mb-3 mt-[-56px] [scrollbar-width:none]">
            <div className="flex flex-row ">
              {deal?.dealimage.map((item, index) => (
                <SpecialDealsCard product={item} key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDeals;
