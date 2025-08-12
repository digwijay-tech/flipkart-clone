import { Link } from "react-router-dom";

type OfferProps ={
    product :{
        src :string 
        srcset1 :string
        srcset2 :string
        path ?: string
    }
}
const OfferCard = ({product}:OfferProps) => {
  return (
    <div className="basis-[33.33333%] max-w-[33.33333%] shrink-0 grow-0 ">
      <Link to={`/products/${product.path}`} className="flex flex-col me-3 md:me-6 items-stretch">
        <div className="w-full aspect-[3/4]">
          <picture>
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
              className="object-contain aspect-[3/4] w-full block m-auto rounded-xl"
              alt="Not found"
            />
          </picture>
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;
