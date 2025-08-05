import { createContext } from "react";
import type { SetURLSearchParams } from "react-router-dom";
type Contexttype ={
    sort : string
    setSort : React.Dispatch<React.SetStateAction<string>>
    searchParam : URLSearchParams
    setSearchParam: SetURLSearchParams
}
export const SortContext = createContext<Contexttype>({
    sort: "",
    setSort: () => {},
    searchParam: new URLSearchParams(),
    setSearchParam: ()=>{},
})
