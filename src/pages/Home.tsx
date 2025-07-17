import HeroCarousel from "../component/Hero/HeroCarousel";
import ProductCategoryList from "../component/ProductCategoryList/ProductCategoryList";
import ProductsDisplay from "../component/ProductDisplay.tsx/ProductsDisplay";

const Home = () => {
  return (
    <div className="md:px-4 min-h-lvh bg-[#f1f2f4] md:pt-2 md:[scrollbar-width:none] ">
      <div className="grid grid-cols-[repeat(12,1fr)] gap-x-[16px]  w-full">
        <ProductCategoryList />
        <HeroCarousel />
        
          <div className="col-[1/13] lg:col-[1/11]">
          <ProductsDisplay />
          </div>
          <div className=" col-[11/13] lg:block hidden">
            <a href="">
              <div className="[aspect-ratio:28/43] w-full flex-[1] ">
                <picture>
                  <source
                    srcSet="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/2d5c4c77b41d0d84.jpeg?q=80 1x, https://rukminim1.flixcart.com/fk-p-flap/1060/1620/image/2d5c4c77b41d0d84.jpeg?q=60 2x, "
                    media="(min-width: 1192px)"
                  />
                  <source
                    srcSet="https://rukminim1.flixcart.com/fk-p-flap/330/510/image/2d5c4c77b41d0d84.jpeg?q=80 1x, https://rukminim1.flixcart.com/fk-p-flap/660/1020/image/2d5c4c77b41d0d84.jpeg?q=60 2x, "
                    media="(min-width: 768px) and (max-width: 1191px)"
                  />
                  <img
                    src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/2d5c4c77b41d0d84.jpeg?q=90"
                    alt=""
                    className="[aspect-ratio:28/43] object-cover w-full"
                  />
                </picture>
              </div>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Home;
