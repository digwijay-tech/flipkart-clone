type ProductCardsProps={
    product : {
        title : string
        description : string
        src: string 
        srcset1 : string 
        srcset2 : string
    }
}
const ProductCardLimited = ({product}:ProductCardsProps) => {
  return (
    <div className="basis-[25%] max-w-[25%] grow-0 shrink-0 ">
      <div className="mx-1.5 mb-2 ">
        <a
          href="#"
          className="pb-3 flex border-[1px] border-[#ebebeb] rounded-[4px] flex-col items-center"
        >
          <div className="flex basis-auto flex-col px-3 pt-3 w-full">
            <div className="px-2 pt-2 flex items-stretch ">
              <div className=" flex-[1_1_0] overflow-hidden w-full">
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
                    alt="Image"
                    className="w-[full]  block object-contain m-auto"
                    srcSet="https://rukminim1.flixcart.com/image/90/90/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=80 1x, https://rukminim1.flixcart.com/image/180/180/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=60 2x, "
                  />
                </picture>
              </div>
            </div>
            <div className=" pt-4 flex flex-col items-stretch">
              <div className="inline truncate max-w-full text-[17px] leading-[24px] tracking-[-.01px]">
                {product.title}
              </div>
              <div className="flex basis-auto shrink-0 items-center ">
                <div className=" inline truncate me-1.5 font-[inter-semibold] max-w-full text-[17px] leading-[24px] text-[#108934] ">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCardLimited;
