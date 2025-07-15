type SidebarProps = {
  isvisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideNavbar = ({ isvisible, setIsVisible }: SidebarProps) => {
  return (
    <div
      className={` fixed h-[120%] top-0 left-0 z-10 w-full ${
        isvisible ? "visible" : "hidden"
      }`}
    >
      <div
        className={`absolute h-full w-full bg-[rgba(0,0,0,.6)] ${
          isvisible ? "opacity-[1] visible" : "opacity-0 hidden"
        }  `}
        onClick={() => setIsVisible(false)}
      ></div>
      <div
        className={` bg-white fixed h-[120%] w-[75%] top-0 left-0 shadow-[3px_0px_8px_1px_rgba(0,0,0,0.4)] ${
          isvisible
            ? "visible transform-[translate3d(0px,0px,0px)]"
            : "hidden transform-[translate3d(-120%,0px,0px)]"
        } `}
      >
        <div className="h-[923px] flex flex-col  ">
          <div className=" flex items-center bg-[linear-gradient(30deg,#2874f0,#0065c5)] h-[60px] px-0.5 ">
            <div className="flex justify-between w-full items-center">
              <div className="flex justify-center items-center">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+CiAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNyAwYTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03em0wIDguNzVjMy44NjcgMCA3IDEuNTY2IDcgMy41VjE0SDB2LTEuNzVjMC0xLjkzNCAzLjEzMi0zLjUgNy0zLjV6Ii8+Cjwvc3ZnPgo="
                  alt=" profile-icon"
                  className="ms-[12px] w-[15px] h-[15px]"
                />
                <span className="text-white font-[inter-regular] w-[75%] ms-[20px] text-[16px] whitespace-nowrap overflow-hidden mt-[1px] self-end">
                  Login & Signup
                </span>
              </div>
              <div className="w-[40px]">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png"
                  width="20px"
                  alt="FlipKart logo"
                  className="align-middle me-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="overflow-y-auto ">
            {/* btn-1 */}
            <div>
              <a
                href="#"
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535] ">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      className="opacity-[1] max-w-full max-h-full absolute transition-[opacity_0.3s_linear]"
                      alt=""
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/05/07/2019/37c19766-0af6-45c8-866a-720adfa534e2.png?q=80"
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    SuperCoin Zone
                  </span>
                </div>
              </a>
            </div>
            {/* btn-2 */}
            <div>
              <a
                href="#"
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535] ">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      className="opacity-[1] max-w-full max-h-full absolute transition-[opacity_0.3s_linear]"
                      alt=""
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/11/07/2018/70e5346e-fce4-4718-8e56-27be8492faa5.png?q=80"
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    Flipkart Plus Zone
                  </span>
                </div>
              </a>
            </div>
            {/* line-divider */}
            <div>
              <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
            </div>
            {/* btn-3 */}
            <div>
              <a
                href="#"
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535] ">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      className="opacity-[1] max-w-full max-h-full absolute transition-[opacity_0.3s_linear]"
                      alt=""
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/13/11/2019/d19caf2b-e593-4e6b-93e5-a6c388210736.png?q=80"
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    All Categories
                  </span>
                </div>
              </a>
            </div>
            {/* btn-4 */}
            <div>
              <a
                href="#"
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535] ">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      className="opacity-[1] max-w-full max-h-full absolute transition-[opacity_0.3s_linear]"
                      alt=""
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/15/06/2020/3c2eff2c-685f-4002-b3c9-d6942563af76.jpg?q=80"
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    More on Flipkart
                  </span>
                </div>
              </a>
            </div>
            {/* Line-divider */}
            <div>
              <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
            </div>
            {/* btn-5 */}
            <div>
              <a
                href=""
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535]">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/01/08/2019/23d1528b-d57d-440e-a21f-f374f518b6ed.png?q=80"
                      alt="Language-icon"
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    {" "}
                    Choose Language
                  </span>
                </div>
              </a>
            </div>
            {/* line-divider */}
            <div>
              <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
            </div>
            {/* btn-5  */}
            <div>
              <a
                href=""
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535]">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/08/04/2016/a12880b1-9c2b-4b4b-9029-31ba9ff666bf.png?q=80"
                      alt=""
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]"> Offer Zone</span>
                </div>
              </a>
            </div>
            {/* btn-6  */}
            <div>
              <a
                href=""
                className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
              >
                <div className="flex items-center text-[#353535]">
                  <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                    <img
                      srcSet="https://rukminim1.flixcart.com/www/100/14/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=40 3x, "
                      src="https://rukminim1.flixcart.com/www/undefined/14/promos/18/01/2019/c79d21c6-b201-42a7-b37c-6405c6c4fbf5.png?q=80"
                      alt=""
                    />
                  </div>
                  <span className="ms-3 font-[inter-regular]">
                    Sell on Flipkart
                  </span>
                </div>
              </a>
            </div>
            {/* line-divider  */}
            <div>
              <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
            </div>
            {/* btn-group  */}
            <div>
              <ul>
                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/b7a79d1a-e088-4c4b-951f-9b8214719cc9.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">
                        My Orders
                      </span>
                    </div>
                  </a>
                </li>

                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/31/08/2016/3afaefd4-3961-4cac-921c-b9517c96ad47.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">Coupons</span>
                    </div>
                  </a>
                </li>

                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/920f4fcd-8977-43a9-9014-abcad558de8d.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">My Cart</span>
                    </div>
                  </a>
                </li>

                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/1f81361d-9a8e-494a-bd15-6d647c9bd8a7.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">
                        My Wishlist
                      </span>
                    </div>
                  </a>
                </li>

                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/07/04/2016/c35cca9e-2d7a-4583-9770-32a97ddf1c9b.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">
                        My Account
                      </span>
                    </div>
                  </a>
                </li>

                <li className="h-[35px] text-[14px]  relative overflow-hidden flex items-center text-[#212121]">
                  <a
                    href=""
                    className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#333] w-full"
                  >
                    <div className="flex items-center text-[#353535]">
                      <div className="w-3.5 h-3.5 relative min-w-[inherit] min-h-[inherit] flex items-center justify-center">
                        <img
                          srcSet="https://rukminim1.flixcart.com/www/100/14/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=80 1x, https://rukminim1.flixcart.com/www/200/28/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=60 2x, https://rukminim1.flixcart.com/www/300/42/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=40 3x, "
                          src="https://rukminim1.flixcart.com/www/undefined/14/promos/10/03/2017/f93182c9-5b3e-4f06-950d-c41745611f00.png?q=80"
                          alt=""
                        />
                      </div>
                      <span className="ms-3 font-[inter-regular]">
                        My Notifications
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* line-divider  */}
            <div>
              <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
            </div>

            {/* last-section */}

            <div className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#212121]">
              <a href="#" className="w-full block font-[inter-regular]">
                Notification Preferences
              </a>
            </div>
            <div className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#212121]">
              <a href="#" className="w-full block font-[inter-regular]">
                Help Centre
              </a>
            </div>
            <div className="h-[35px] text-[14px] ps-[15px] relative overflow-hidden flex items-center text-[#212121]">
              <a href="#" className="w-full block font-[inter-regular]">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
