import SmallCategoryitems from "./SmallCategoryitems"

const SmallCategoryList = () => {
  return (
    <div className="h-auto bg-white col-[1/13] ">
        <div className="pt-3 pb-1 ps-2  overflow-x-scroll overflow-y-hidden flex flex-row [scrollbar-width:none]">
            <div className="flex flex-col shrink-0 me-2">
                <div className="flex flex-row shrink-0 mb-2">
                    <div className="w-[133.45454545454544px] flex flex-col shrink-0">
                        <div className="flex-col items-center ">
                            <div className="flex flex-col">
                                <div className="mx-auto overflow-hidden w-[117.455px] h-[50.3377px]">
                                    <img src="#" alt="Not Available" />
                                </div>
                            </div>
                            <div className="text-[10px] mt-1.5 text-center whitespace-nowrap max-w-full">
                                Flipkart Minutes
                            </div>
                        </div>
                    </div>
                  <SmallCategoryitems/>   
                  <SmallCategoryitems/>
                  <SmallCategoryitems/>
                  <SmallCategoryitems/>   
                  <SmallCategoryitems/>
                  <SmallCategoryitems/>
                </div>
               <div className="flex flex-row shrink-0 mb-2">
                <SmallCategoryitems/>
               </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default SmallCategoryList