import { Link, useNavigate } from "react-router-dom";
import SmallSortFilter from "./SmallSortFilter";
import QuickFilterSmall from "../../SmallHome/QuickFiltersmall/QuickFilterSmall";
import { useIsScroll } from "../../../Hooks/useIsScroll";
import SortComponent from "../../SmallHome/SortSection/SortComponent";
import { useState } from "react";
type NavProps ={
  title : string
}
const ProductNavbarsmall = ({title}:NavProps) => {
   const [isSortVisible, setIsSortVisible] = useState(false);
  const navigate = useNavigate();
  const handleonBackClick = () => {
    navigate(-1);
  };
  const isScroll = useIsScroll();
  return (
    <div className={`w-full sticky z-30 h-[156px] overflow-hidden top-0 left-0 right-0  `}>
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
          <h1 className=" block text-[16px]  font-roboto  tracking-normal w-[124px]">
            {title}
          </h1>
        </div>
        {/* Search icon  */}
        <Link
          to="/search_page"
          className="flex w-[42px] min-h-4 !leading-2.5 overflow-hidden justify-center items-center"
        >
          <svg
            height="30"
            viewBox="0 0 32 32"
            width="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path>
            <path
              d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z"
              stroke="#111112"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.9524 19.95L24.0024 24"
              stroke="#111112"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Link>
        {/* cart icon  */}
        <Link
          to="/cart"
          className="flex w-[42px] min-h-4 !leading-2.5 overflow-hidden justify-center items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Link>
        <Link
          to="/login"
          className="flex items-center justify-center w-[90px] !leading-2.5 overflow-hidden font-roboto"
        >
          <span>Login</span>
        </Link>
      </div>
      <SmallSortFilter isScroll={isScroll} isSortVisible={isSortVisible} setIsSortVisible ={setIsSortVisible}/>
      <QuickFilterSmall isScroll={isScroll} />
      <SortComponent isSortVisible={isSortVisible} setIsSortVisible={setIsSortVisible} />
    </div>
  );
};

export default ProductNavbarsmall;
