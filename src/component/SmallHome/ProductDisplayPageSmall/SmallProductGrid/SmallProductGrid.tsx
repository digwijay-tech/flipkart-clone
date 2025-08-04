import { useContext } from "react";
import { SortContext } from "../../../context/SortContext";
import SmallProductCard from "../SmallProductCard"

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
  rating : number
};
type GridProps = {
  products: Product[];
};
const SmallProductGrid = ({ products }: GridProps) => {
  const {sort}= useContext(SortContext)
  let sortedArray:Product[] = [];
  switch(sort){
    case "popularity": sortedArray = [...products].sort((a,b)=> a.rating - b.rating)
        break;
    case "price-high_to_low" : sortedArray=[...products].sort((a,b)=> a.current_price - b.current_price )
    break;
    case "price-low_to_high": sortedArray=[...products].sort((a,b)=>b.current_price - a.current_price )
    break;
    case "newsest_first" : sortedArray=products.reverse()
     break;
    case "discount":sortedArray=[...products].sort((a,b)=>b.discount_percentage - a.discount_percentage )
    break;
    default : <>no product found</>
    }
  return (
    <div className="grid grid-cols-2">
      {Array.isArray((products)) &&
        sortedArray.map((item,index) => (
          <SmallProductCard key={index} product={item} />
        ))}
    </div>
  );
};

export default SmallProductGrid;
