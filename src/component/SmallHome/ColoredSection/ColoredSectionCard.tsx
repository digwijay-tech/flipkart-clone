import { Link } from "react-router-dom";
type SectionProps = {
  product: {
    src: string;
    title: string;
  };
};
const ColoredSectionCard = ({ product }: SectionProps) => {
  return (
    <div className="flex grow-0 shrink-0 max-w-[50%] basis-[50%]">
      <div className="flex flex-col items-stretch mb-3 me-2 flex-[1_1_0%]">
        <Link to="/" className="flex flex-col relative rounded-[8px]">
          <div className=" flex flex-col relative  bg-[#f0f2f5] h-[187px] w-full">
            <img
              src={product.src}
              alt="image"
              className="aspect-[3/4] object-contain m-auto w-full h-full "
            />
          </div>
          <div className="flex flex-col relative mt-[-24px]  flex-[1_1_0%]">
            <div className="px-1 py-1.5 flex items-center pt-2 bg-[#d7f2e8] justify-center rounded-b-[8px]">
              <span className="font-[inter-semibold] text-[14px] !leading-[20px] truncate">
                {product.title}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ColoredSectionCard;
