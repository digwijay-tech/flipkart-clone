type RecentCardProps = {
  product: {
    title: string;
    image: {
      src: string;
      srcset1: string;
      srcset2: string;
    };
    previousPrice: string;
    discountPrice: string;
  };
};

const RecentViewCard = ({ product }: RecentCardProps) => {
  return (
    <div className="w-40  min-[1190px]:w-[200px] flex snap-start  shrink-0 ">
      <div className="m-1.5 flex  items-stretch flex-col  w-full">
        <div>
          <a
            href="#"
            className="flex border-[1px] border-[#ebebeb] p-1.5 rounded-[4px] items-stretch flex-col w-full"
          >
            <div className="flex- overflow-hidden  w-full aspect-square">
              <picture >
                <source
                  srcSet={product.image.srcset1}
                  media="(min-width: 1192px)"
                />
                <source
                  srcSet={product.image.srcset2}
                  media="(min-width: 768px) and (max-width: 1191px)"
                />
                <img
                  src={product.image.src}
                  alt="image"
                  className="w-[134px] h-[134px] min-[1190px]:w-[170px] min-[1190px]:h-[170px] aspect-square  block object-contain m-auto"
                />
              </picture>
            </div>
            <div className="pt-3 flex basis-auto flex-col shrink-0 items-stretch w-full">
              <div className="inline whitespace-nowrap max-w-[134px] text-center tracking-[-0.01px] !leading-[20px] font-[inter-regular] text-[14px] min-[1190px]:max-w-[170px] truncate">
                {product.title}
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <div className="pe-1 inline whitespace-nowrap max-w-full truncate text-[14px]  !leading-[20px] font-[inter-semibold]">
                  {product.discountPrice}
                </div>
                <div className="line-through text-[#707070] text-[14px] font-[inter-regular] inline whitespace-pre-wrap ">
                  {product.previousPrice}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentViewCard;
