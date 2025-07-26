import { Link } from "react-router-dom";
type ProductCardProps={
  product :{
    src:string
    srcset1 : string 
    srcset2 : string
  }
}
const SmallProductCard = ({product}:ProductCardProps) => {
  return (
    <div className="flex flex-col w-[128px] md:w-[192px] snap-start snap-always shrink-0">
      <Link
        to="/"
        className="flex  flex-col items-stretch overflow-hidden me-3"
      >
        <div className="flex-1 w-full aspect-[116/175] ">
          <source
            srcSet={product.srcset1}
            media="(min-width: 1192px)"
          />
          <source
            srcSet={product.srcset2}
            media="(min-width: 768px) and (max-width: 1191px)"
          />
          <img
          src={product.src}
            alt="Image"
            className="aspect-[116/175] block object-cover w-full m-auto rounded-xl"
          />
        </div>
      </Link>
    </div>
  );
};

export default SmallProductCard;
