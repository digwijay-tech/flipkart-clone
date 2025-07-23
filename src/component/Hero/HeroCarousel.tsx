import axios from "axios";
import { useEffect, useState } from "react";
type Carosel = {
  id: number;
  srcset1?: string;
  srcset2?: string;
  src: string;
};
const HeroCarousel = () => {
  const [carousel, setCarousel] = useState<Carosel[]>([]);
  const [currentSlide, SetCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Carousel timer
  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentSlide((prev) => (prev >= carousel.length - 1 ? 0 :prev= prev + 1));
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [carousel.length]);
  
   const nextSlide=()=>{
    if(currentSlide >=carousel.length-1){
      SetCurrentSlide(0)
    }else{
      SetCurrentSlide(currentSlide+1)
    }
   }
  // Progress bar timer
  useEffect(() => {
    let step = 100 / (4000 / 50);

    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + step));
    }, 50);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    axios
      .get("/carouse.json")
      .then((res) => setCarousel(res.data.carosel))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="relative flex flex-col md:mb-4 md:bg-white overflow-hidden z-0 col-[1/13]">
      <div
      style={{ transform: `translateX(-${currentSlide*100}%)` }}
        className={`  flex scroll-smooth snap-x snap-mandatory transition-[transform_.4s_ease-in-out] `}
      >
        {carousel.map((item) => (
          <div className="snap-start shrink-0 w-full " key={item.id}>
            <div className="h-full w-full ">
              <a href="" className="rounded-[16px] flex flex-col mx-4 mt-3 md:mx-[unset] md:mt-[unset]">
                <picture>
                  <source srcSet={item.srcset1} media="(min-width: 1192px)" />
                  <source
                    srcSet={item.srcset2}
                    media="(min-width: 768px) and (max-width: 1191px)"
                  />
                  <img
                    src={item.src}
                    alt="Image"
                    className="opacity-[1] w-full block object-cover  rounded-2xl md:rounded-none"
                  />
                </picture>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full  pt-2 pb-3 flex items-center justify-center flex-row bg-white relative ">
        {carousel.map((item, index) => (
          <div
            className={` h-1 rounded-[2px] mx-1 bg-[#00000021] ${
              currentSlide === index ? "w-[48px]" : "w-3"
            } `}
            key={index}
          >
            <div
              className={` bg-black h-full rounded-[2px] ${
                currentSlide === index ? " " : "hidden"
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HeroCarousel;
