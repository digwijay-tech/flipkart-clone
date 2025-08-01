import { useParams } from "react-router-dom";
import ProductNavbarsmall from "../../Navbar/ProductPageNavbar/ProductNavbarsmall";
import SmallProductGrid from "./SmallProductGrid/SmallProductGrid";

const ProductDIsplaySmall = () => {
  const { path } = useParams();
  let typedPath = path || "";
  return (
    <div className=" bg-white relative ">
      <ProductNavbarsmall />
      <SmallProductGrid path={typedPath} />
    </div>
  );
};

export default ProductDIsplaySmall;
