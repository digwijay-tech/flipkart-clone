type ProfileDropDownProps={
    isLogin:boolean
}
const NavProfileDropDown = ({isLogin}:ProfileDropDownProps) => {
  return (
    <div className={`${isLogin?"":"hidden"}`}>
      <ul className="w-[280px] absolute top-[100%] left-[50%] transform-[translateX(-50%)] bg-white border border-[#f0f0f0] min-w-[100px] shadow-[0px_4px_16px_0px_rgba(0,0,0,.2)] z-[100] rounded-[8px]">
        <li>
          <a className="p-3 border-b border-[#e0e0e0] flex justify-between items-center text-[#333] text-[16px] font-[inter-regular]" >
            <span > New customer?</span>
            <span className="text-[#2a55e5] font-[inter-semibold]  !leading-[24px] ">Sign Up</span>
          </a>
        </li>
        <li>
            <a href="" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2 ">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" className="w-[18px] h-[18px]" alt="Profile icon" />
                        
                    </div>
                    My Profile
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    Flipkart Plus Zone
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2"> 
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    Orders
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt=""  className="w-[18px] h-[18px] "/>
                    </div>
                    Wishlist
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt=""  className="w-[18px] h-[18px] "/>
                    </div>
                    Rewards
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="text-black text-center text-[14px] leading-5 cursor-pointer">
                <div className="py-2 px-3 flex items-center whitespace-nowrap">
                    <div className="w-6 h-6 flex items-center justify-center me-2">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt=""  className="w-[18px] h-[18px] "/>
                    </div>
                    Gift Cards
                </div>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default NavProfileDropDown;
