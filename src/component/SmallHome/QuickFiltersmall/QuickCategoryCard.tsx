 type QuickCardProps={
    item:{
        title:string 
        src: string
        srcset : string
    }
 }
const QuickCategoryCard = ({item}:QuickCardProps) => {
  return (
    <div className="">
        <div className="ps-1 pe-2 h-10 mt-2 mx-1 flex  border border-[#dbdbdb] rounded">
            <div className="me-2 flex flex-row  h-full items-center">
                <div className="w-[32px] h-[32px] flex flex-row ">
                    <img src={item.src} className=" w-full h-full m-auto object-contain" loading="lazy" srcSet={item.srcset} height="32" width="32" />
                </div>
            </div>
            <div className="flex flex-col h-full leading-[14px]" >
                <span className=" text-[12px] whitespace-pre-wrap break-words font-roboto !leading-[19px]">{item.title}</span>
            </div>
        </div>
    </div>
  )
}
     

export default QuickCategoryCard


