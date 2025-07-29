import { Link } from "react-router-dom"

const AdBannerSmall = () => {
  return (
    <div className="h-full col-[1/13] w-full bg-white">
        <Link to="" className="flex flex-col items-stretch">
        <div className="aspect-[3/1] w-full flex-1">
        <picture>
            <source srcSet="https://rukminim1.flixcart.com/fk-p-flap/1580/530/image/593ee701e8a69087.jpeg?q=80 1x, https://rukminim1.flixcart.com/fk-p-flap/3160/1060/image/593ee701e8a69087.jpeg?q=60 2x, " media="(min-width: 1192px)"/>
            <source srcSet="https://rukminim1.flixcart.com/fk-p-flap/990/330/image/593ee701e8a69087.jpeg?q=80 1x, https://rukminim1.flixcart.com/fk-p-flap/1980/660/image/593ee701e8a69087.jpeg?q=60 2x, " media="(min-width: 768px) and (max-width: 1191px)"/>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/480/160/image/593ee701e8a69087.jpeg?q=90" alt="" />
        </picture>
        </div>
        </Link>
    </div>
  )
}

export default AdBannerSmall