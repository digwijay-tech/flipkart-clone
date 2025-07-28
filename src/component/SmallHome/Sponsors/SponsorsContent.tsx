import SponsorsCard from "./SponsorsCard";

type Product = {
    src?: string 
    srcset1? : string 
    srcset2? : string
}

type ContentProps = {
  product:Product[],
  startfrom : number
}

const SponsorsContent = ({product,startfrom }:ContentProps) => {
  return (
    <div className="flex flex-col my-3 me-1 ms-4 md:my-4 md:mx-3 md:max-w-[700px]">
      <div className="flex flex-row overflow-x-scroll overflow-y-hidden snap-start snap-mandatory [scrollbar-width:none]">
        {/* card component */}
        {product.slice(startfrom, startfrom+3).map((item, index) => (
          <SponsorsCard sponsors={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default SponsorsContent;
