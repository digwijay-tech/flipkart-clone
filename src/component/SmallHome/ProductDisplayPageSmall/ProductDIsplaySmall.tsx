import { Outlet } from "react-router-dom";
import ProductNavbarsmall from "../../Navbar/ProductPageNavbar/ProductNavbarsmall";
import SmallProductGrid from "./SmallProductGrid/SmallProductGrid";

const ProductDIsplaySmall = () => {
  return (
    <div className="hidden relative max-[1024px]:block ">
      
        <div className=" bg-white relative ">
          <ProductNavbarsmall  />
          <SmallProductGrid  />
        </div>
        <Outlet />
    </div>
  );
};

export default ProductDIsplaySmall;
