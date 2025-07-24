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
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [carousel.length]);

  const nextSlide = () => {
    SetCurrentSlide((prev) =>
      prev >= carousel.length - 1 ? 0 : (prev = prev + 1)
    );
  };

  const previousSlide = () => {
    SetCurrentSlide((prev) =>
      prev === 0 ? (prev = carousel.length - 1) : (prev = prev - 1)
    );
  };

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
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        className={`  flex scroll-smooth snap-x snap-mandatory transition-[transform_.4s_ease-in-out] relative`}
      >
        {carousel.map((item) => (
          <div className="snap-start shrink-0 w-full " key={item.id}>
            <div className="h-full w-full ">
              <a
                href=""
                className="rounded-[16px] flex flex-col mx-4 mt-3 md:mx-[unset] md:mt-[unset]"
              >
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
      <button
        className=" hidden absolute  cursor-pointer bottom-0 top-20 right-0 min-[1190px]:flex h-[88px] w-10 shadow-[0px_1px_4px_rgba(0,0,0,.12)] rounded-[4px_0px_0px_4px] bg-white"
        onClick={nextSlide}
      >
        <span className="absolute right-[16px] top-[50%] transform-[scale(1.5)_translateY(-50%)] before: [content:''] before:relative before:border-[#878787] before:border-[1.5px_1.5px_0px_0px] before:inline-block before:h-[6px] before:w-[6px] before:transform-[rotate(45deg)] "></span>
      </button>
      <button
        className=" hidden absolute cursor-pointer bottom-0 top-20 left-0 min-[1190px]:flex h-[88px] w-10 shadow-[0px_1px_4px_rgba(0,0,0,.12)] rounded-[4px_0px_0px_4px] bg-white"
        onClick={previousSlide}
      >
        <span className="absolute right-[16px] top-[50%] transform-[scale(1.5)_translateY(-50%)] before: [content:''] before:relative before:border-[#878787] before:border-[1.5px_1.5px_0px_0px] before:inline-block before:h-[6px] before:w-[6px] before:transform-[rotate(-135deg)] "></span>
      </button>
      {/* progress bar  */}
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
