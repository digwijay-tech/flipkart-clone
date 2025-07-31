import { NavLink } from "react-router-dom";
import { useIsScroll } from "../../../Hooks/useIsScroll";

const BottomNavBar = () => {
  const show = useIsScroll();
  return (
    <div
      className={`fixed bottom-0 z-50 bg-white min-h-[50px] flex w-svw col-[1/13] transition-all  ${
        show ? "" : "transform translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-row h-16 items-center justify-around flex-[1_1_0%] ">
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <div className="w-[93px] h-[64px] px-[3px] flex flex-col justify-center items-center">
            <div className="h-8 w-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M4 17C4 15.0372 4 14.0557 4.42229 13.2111C4.84458 12.3666 5.62972 11.7777 7.2 10.6L11.2 7.6C13.5111 5.86667 14.6667 5 16 5C17.3333 5 18.4889 5.86667 20.8 7.6L24.8 10.6C26.3703 11.7777 27.1554 12.3666 27.5777 13.2111C28 14.0557 28 15.0372 28 17V22C28 24.8284 28 26.2426 27.1213 27.1213C26.2426 28 24.8284 28 22 28C21.0681 28 20.6022 28 20.2346 27.8478C19.7446 27.6448 19.3552 27.2554 19.1522 26.7654C19 26.3978 19 25.9319 19 25V22.5C19 21.5681 19 21.1022 18.8478 20.7346C18.6448 20.2446 18.2554 19.8552 17.7654 19.6522C17.3978 19.5 16.9319 19.5 16 19.5C15.0681 19.5 14.6022 19.5 14.2346 19.6522C13.7446 19.8552 13.3552 20.2446 13.1522 20.7346C13 21.1022 13 21.5681 13 22.5V25C13 25.9319 13 26.3978 12.8478 26.7654C12.6448 27.2554 12.2554 27.6448 11.7654 27.8478C11.3978 28 10.9319 28 10 28C7.17157 28 5.75736 28 4.87868 27.1213C4 26.2426 4 24.8284 4 22V17Z"
                  fill="#1254E7"
                  stroke="#1254E7"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span className="text-[#1254e7] truncate text-[11px] leading-4">
              Home
            </span>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <div className="w-[93px] h-[64px] px-[3px] flex flex-col justify-center items-center">
            <div className="h-8 w-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="26"
                  y="16.5239"
                  width="10.4762"
                  height="8.42105"
                  rx="2"
                  transform="rotate(90 26 16.5239)"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <rect
                  x="14.4211"
                  y="5"
                  width="10.4762"
                  height="8.42105"
                  rx="2"
                  transform="rotate(90 14.4211 5)"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <rect
                  x="25.9998"
                  y="5"
                  width="8.38095"
                  height="8.42105"
                  rx="2"
                  transform="rotate(90 25.9998 5)"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
                <rect
                  x="14.4211"
                  y="18.6191"
                  width="8.38095"
                  height="8.42105"
                  rx="2"
                  transform="rotate(90 14.4211 18.6191)"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></rect>
              </svg>
            </div>
            <span className="text-[#1f1f1f] truncate text-[11px] leading-4">
              Categories
            </span>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <div className="w-[93px] h-[64px] px-[3px] flex flex-col justify-center items-center">
            <div className="h-8 w-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M19.3333 17H12.6667C10.1744 17 8.9282 17 8 17.5359C7.39192 17.887 6.88697 18.3919 6.5359 19C6 19.9282 6 21.1744 6 23.6667C6 24.9128 6 25.5359 6.26795 26C6.44349 26.304 6.69596 26.5565 7 26.7321C7.4641 27 8.08718 27 9.33333 27H22.6667C23.9128 27 24.5359 27 25 26.7321C25.304 26.5565 25.5565 26.304 25.732 26C26 25.5359 26 24.9128 26 23.6667C26 21.1744 26 19.9282 25.4641 19C25.113 18.3919 24.6081 17.887 24 17.5359C23.0718 17 21.8256 17 19.3333 17Z"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 14C18.7614 14 21 11.7614 21 9C21 6.23858 18.7614 4 16 4C13.2386 4 11 6.23858 11 9C11 11.7614 13.2386 14 16 14Z"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span className="text-[#1f1f1f] truncate text-[11px] leading-4">
              Account
            </span>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
          <div className="w-[93px] h-[64px] px-[3px] flex flex-col justify-center items-center">
            <div className="h-8 w-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.7031 28C22.9532 28 23.9666 26.9866 23.9666 25.7366C23.9666 24.4865 22.9532 23.4731 21.7031 23.4731C20.453 23.4731 19.4396 24.4865 19.4396 25.7366C19.4396 26.9866 20.453 28 21.7031 28Z"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.6745 28C12.9246 28 13.938 26.9866 13.938 25.7366C13.938 24.4865 12.9246 23.4731 11.6745 23.4731C10.4244 23.4731 9.41101 24.4865 9.41101 25.7366C9.41101 26.9866 10.4244 28 11.6745 28Z"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 5V5C3.55909 5 4.33864 5 4.89633 5.43543C5.45402 5.87086 5.641 6.61877 6.01495 8.11457L8.1 16.4548"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.38135 9.58203H22.0167C24.3062 9.58203 25.4509 9.58203 26.0671 10.3165C26.0772 10.3285 26.0871 10.3405 26.0968 10.3527C26.6962 11.101 26.4717 12.2235 26.0227 14.4686V14.4686C25.3981 17.5914 25.0858 19.1528 23.973 20.0816C23.9544 20.0972 23.9356 20.1126 23.9167 20.1278C22.7877 21.0368 21.1953 21.0368 18.0107 21.0368H15.6659C12.5822 21.0368 11.0404 21.0368 9.925 20.166C8.80961 19.2951 8.43566 17.7993 7.68776 14.8077L6.38135 9.58203Z"
                  fill="#00000000"
                  stroke="#707070"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span className="text-[#1f1f1f] truncate text-[11px] leading-4">
              Cart
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavBar;
