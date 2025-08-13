import { useContext } from "react";
import ProductCardVertical from "./ProductCards/ProductCardVertical";
import { SortContext } from "../../../context/SortContext";
import { useSort } from "../../../../Hooks/useSort";

const ProductGridSection = () => {
  const { products, sort } = useContext(SortContext);
  const sortedArray = useSort(products, sort);
  return (
    <div className="flex flex-col ">
      {Array.isArray(products) &&
        sortedArray.map((item) => <ProductCardVertical product={item} />)}
    </div>
  );
};

export default ProductGridSection;
