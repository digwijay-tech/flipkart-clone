import axios from "axios";
import { useEffect, useState } from "react";
type Carosel = {
  id: number;
  srcset1?: string;
  srcset2?: string;
  src: string;
};
const HeroCarousel = () => {
  const [carousel, setCarousel] = useState<Carosel[]>([]);
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => setCarousel(res.data.carosel))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="relative flex flex-col md:mb-4 md:bg-white ">
      <div className="grid grid-flow-col overflow-x-auto overflow-y-hidden auto-cols-[100%] [scrollbar-width:none]">
        {carousel.map((item) => (
          <div className="grid auto-cols-fr grid-flow-col " key={item.id}>
            <div className="h-full w-full ">
              <a href="" className="rounded-[16px] flex flex-col mx-4 mt-3">
                <picture>
                  <source srcSet={item.srcset1} media="(min-width: 1192px)" />
                  <source
                    srcSet={item.srcset2}
                    media="(min-width: 768px) and (max-width: 1191px)"
                  />
                  <img
                    src={item.src}
                    alt="Image"
                    className="opacity-[1] w-full block object-cover  rounded-2xl md:rounded-none"
                  />
                </picture>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full  pt-2 pb-3 flex items-center justify-center flex-row bg-white relative ">
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-[48px] h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div> 
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
        <div className="w-3 h-1 rounded-[2px] mx-1 bg-[#00000021] "></div>
      </div>
    </div>
  );
};

export default HeroCarousel;
