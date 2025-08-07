import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";
const FilterContent = () => {
  const { filterCategory, value } = useContext(FilterContext);
  const currentCategory = filterCategory.find(
    (category) => category.category === value
  );
  const [items, setItems] = useState<String[]>([]);
  console.log(value);
  
  useEffect(() => {
    setItems(currentCategory?.items ?? []);
  }, [currentCategory]);
  
  return (
    <div className="flex flex-col w-full h-full flex-2">
      <div className="flex flex-col h-[817px] w-full overflow-y-scroll ">
        <form className="flex flex-col h-full w-full">
          {items.map(filter =>(
            <div className="h-[48px] w-[250px] ">
            <div>
              <div className="px-[19px] py-3 flex flex-row ">
                <label>
                  <input
                    type="checkbox"
                    className=" me-[19px]  "
                    value="Rs.600 and below"
                    onChange={() => {}}
                  />
                  {/* <span>
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png?q=90"
                      srcSet="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png 1x, https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png 2x, "
                      alt="Checked icon"
                      className="me-[19px] w-[18px] h-[18px]"
                    />

                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png?q=90"
                      srcSet="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png 1x, https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png 2x, "
                      alt="Checked Icon"
                      className="me-[19px] w-[18px] h-[18px]"
                    />
                  </span> */}
                </label>
                <span className="text-[14px] font-roboto truncate">{filter}</span>
              </div>
            </div>
          </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default FilterContent;
