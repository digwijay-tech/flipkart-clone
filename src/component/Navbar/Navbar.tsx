import { useState } from "react";
import SideNavbar from "./SideNavbar";
import NavProfileDropDown from "./NavProfileDropDown";
import NavVerticalMenu from "./NavVerticalMenu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginDropDown, setIsLoginDropDown] = useState(false);
  const [isverticalMenuOpen, setIsVerticalMenuOpen] = useState(false);
  console.log(isVisible);

  const showLoginDetails = () => {
    setIsLoginDropDown(!isLoginDropDown);
    if (isverticalMenuOpen) {
      setIsVerticalMenuOpen(!isverticalMenuOpen);
    }
  };
  console.log(isLoginDropDown);

  const handleVerticalMenuClick = () => {
    setIsVerticalMenuOpen(!isverticalMenuOpen);
    if (isLoginDropDown) {
      setIsLoginDropDown(!isLoginDropDown);
    }
  };
  return (
    <nav>
      <div className="bg-white flex justify-center flex-col text-[12px] tracking-normal ">
        <div className="h-[48px] md:h-[unset] sticky transition-all ease-in flex justify-center w-full ">
          <header className="py-2 px-4 md:p-3 min-[1192px]:py-3 min-[1192px]:px-7 max-w-[480px] md:max-w-[996px] lg:max-w-[1600px] flex items-center sticky top-0 w-full justify-between z-[9999] font-[family-name:inter-regular]">
            {/* Section One */}
            <div className="flex items-center grow">
              {/* Menu icon  */}
              <a
                href="#"
                className="me-3 text-[#333] h-[27px] md:hidden"
                onClick={() => setIsVisible(!isVisible)}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                  alt="Menu"
                  width="24"
                  className="h-[24px]"
                />
              </a>

              {/* brand logo */}
              <div className="pt-0.5 md:pt-[unset] md:me-9   max-w-[120px] md:max-w-[unset]">
                <a href="#">
                  <picture>
                    <source
                      srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                      media="(min-width:767px)"
                    />
                    <source
                      srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
                      media="(max-width:766px)"
                    />
                    <img
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                      height="40px"
                      width="160px"
                      title="Flipkart"
                      className="!h-[40px] ![display:unset] ![vertical-align:unset] ![max-width:unset]"
                    />
                  </picture>
                </a>
              </div>
              {/* Search bar Navbar */}
              <div className="hidden md:flex min-w-[200px] w-full  ">
                <form
                  action=""
                  className="inline-block w-full relative rounded-[8px] bg-[#f0f5ff]"
                >
                  <div className="w-full flex justify-between bg-transparent ">
                    <button className="h-10 rounded-[2px] cursor-pointer p-[8px_8px_8px_12px] ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Search Icon</title>
                        <path
                          d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                          stroke="#717478"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16 16L21 21"
                          stroke="#717478"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div className="relative inline-block w-full ">
                      <input
                        type="text"
                        className="overflow-ellipsis border-0 outline-0 text-[17px] h-10 w-full w-100% font-[inter-regular]"
                        placeholder="Search for Products, Brands and More"
                      />{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* section two  */}
            <div className="flex items-center ">
              {/* App icon */}
              <div className="md:hidden">
                <a
                  href="#"
                  className="flex items-center text-black text-[16px]/[24px] text-center   "
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE1NzBfODc5OTgpIj4KICAgIDxwYXRoIGQ9Ik0xOCAyMC4yNVYzLjc1QzE4IDIuOTIxNTcgMTcuMzI4NCAyLjI1IDE2LjUgMi4yNUw3LjUgMi4yNUM2LjY3MTU3IDIuMjUgNiAyLjkyMTU3IDYgMy43NUw2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NUgxNi41QzE3LjMyODQgMjEuNzUgMTggMjEuMDc4NCAxOCAyMC4yNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xMiAxMC4xMDU1TDEyIDE3LjYwNTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik05Ljc1IDE1LjM1NTVMMTIgMTcuNjA1NUwxNC4yNSAxNS4zNTU1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMTAuNSA0LjVIMTMuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE1NzBfODc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg=="
                    alt="Get App"
                    className="ms-3"
                  />
                </a>
              </div>

              {/* Login button */}

              <div className="md:px-1.5 min-[1192px]:px-5 md:flex items-center relative">
                <div
                  className={`md:flex items-center md:border md:border-[transparent] md:p-2 ${
                    isLoginDropDown
                      ? "bg-[#2a55e5] border-[#2a55e5] rounded-[8px]"
                      : " "
                  }`}
                >
                  <a
                    href="#"
                    className={`flex items-center text-black text-[14px] md:text-[16px] text-center leading-6 ${
                      isLoginDropDown ? "text-white" : ""
                    }`}
                  >
                    <img
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                      alt=""
                      className={`ms-3 md:ms-0 md:me-2  ${
                        isLoginDropDown ? "invert-[100%]" : " "
                      } `}
                    />
                    <div className="ms-1 md:ms-0 text-[16px] leading-6">
                      Login
                    </div>
                  </a>

                  <a className="hidden md:block" onClick={showLoginDetails}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                      alt="dropdown arrow"
                      className={`transform-[rotate(0deg)] transition-[transform_.3s_ease-in-out] ms-2 w-3 h-3 cursor-pointer ${
                        isLoginDropDown
                          ? "invert-[100%] transform-[rotate(180deg)] transition-[transform_.3s_ease-in-out]"
                          : " "
                      }`}
                    />
                  </a>
                </div>
                <NavProfileDropDown isLogin={isLoginDropDown} />
              </div>

              {/* Cart icon */}
              <div className="md:px-1.5 min-[1192px]:px-5 md:flex items-center">
                <a
                  href="#"
                  className="flex justify-center items-center text-[#333]"
                >
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    alt="cart"
                    className="ms-3 md:ms-0 md:me-2"
                  />
                </a>
                <a
                  href="#"
                  className=" hidden min-[1192px]:flex items-center text-black text-[16px] leading-6 text-center font-[inter-regular]"
                >
                  Cart
                </a>
              </div>

              {/*Seller icon */}
              <div className="hidden md:flex px-1.5 min-[1192px]:px-5 items-center  ">
                <a href="" className="flex justify-center items-center">
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                    alt=""
                    className="me-2"
                  />
                </a>
                <a
                  href=""
                  className="hidden min-[1192px]:flex items-center text-black text-[16px] leading-6 text-center font-[inter-regular]"
                >
                  Become a Seller
                </a>
              </div>

              {/* vertical  Menu icon */}
              <div className="hidden md:flex items-center px-1.5 min-[1192px]:px-5 relative">
                <div
                  className={`flex items-center border  p-2  ${
                    isverticalMenuOpen
                      ? "bg-[#fafafa] rounded-[8px] border-[#e0e0e0]"
                      : " border-[transparent]"
                  } `}
                >
                  <a
                    href="#"
                    className="text-[16px] leading-6 flex items-center"
                    onClick={handleVerticalMenuClick}
                  >
                    <img
                      src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                      alt=""
                      width="24px"
                      height="24px"
                    />
                  </a>
                </div>
                <NavVerticalMenu isMenuOpen={isverticalMenuOpen} />
              </div>
            </div>
          </header>
        </div>
      </div>
      {/* Side NavBar */}
      <SideNavbar isvisible={isVisible} setIsVisible={setIsVisible} />
    </nav>
  );
};

export default Navbar;
