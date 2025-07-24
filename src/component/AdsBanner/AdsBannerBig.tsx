import axios from "axios"
import { useEffect, useState } from "react"
type AdsProps={
    category:string
}
type ImageProps={
    src : string 
    srcset1:string 
    srcset2:string
}
const AdsBannerBig = ({category}:AdsProps) => {
    const [imageSource,setImageSource]=useState<ImageProps>()
    useEffect(()=>{
        axios.get("/carouse.json")
        .then(res=> setImageSource(res.data.adBanner[category]))
    },[])
    
  return (
    <div className="col-[5/13] hidden min-[1190px]:block ">
        <div className="h-auto flex justify-center overflow-hidden flex-col w-full mb-4">
            <a className="aspect-[894/627] w-full block cursor-pointer">
            <picture>
                <source srcSet={imageSource?.srcset1} media="(min-width: 1192px)"/>
                <source srcSet={imageSource?.srcset2} media="(min-width: 768px) and (max-width: 1191px)"/>
                <img src={imageSource?.src} alt="Image"  className="aspect-[894/627] object-cover w-full m-auto block"/>
            </picture>
            </a>
        </div>
    </div>
  )
}

export default AdsBannerBig