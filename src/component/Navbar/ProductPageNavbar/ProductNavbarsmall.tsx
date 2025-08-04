import { Link, useNavigate } from "react-router-dom";
import SmallSortFilter from "./SmallSortFilter";
import QuickFilterSmall from "../../SmallHome/QuickFiltersmall/QuickFilterSmall";
import { useIsScroll } from "../../../Hooks/useIsScroll";
import SortComponent from "../../SmallHome/SortSection/SortComponent";
import { useState } from "react";
import { CartIcon } from "../../../assets/SVG/cartIcon";
import { SearchIcon } from "../../../assets/SVG/searchIcon";
type NavProps = {
  title: string;
};
const ProductNavbarsmall = ({ title }: NavProps) => {
  const [isSortVisible, setIsSortVisible] = useState(false);
  const navigate = useNavigate();
  const handleonBackClick = () => {
    navigate(-1);
  };
  const isScroll = useIsScroll();
  
  return (
    <div
      className={`w-full sticky z-30 h-[156px] overflow-hidden top-0 left-0 right-0  `}
    >
      {/* Navbar  */}
      <div
        className={`h-[52px] w-full overflow-hidden flex items-center transition-all transform  bg-white ${
          isScroll ? "" : "translate-y-[-100%]"
        }`}
      >
        {/* Go back button  */}
        <button
          onClick={handleonBackClick}
          className="w-[42px] h-full !leading-2.5 align-middle flex justify-center items-center"
        >
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            ></path>
          </svg>
        </button>
        {/* Flipkart Logo  */}
        <Link to="/" className="w-[23px] pt-0.5 ">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png"
            className=""
            alt=""
          />
        </Link>
        {/* Heading  */}
        <div className=" h-full flex   ps-3 items-center">
          <h1 className=" block text-[16px]  font-roboto  tracking-normal w-[124px] overflow-hidden whitespace-nowrap">
            {title}
          </h1>
        </div>
        {/* Search icon  */}
        <Link
          to="/search_page"
          className="flex w-[42px] min-h-4 !leading-2.5 overflow-hidden justify-center items-center"
        >
          <SearchIcon/>
        </Link>
        {/* cart icon  */}
        <Link
          to="/cart"
          className="flex w-[42px] min-h-4 !leading-2.5 overflow-hidden justify-center items-center"
        >
          <CartIcon/>
        </Link>
        <Link
          to="/login"
          className="flex items-center justify-center w-[90px] !leading-2.5 overflow-hidden font-roboto"
        >
          <span>Login</span>
        </Link>
      </div>
      <SmallSortFilter
        isScroll={isScroll}
        isSortVisible={isSortVisible}
        setIsSortVisible={setIsSortVisible}
      />
      <QuickFilterSmall isScroll={isScroll} />
      <SortComponent
        isSortVisible={isSortVisible}
        setIsSortVisible={setIsSortVisible}
      />
    </div>
  );
};

export default ProductNavbarsmall;
