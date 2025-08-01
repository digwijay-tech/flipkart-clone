import { useFetch } from "../../../Hooks/useFetch"
import QuickCategoryCard from "./QuickCategoryCard"

type QuickFilterProps={
    isScroll : boolean
}
type ResultType ={
  title :string
    src : string
    srcset : string
}
type FetchDataType ={
   result :ResultType[]
   error : string
   isLoading : string
}
const QuickFilterSmall = ({isScroll}:QuickFilterProps) => {
    const fetchData= useFetch<FetchDataType>("QuickFilter")
// console.log(fetchData.result)    
  return ( 
    <div className={`flex relative flex-col h-[56px] bg-white transition-all transform  z-[1] ${isScroll?"":"translate-y-[-200%]"}`}>
        <div className="flex flex-col overflow-x-scroll [scrollbar-width:none] ">
            <div className="h-[56px] px-[11px] flex flex-row  w-[415px] ">
                {Array.isArray(fetchData.result)&& fetchData.result.map((item: { title: string; src: string ; srcset:string})=>(
                    <QuickCategoryCard item={item} />
                ))}
                {/* <QuickCategoryCard item={}/> */}
            </div>
        </div>
    </div>
  )
}

export default QuickFilterSmall
