const Footer = () => {
  return (
    <footer className="hidden md:block bg-[#212121] mt-[25px] border-t-[1] border-[#f5f5f5]">
      <div className="">
        <div className="px-[60px] pt-10 gap-x-5 grid grid-cols-[auto_auto_auto] min-[1190px]:grid-cols-[auto_auto_auto_auto_auto_auto] ">
          <div>
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular] uppercase">
              About
            </div>
            <div className="font-[inter-semibold] text-[12px] text-[#fff] ">
              <ul>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Contact Us</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">About Us</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Careers</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Flipkart Stories</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Press</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">
                    Corporate <br /> information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular] uppercase">
              Group Companies
            </div>
            <div className="font-[inter-semibold] text-[12px] text-[#fff] ">
              <ul>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Myntra</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Cleartrip</a>
                </li>
                <li className="!leading-[18px] hover: underline">
                  <a href="#">shopsy</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular] uppercase">
              Help
            </div>
            <div className="font-[inter-semibold] text-[12px] text-[#fff] ">
              <ul>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Payments</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">Shipping</a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">
                    cancellation & <br /> Returns
                  </a>
                </li>
                <li className="!leading-[18px] hover:underline">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular] uppercase">
              Consumer policy
            </div>
            <div className="font-[inter-semibold] text-[12px] text-[#fff] ">
              <div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">
                    cancellation & <br /> Returns
                  </a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">Terms Of Use</a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">Security</a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">Privacy</a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">Sitemap</a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">Grievance Redressal </a>
                </div>
                <div className="!leading-[18px] hover:underline">
                  <a href="#">ERP Compliance</a>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-8 border-l-[#454d5e] border-l-[1px] w-full">
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular] ">
              Mail Us:
            </div>
            <div className="font-[inter-regular] text-[12px] text-[#fff] w-full">
              <div>
                <div className=" whitespace-nowrap">
                  <div className="mb-4 ">
                    <p className="!leading-[18px]">
                      Flipkart Internet Private Limited,{" "}
                    </p>
                    <p className="!leading-[18px]">
                      {" "}
                      Buildings Alyssa, Begonia &{" "}
                    </p>
                    <p className="!leading-[18px]">
                      {" "}
                      Clove Embassy Tech Village,{" "}
                    </p>
                    <p className="!leading-[18px]">
                      {" "}
                      Outer Ring Road, Devarabeesanahalli Village,{" "}
                    </p>
                    <p className="!leading-[18px]"> Bengaluru, 560103, </p>
                    <p className="!leading-[18px]">Karnataka, india</p>
                  </div>
                </div>
                <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular]">
                  Social:
                </div>
                <div className="flex items-center h-[27px] whitespace-nowrap">
                  <div className="me-4 ">
                    <a href="#">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                        alt="Facebook"
                        width="24"
                        height="24"
                      />
                    </a>
                  </div>
                  <div className="me-4 ">
                    <a href="#">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                        alt="Twitter"
                        width="24"
                        height="24"
                      />
                    </a>
                  </div>
                  <div className="me-4  w-6">
                    <a href="#">
                      <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg"
                        alt="YouTube"
                        width="24"
                        height="24"
                      />
                    </a>
                  </div>
                  <div className="me-4">
                    <a href="#">
                      <img
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg"
                        alt="Instagram"
                        width="20"
                        height="20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[#878787] text-[12px] mb-3 font-[inter-regular]">
              Registered Office Address:
            </div>
            <div className="font-[inter-regular] text-[12px] text-[#fff] w-full">
              <div>
                <div className=" whitespace-nowrap">
                  <div className="mb-4 ">
                    <p className="!leading-[18px]">
                      Flipkart Internet Private Limited,
                    </p>
                    <p className="!leading-[18px]">
                      Buildings Alyssa, Begonia &
                    </p>
                    <p className="!leading-[18px] ">
                      Clove Embassy Tech Village,
                    </p>
                    <p className="!leading-[18px]">
                      Outer Ring Road, Devarabeesanahalli Village,
                    </p>
                    <p className="!leading-[18px]">Bengaluru, 560103,</p>
                    <p className="!leading-[18px]">Karnataka, India </p>
                    <p className="!leading-[18px]">
                      CIN : U51109KA2012PTC066107{" "}
                    </p>
                    <p>
                      Telephone :
                      <span>
                        <a href="#" className="text-[#2874f0]">
                          {" "}
                          044-45614700{" "}
                        </a>
                      </span>
                      /
                      <span>
                        <a href="#" className="text-[#2874f0]">
                          044-67415800
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t-[1px] border-[#454d5e] py-[25px] w-full flex items-center justify-evenly">
          <div className="flex items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              width="13"
              height="12"
            />
            <a
              href="#"
              className="text-[#fff] text-[12px] ms-2 leading-[18px] font-[inter-regular]"
            >
              Become a Seller
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              width="13"
              height="13"
            />
            <a
              href="#"
              className="text-[#fff] text-[12px] ms-2 leading-[18px] font-[inter-regular]"
            >
              Advertise
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              width="13"
              height="13"
            />
            <a
              href="#"
              className="text-[#fff] text-[12px] ms-2 leading-[18px] font-[inter-regular]"
            >
              Gift Cards
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              width="13"
              height="12"
            />
            <a
              href="#"
              className="text-[#fff] text-[12px] ms-2 leading-[18px] font-[inter-regular]"
            >
              Help Center
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="text-[#fff] text-[12px] ms-2 leading-[18px] font-[inter-regular]"
            >
              © 2007-2025{" "}
              <span className="font-[inter-regular]">Flipkart.com</span>
            </a>
          </div>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;