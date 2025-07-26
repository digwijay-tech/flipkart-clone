import { Link } from "react-router-dom"

const SmallCategoryitems = () => {
  return (
    <div className="w-[66.72727272727272px] flex flex-col items-center bg-white">
      <Link to="/">
      <div className="flex items-center flex-col h-[50.72727272727273px] w-[50.72727272727273px] ">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/102/102/image/ac8ae38a7d93283b.jpg?q=80" alt="" className="w-full h-full m-auto object-contain aspect-[auto_50.7273_/_50.7273;]" />
      </div>
      <div className="w-[66.72727272727272px] text-[10px] mt-1.5 text-center font-[inter-semibold] whitespace-nowrap !leading-[14px] truncate">
        food And health
      </div>
      </Link>
    </div>
  )
}

export default SmallCategoryitems