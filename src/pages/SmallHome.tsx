import HeroCarousel from "../component/Hero/HeroCarousel";
import MoreDetails from "../component/MoreDetails/MoreDetails";
import SmallCategoryList from "../component/ProductCategoryList/SmallCategoryList";
import AdBannerSmall from "../component/SmallHome/Adbanner/AdBannerSmall";
import BottomNavBar from "../component/SmallHome/Bottombar/BottomNavBar";
import ColoredSection from "../component/SmallHome/ColoredSection/ColoredSection";
import MainProductDIsplay from "../component/SmallHome/MainProductDisplay/MainProductDIsplay";
import NewOffers from "../component/SmallHome/NewOffers/NewOffers";
import SmallProductDisplay from "../component/SmallHome/SmallScreenProductDisplay/SmallProductDisplay";
import SpecialDeals from "../component/SmallHome/SpecialDealsSmall/SpecialDeals";
import Sponsors from "../component/SmallHome/Sponsors/Sponsors";
import SuggestedSmall from "../component/SmallHome/SuggestedSmall/SuggestedSmall";
import SuperDeals from "../component/SmallHome/SuperDeals/SuperDeals";

const SmallHome = () => {
  return (
    <div className="hidden bg-[#f1f2f4] max-[1024px]:block"> 
      <div className="md:px-4 min-h-lvh  md:pt-2 md:[scrollbar-width:none] max-[1190px]:max-w-[996px] lg:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-[repeat(12,1fr)] gap-x-[12px]  w-full">
          <HeroCarousel />
          <SmallCategoryList />
          <NewOffers startfrom={0}/> 
          <SpecialDeals path="Highlightsofsale"/>
          <AdBannerSmall/>
          <NewOffers startfrom={3}/>
          <Sponsors /> 
          <SuggestedSmall visibility="hidden"/>   
          <SpecialDeals path="bargainbuys"/>
          <ColoredSection visiblility="hidden"/>
          <SuperDeals />
          <SuggestedSmall/> 
          <SmallProductDisplay />  
          <SpecialDeals path="traveldeal"/>
          <MainProductDIsplay/>
          <MoreDetails/>
          <BottomNavBar/>
        </div>
      </div>
    </div>
  );
};

export default SmallHome;