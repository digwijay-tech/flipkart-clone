import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";

const FilterContent = () => {
  const path = useParams();
  console.log(path.filter);
  const [checked, setChecked] = useState(false);
  const { result } = useFetch("Filter_category");
  console.log(result);
  return (
    Array.isArray(result)&& result.map((item) =>(
                item.category === path.filter ?
    <div className="flex flex-col w-full h-full flex-2">
      <div className="flex flex-col h-[817px] w-full overflow-y-scroll ">
        <form className="flex flex-col h-full w-full">
             {item.items.map((cat:string)=>(
                <div className="h-[48px] w-[250px] ">
            <div>
              <div className="px-[19px] py-3 flex flex-row ">
                <label>
                  <input
                    type="checkbox"
                    className="peer hidden "
                    value="Rs.600 and below"
                    onChange={() => setChecked(!checked)}
                  />
                  <span>
                    {checked ? (
                      <img
                        src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png?q=90"
                        srcSet="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png 1x, https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png 2x, "
                        alt="Checked icon"
                        className="me-[19px] w-[18px] h-[18px]"
                      />
                    ) : (
                      <img
                        src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png?q=90"
                        srcSet="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png 1x, https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png 2x, "
                        alt="Checked Icon"
                        className="me-[19px] w-[18px] h-[18px]"
                      />
                    )}
                  </span>
                </label>
                <span className="text-[14px] font-roboto truncate">
                  {cat}
                </span>
              </div>
            </div>
          </div>
             ))}
                
                
        </form>
      </div>
    </div>
   :"" ))
  );
};

export default FilterContent;
