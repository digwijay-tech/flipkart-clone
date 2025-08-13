import { createContext } from "react";
import type { SetURLSearchParams } from "react-router-dom";
type filterCategory ={
  category: string
  items :[]
}
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
type Contexttype ={
    sort : string
    setSort : React.Dispatch<React.SetStateAction<string>>
    searchParam : URLSearchParams
    setSearchParam: SetURLSearchParams
    filterCategory : filterCategory[]
    typedPath : string
    title :string
    products:Product[]
}
export const SortContext = createContext<Contexttype>({
    sort: "",
    setSort: () => {},
    searchParam: new URLSearchParams(),
    setSearchParam: ()=>{},
    filterCategory :[],
    typedPath :"",
    title:"",
    products : []
})
