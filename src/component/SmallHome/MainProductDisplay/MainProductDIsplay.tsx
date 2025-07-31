import { useEffect, useState } from "react"
import ProductCardMain from "./ProductCardMain"
import axios from "axios"

const MainProductDIsplay = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("./carouse.json")
        .then(res=>setProducts(res.data.products.homeproducts))
        .catch(err=>console.log(err))
    },[])
    console.log(products)
  return (
    <div className='col-[1/13] h-full bg-white'>
        <div className='w-full h-full grid grid-cols-2 '>
            {Array.isArray(products) && products.map((item,index)=>(
                <ProductCardMain product={item} key={index}/>
            ))}
            
        </div>
    </div>
  )
}

export default MainProductDIsplay