import { Link } from "react-router-dom"

type SmallItem ={
  product : {
    title:string
    src :string
  }
}
const SmallCategoryitems = ({product}:SmallItem) => {
  return (
    <div className="w-[66.72727272727272px] min-[425px]:w-[75.8182px] md:w-[78.54545454545455px] flex flex-col items-center bg-white">
      <Link to="/product">
      <div className="flex items-center flex-col w-full">
      <div className="h-[50.72727272727273px] w-[50.72727272727273px] min-[425px]:h-[59.8182px] min-[425px]:w-[59.8182px] md:w-[62.54545454545455px] md:h-[62.54545454545455px] ">
        <img src={product.src} alt="" className="w-full h-full m-auto object-contain aspect-[auto_50.7273_/_50.7273;]" />
      </div>
      </div>
      <div className=" text-[10px] mt-1.5 text-center font-[inter-semibold] whitespace-nowrap !leading-[14px] truncate">
        {product.title}
      </div>
      </Link>
    </div>
  )
}

export default SmallCategoryitems