import { Link } from "react-router-dom";
type SpecialDealProps = {
  product: {
    src: string;
    srcset1: string;
    srcset2: string;
  };
};
const SpecialDealsCard = ({ product }: SpecialDealProps) => {
  return (
    <div className="w-[118px] md:w-[177px] flex flex-col ">
      <Link to="/" className="flex flex-col rounded-2xl overflow-hidden ms-3">
        <div className="aspect-[53/80] w-full flex-1">
          <picture>
            <source srcSet={product.srcset1} media="(min-width: 1192px)" />
            <source srcSet={product.srcset2} media="(min-width: 768px) and (max-width: 1191px)" />
            <img
              src={product.src}
              alt="Image"
              className="aspect-[53/80] object-cover block w-full m-auto"
            />
          </picture>
        </div>
      </Link>
    </div>
  );
};

export default SpecialDealsCard;
