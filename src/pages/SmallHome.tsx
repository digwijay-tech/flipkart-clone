import HeroCarousel from "../component/Hero/HeroCarousel";
import SmallCategoryList from "../component/ProductCategoryList/SmallCategoryList";
import NewOffers from "../component/SmallHome/NewOffers/NewOffers";
import SmallProductDisplay from "../component/SmallHome/SmallScreenProductDisplay/SmallProductDisplay";
import SpecialDeals from "../component/SmallHome/SpecialDealsSmall/SpecialDeals";
import Sponsors from "../component/SmallHome/Sponsors/Sponsors";
import SuperDeals from "../component/SmallHome/SuperDeals/SuperDeals";

const SmallHome = () => {
  return (
    <div className="hidden bg-[#f1f2f4] max-[1024px]:block">
      <div className="md:px-4 min-h-lvh  md:pt-2 md:[scrollbar-width:none] max-[1190px]:max-w-[996px] lg:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-[repeat(12,1fr)] gap-x-[12px]  w-full">
          <HeroCarousel />
          <SmallCategoryList />
          <NewOffers />
          <SpecialDeals path="Highlightsofsale"/>
          <Sponsors />
          <SuperDeals />
          <SmallProductDisplay />
          <SpecialDeals path="bargainbuys"/>
          <SpecialDeals path="traveldeal"/>
        </div>
      </div>
    </div>
  );
};

export default SmallHome;
