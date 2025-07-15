type verticalMenuProps ={
    isMenuOpen : boolean
}

const NavVerticalMenu = ({isMenuOpen}:verticalMenuProps) => {
  return (
   
        <ul className={` w-[210px] absolute right-0 top-[100%] bg-white border border-[#f0f0f0] min-w-[100px] shadow-[0px_4px_16px_0px_rgba(0,0,0,.2)] rounded-[8px] z-[100] ${isMenuOpen ? "":"hidden"}`}>
            <li>
                <a className="text-black text-center text-[14px] leading-5 cursor-pointer">
                    <div className="flex items-center whitespace-nowrap py-2 px-3 ">
                        <div className="w-[18px] h-[24px] flex justify-center items-center me-2 shrink-0">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notification" width="24" height="24" className="w-[18px] h-[18px]" />
                        </div>
                        Notification Preferences
                    </div>
                </a>
            </li>

            <li>
                <a className="text-black text-center text-[14px] leading-5 cursor-pointer">
                    <div className="flex items-center whitespace-nowrap py-2 px-3 ">
                        <div className="w-6 h-6 flex justify-center items-center me-2 ">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" alt="customercare" className="w-[18px] h-[18px]" />
                        </div>
                        24x7 Customer Care
                    </div>
                </a>
            </li>

            <li>
                <a className="text-black text-center text-[14px] leading-5 cursor-pointer">
                    <div className="flex items-center whitespace-nowrap py-2 px-3 ">
                        <div className="w-6 h-6 flex justify-center items-center me-2 ">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" alt="advertise" className="w-[18px] h-[18px]" />
                        </div>
                        Advertise
                    </div>
                </a>
            </li>

            <li>
                <a className="text-black text-center text-[14px] leading-5 cursor-pointer">
                    <div className="flex items-center whitespace-nowrap py-2 px-3 ">
                        <div className="w-6 h-6 flex justify-center items-center me-2 ">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" alt="Notification" className="w-[18px] h-[18px]" />
                        </div>
                        Download App
                    </div>
                </a>
            </li>
        </ul>
    
  )
}

export default NavVerticalMenu