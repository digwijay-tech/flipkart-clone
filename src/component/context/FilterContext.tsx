import  { createContext } from 'react'
type FilterCategoryType={
  category: string
  items :[]
}
type FilterContextType={
    value : string
    filterCategory : FilterCategoryType[]
}
export const FilterContext = createContext<FilterContextType>(
    {
        value : "",
        filterCategory : []
    }
)
  