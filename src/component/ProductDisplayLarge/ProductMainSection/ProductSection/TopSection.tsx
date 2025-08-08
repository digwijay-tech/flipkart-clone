import Breadcrumbs from "../../../BreadCrumbs/BreadCrumbs";
import SortSection from "../SortSection/SortSection";

const TopSection = () => {
  return (
    <div className="  text-[#212121] text-[14px] bg-white">
      <div className="px-4 pt-3 min-h-[72px] border-b border-b-[#f0f0f0]">
        <Breadcrumbs />
        <div className="text-[#878787] pt-3 pe-[5px] pb-1">
          <p className="text-[12px] !leading-[1.45] font-[inter]">
            Capture your special moments and relive them by using instant
            cameras. Such an easy-to-use device makes it suitable for both
            amateur and professional photographers. You can keep this camera
            handy if you are passionate about photography. Brands that sell
            these cameras online are Adofys, CPPLUSS, Dahua, Dandy, JNKC, and
            others. You need to consider the price of instant cameras and
            features to get the desired product. This unique device can offer
            you the charm of vintage photography. Carry it in your handbag or
            trolley to capture different memories of your vacation. Apart from
            functionality, this camera comes in different designs to complement
            your aesthetics. Check the instant camera price and unique features
            to get a device that can add value to your collection. With this
            product, you can click spontaneous and candid pictures in no time.
            The distinct look of instant photos can add a retro vibe to your
            collection. You need to check the sensor and battery type before
            adding a suitable camera to your shopping cart. Select pieces with a
            built-in flash to enjoy night or low-light photography. Browse and
            choose the instant cameras you prefer and capture memories in a
            unique way.
          </p>
          <div className="h-[17.40px]"></div>
          <div className="h-[17.40px]"></div>
        </div>

        <span className="text-[16px] mt-2 font-[inter] font-medium inline-block !leading-[1.4]">Instant Cameras</span>
        <span className="ms-2.5 text-[#878787] font-[inter] text-[12px] inline-block">(Showing 1 – 24 products of 196 products)</span>
        <SortSection/>
      </div>
    </div>
  );
};

export default TopSection;
