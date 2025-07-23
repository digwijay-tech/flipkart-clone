type ProductCardProps = {
  product: {
    title: string;
    src: string;
    srcset1: string;
    srcset2: string;
    pricestartfrom: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-[172px]  flex snap-start shrink-0 ">
      <div className="m-2 flex-[1] ">
        <div className="h-full w-full ">
          <a
            href="#"
            className="flex flex-row relative rounded-[4px] justify-between px-6 py-3"
          >
            <div className="flex flex-col flex-[1] ">
              <div className="flex-[1] overflow-hidden rounded-[2px] w-full hover:scale-[104%]">
                <picture>
                  <source
                    srcSet={product.srcset1}
                    media="(min-width: 1192px)"
                  />
                  <source
                    srcSet={product.srcset2}
                    media="(min-width: 768px) and (max-width: 1191px)"
                  />
                  {/* <div className="h-[152px] w-[152px]"> */}
                  <img
                    src={product.src}
                    alt="Image"
                    className="object-contain [aspect-ratio:1/1]  block  m-auto lg:h-[108px] lg:w-[108px] w-full"
                  />
                  {/* </div> */}
                </picture>
              </div>
              <div className="flex flex-col items-center pt-3 font-[inter-regular]">
                <div className="inline whitespace-nowrap text-center overflow-ellipsis text-[14px] !leading-[20px] tracking-[-.01px] max-w-full ">
                  {product.title}
                </div>
                <div className="inline whitespace-nowrap text-center overflow-ellipsis font-[inter-semibold] text-[14px] !leading-[20px] tracking-[-.01px] max-w-full">
                  {product.pricestartfrom}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
