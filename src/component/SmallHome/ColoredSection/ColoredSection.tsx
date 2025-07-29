import { useEffect, useState } from "react";
import ColoredSectionCard from "./ColoredSectionCard";
import axios from "axios";
import ColoredSectionBtn from "./ColoredSectionBtn";
type ColorSectionProps={
  visiblility?:string|null
}
const ColoredSection = ({visiblility}:ColorSectionProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => setProducts(res.data.trendumaylike));
  }, []);
  return (
    <div className="col-[1/13] h-full bg-white ">
      <div className="mx-4 my-3 flex flex-col bg-[#d7f2e8] rounded-[16px]">
        <div className="h-[108px] flex shrink-0 relative overflow-hidden ustify-between">
          <div className=" flex flex-1 flex-row relative mx-4 mt-4 w-full justify-between">
            <span className="flex  font-[inter-semibold] text-[17px] !leading-[24px] ">
              {" "}
              Popular nearby
            </span>
            <ColoredSectionBtn property={visiblility}/>
          </div>
        </div>
        <div className=" flex flex-[1_1_0%] flex-col relative z-0  rounded-[12px] bg-white mx-3 mb-3 mt-[-56px] pt-2 ps-2">
          <div className="flex [flex-flow:wrap] flex-[1_1_0%]">
            {products.map((item, index) => (
              <ColoredSectionCard product={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoredSection;
