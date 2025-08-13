import { useContext } from "react";
import { SortContext } from "../../../context/SortContext";
import SmallProductCard from "../SmallProductCard";
import { useSort } from "../../../../Hooks/useSort";

type Product = {
  prod_id: string;
  brand: string;
  title: string;
  prod_image: {
    src: string;
    srcset1: string;
  };
  discount_percentage: number;
  previous_price: number;
  current_price: number;
  emi_price: string;
  offered_banks: string;
  assuredby: string;
  tag: string;
  isSponsored: boolean;
  rating: number;
};

const SmallProductGrid = () => {
  const { sort, products } = useContext(SortContext);
  const sortedArray = useSort(products, sort);
  return (
    <div className="grid grid-cols-2">
      {Array.isArray(products) &&
        sortedArray.map((item, index) => (
          <SmallProductCard key={index} product={item} />
        ))} 
    </div>
  );
};

export default SmallProductGrid;