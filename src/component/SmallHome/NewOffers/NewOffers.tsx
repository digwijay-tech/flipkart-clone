import { useEffect, useState } from "react"
import OfferCard from "./OfferCard"
import axios from "axios"

const NewOffers = () => {
    const [products ,setProducts]=useState([])
    useEffect(()=>{
        axios.get("./carouse.json")
        .then(res=>setProducts(res.data.Smallscreenoffer))
    },[])
  return (
    <div className="h-full col-[1/13] bg-white">
        <div className="my-3 ms-4 me-1 flex flex-row ">
            {/* NewOfer Card  */}
            {products.map(item=>(<OfferCard product={item}/>))}
            
        </div>
    </div>
  )
}

export default NewOffers