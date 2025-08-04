import { useParams } from "react-router-dom";
import ProductNavbarsmall from "../../Navbar/ProductPageNavbar/ProductNavbarsmall";
import SmallProductGrid from "./SmallProductGrid/SmallProductGrid";
import { useFetch } from "../../../Hooks/useFetch";
import { useEffect, useState } from "react";
import { SortContext } from "../../context/SortContext";

const ProductDIsplaySmall = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("popularity");
  const [title, setTitle] = useState("");
  const { path } = useParams();
  const typedPath = path || "";
  const { result } = useFetch("products");
  useEffect(() => {
    if (result && result[typedPath]) {
      setProducts(result[typedPath].items);
      setTitle(result[typedPath].navtitle);
    }
  }, [result, typedPath]);
  if (!result) return null;

  return (
    <div className=" bg-white relative ">
      <SortContext.Provider value={{ sort, setSort }}>
        <ProductNavbarsmall title={title} />
        <SmallProductGrid products={products} />
      </SortContext.Provider>
    </div>
  );
};

export default ProductDIsplaySmall;
