import { Link } from "react-router-dom";
type ProductProps = {
  details: {
    title: string;
    image: {
      src: string;
      srcset1: string;
      srcset2: string;
    };
    currentprice: string;
    previousprice: string;
  };
};
const ProductCardSmall = ({ details }: ProductProps) => {
  return (
    <div className="max-w-[33.33333%] shrink-0 grow-0 ">
      <div className="flex flex-col">
        <Link
          to="/"
          className="bg-white flex flex-col overflow-hidden me-3 mb-3 relative"
        >
          <div className="flex-[1_1_0%] aspect-[13/17] w-full">
            <picture>
              <source
                srcSet={details.image.srcset1}
                media="(min-width: 1192px)"
              />
              <source
                srcSet={details.image.srcset2}
                media="(min-width: 768px) and (max-width: 1191px)"
              />
              <img
                src={details.image.src}
                className="aspect-[13/17] object-contain block w-full "
                alt="image"
              />
            </picture>
          </div>
          <div className=""></div>
          <div className="flex flex-col relative items-stretch mt-2 mb-1 ">
            <div className="truncate whitespace-nowrap font-[inter-regular] text-[12px] !leading-[18px] tracking-[0]">
              {details.title}
            </div>
            <div className="flex flex-row items-center">
              <span className="text-black text-[12px] !leading-[18px] font-[inter-semibold] whitespace-nowrap truncate ">
                {details.currentprice}
              </span>
              <span className="ms-1 line-through text-[12px] !leading-[18px] font-[inter-regular] text-[#c2c2c2]">
                {details.previousprice}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardSmall;
