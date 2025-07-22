import AdsBanner from "../component/AdsBanner/AdsBanner";
import HeroCarousel from "../component/Hero/HeroCarousel";
import ProductCategoryList from "../component/ProductCategoryList/ProductCategoryList";
import ProductsDisplay from "../component/ProductDisplay.tsx/ProductsDisplay";
import ProductDisplayLimited from "../component/ProductDisplayLimited/ProductDisplayLimited";
import SuggestedForMe from "../component/Suggestion/SuggestedForMe";


const Home = () => {
  return (
    <div className="bg-[#f1f2f4]">
    <div className="md:px-4 min-h-lvh  md:pt-2 md:[scrollbar-width:none] max-[1190px]:max-w-[996px] mx-auto">
      <div className="grid grid-cols-[repeat(12,1fr)] gap-x-[12px]  w-full">
        <ProductCategoryList />
        <HeroCarousel />

        <div className="col-[1/13] min-[1190px]:col-[1/11]">
          <ProductsDisplay categoryname={"BestDealMobile"} />
        </div>
        <div className=" col-[11/13] min-[1190px]:flex  hidden  bg-white items-center mb-4 ">
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
                  className="[aspect-ratio:28/43] object-cover w-full my-auto"
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="col-[1/13]">
          <ProductsDisplay categoryname={"Home & Furniture Top Deals"} />
        </div>
        <div className="col-[1/13]">
        <ProductsDisplay categoryname={"SportsHealth&Toy"}/>
        </div>
        
        <SuggestedForMe/>
        <AdsBanner/>
        
        <ProductDisplayLimited category={"MobiletoCheckout"} />
        <ProductDisplayLimited category={"HomeDecoreDeals"}/>
        <ProductDisplayLimited category={"FashionDeals"}/>
        <ProductDisplayLimited category={"HomeProductsDeal"}/>
        <ProductDisplayLimited category={"LaptopDeal"}/>
        <ProductDisplayLimited category={"SeasonalTopDeal"}/>
        {/* No limit product display  */}
        <ProductDisplayLimited category={"MonsoonStyle"}/>
        <ProductDisplayLimited category={"SkinCareDeal"}/>
        <ProductDisplayLimited category={"EssensialDeals"}/> 
        {/* No limit product display  */}
        <ProductDisplayLimited category={"TrendGadgetDeals"}/>
      </div>
    </div>
    </div>
  );
};

export default Home;
