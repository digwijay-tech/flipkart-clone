import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
type ProductProps = {
  categoryname: string;
  style?: string;
};
const ProductsDisplay = ({ categoryname, style }: ProductProps) => {
  const [productTitle, setProductTitle] = useState();
  const [productDetails, setProductDetails] = useState([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] =useState(0)
  const [canScrollMore, setCanScrollMore]=useState(true)
  
  // const [buttonVisiblity, setButtonVisiblity]= useState(true)
  // useEffect(()=>{
  //   const wrapper = wrapperRef.current
  //   const scroll = scrollRef.current
  //   if(!wrapper || !scroll) return;
    
  //   const wrapperWidth = wrapper.offsetWidth
  //   const scrollWidth = scroll.scrollWidth
  //     setButtonVisiblity(visibility =>wrapperWidth >= scrollWidth ? !visibility : visibility)
  // },[translate])

  const handleNext = () => {
    const wrapper = wrapperRef.current
    const scroll = scrollRef.current
    if(!wrapper || !scroll) return;
    
    const wrapperWidth = wrapper.offsetWidth
    const scrollWidth = scroll.scrollWidth
    const hiddenWidth= scrollWidth-wrapperWidth

    if(hiddenWidth > 0){
      const moveBy = Math.min(wrapperWidth , hiddenWidth)
      setTranslate(prev => prev-moveBy)

      setCanScrollMore(!canScrollMore)
    }
    
  };
    const handlePrev = () => {
    const wrapper = wrapperRef.current
    console.log("previous")
     setCanScrollMore(!canScrollMore)
    if(!wrapper ) return;
    
    const wrapperWidth = wrapper.offsetWidth
    
    const canscroll = Math.abs(translate)>0

    if(canscroll){
      const moveBy = Math.min(wrapperWidth , Math.abs(translate))
      setTranslate(prev => prev+moveBy)
    }
    
  };
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => {
        setProductTitle(res.data.ProductHighlight[categoryname].title);
        setProductDetails(res.data.ProductHighlight[categoryname].Products);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(categoryname);
  return (
    <div className={`h-auto bg-white mb-[16px] ${style}`}>
      <div className="flex flex-col relative z-0">
        <div className="flex flex-[1] flex-row items-center px-3 py-4  lg:p-4 ">
          <div className="text-[#1f1f1f] inline whitespace-nowrap overflow-hidden overflow-ellipsis align-middle text-[22px] !leading-[30px] tracking-[-.02px] font-[inter-semibold]">
            {productTitle}
          </div>
        </div>
        <div
          ref={wrapperRef}
          className="flex flex-col relative min-[1190px]:overflow-hidden "
        >
          <div
            ref={scrollRef}
            className="flex max-[1190px]:overflow-x-scroll scroll-smooth  w-full transition-[transform_.4s_ease-in-out] snap-start p-1.5 [scrollbar-width:none] pb-3"
            style={{
              transform: `translateX(${translate}px)`,
            }}
          >
            {productDetails.map((productdetail, index) => (
              <ProductCard product={productdetail} key={index} />
            ))}
          </div>
          <button className={` hidden absolute cursor-pointer  bottom-0 top-20 right-0  h-[88px] w-10 shadow-[0px_1px_4px_rgba(0,0,0,.12)] rounded-[4px_0px_0px_4px] bg-white ${canScrollMore? "min-[1190px]:flex":"" }`} onClick={handleNext} >
            <span className="absolute right-[16px] top-[50%] transform-[scale(1)_translateY(-50%)] before: [content:''] before:relative before:border-[#878787] before:border-[2px_2px_0px_0px] before:inline-block before:h-[6px] before:w-[6px] before:transform-[rotate(45deg)] "></span>
          </button>
          <button className={` hidden absolute cursor-pointer  bottom-0 top-20 left-0  h-[88px] w-10 shadow-[0px_1px_4px_rgba(0,0,0,.12)] rounded-[4px_0px_0px_4px] bg-white ${!canScrollMore? "min-[1190px]:flex":"" } `} onClick={handlePrev}>
            <span className="absolute right-[16px] top-[50%] transform-[scale(1)_translateY(-50%)] before: [content:''] before:relative before:border-[#878787] before:border-[2px_2px_0px_0px] before:inline-block before:h-[6px] before:w-[6px] before:transform-[rotate(-135deg)] "></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
