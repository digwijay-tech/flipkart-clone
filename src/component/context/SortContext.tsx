import { createContext } from "react";
type Contexttype ={
    sort : string
    setSort : React.Dispatch<React.SetStateAction<string>>
}
export const SortContext = createContext<Contexttype>({
    sort: "",
    setSort: () => {}
})
