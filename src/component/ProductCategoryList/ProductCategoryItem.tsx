import { Link } from "react-router-dom"

type CategoryItemsProps ={
  item :{
    title:string
    src:string
  }
  index: number
}

const ProductCategoryItem = ({item,index}:CategoryItemsProps) => {
  return (
    <div className={`p-4  ${index===0 && "ps-6"}`}>
      <Link to={`/products/${item.title}`} className="min-w-[90px] block relative cursor-pointer">
        <div>
          <div className="mb-1 text-center ">
            <div className="mx-auto h-16 w-16 " >
            <img src={item.src} alt=""  className=""/>
          </div>
          </div>
          <div className=" text-[14px] flex items-center justify-center text-center font-[inter-regular] ">
            <span>{item.title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategoryItem;
