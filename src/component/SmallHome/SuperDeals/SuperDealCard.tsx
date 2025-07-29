import { Link } from "react-router-dom"
type SuperCardProps ={
    image : {
        src : string
        srcset1 : string
        srcset2 : string
    }
}
const SuperDealCard = ({image}:SuperCardProps) => {
  return (
    <div className=" flex flex-col w-[208px] md:w-[312px] shrink-0">
        <Link to="" className="me-3 aspect-[49/65] w-full flex-[1_1_0%]">
        <picture>
            <source srcSet={image.srcset1} media="(min-width: 1192px)" />
            <source srcSet={image.srcset2} media="(min-width: 768px) and (max-width: 1191px)"/>
            <img src={image.src} alt="Image" className="aspect-[49/65] w-full object-cover m-auto rounded-2xl" />
        </picture>
        </Link>
    </div>
  )
}

export default SuperDealCard