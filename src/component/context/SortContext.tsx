import { createContext } from "react";
import type { SetURLSearchParams } from "react-router-dom";
type filterCategory ={
  category: string
  items :[]
}
type Contexttype ={
    sort : string
    setSort : React.Dispatch<React.SetStateAction<string>>
    searchParam : URLSearchParams
    setSearchParam: SetURLSearchParams
    filterCategory : filterCategory[]
}
export const SortContext = createContext<Contexttype>({
    sort: "",
    setSort: () => {},
    searchParam: new URLSearchParams(),
    setSearchParam: ()=>{},
    filterCategory :[]
})
