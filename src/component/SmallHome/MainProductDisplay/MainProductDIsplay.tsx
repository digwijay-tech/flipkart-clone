import ProductCardMain from "./ProductCardMain";
import { useFetch } from "../../../Hooks/useFetch";

const MainProductDIsplay = () => {
  const products = useFetch("homeproducts");
  return (
    <div className="col-[1/13] h-full bg-white">
      <div className="w-full h-full grid grid-cols-2 ">
        {Array.isArray(products.result) &&
          products.result.map((item, index) => (
            <ProductCardMain product={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MainProductDIsplay;
