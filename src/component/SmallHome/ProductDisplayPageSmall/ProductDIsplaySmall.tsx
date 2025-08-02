import { useParams } from "react-router-dom";
import ProductNavbarsmall from "../../Navbar/ProductPageNavbar/ProductNavbarsmall";
import SmallProductGrid from "./SmallProductGrid/SmallProductGrid";
import { useFetch } from "../../../Hooks/useFetch";
import { useEffect, useState } from "react";

const ProductDIsplaySmall = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const { path } = useParams();
  let typedPath = path || "";
  const { result } = useFetch("products");
  useEffect(() => {
    if (result && result[typedPath]) {
      setProducts(result[typedPath].items);
      setTitle(result[typedPath].navtitle);
    }
  }, [result, typedPath]);
  console.log(title);
  if (!result) return null;
  return (
    <div className=" bg-white relative ">
      <ProductNavbarsmall title={title} />
      <SmallProductGrid products={products} />
      
    </div>
  );
};

export default ProductDIsplaySmall;
