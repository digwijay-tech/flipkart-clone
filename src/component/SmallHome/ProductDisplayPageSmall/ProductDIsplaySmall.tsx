import { Outlet, useParams, useSearchParams } from "react-router-dom";
import ProductNavbarsmall from "../../Navbar/ProductPageNavbar/ProductNavbarsmall";
import SmallProductGrid from "./SmallProductGrid/SmallProductGrid";
import { useFetch } from "../../../Hooks/useFetch";
import { useEffect, useState } from "react";
import { SortContext } from "../../context/SortContext";

const ProductDIsplaySmall = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentvalue = searchParam.get("sort") || "popularity";
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(currentvalue);
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
    <div className="relative">
      <div className=" bg-white relative ">
        <SortContext.Provider value={{ sort, setSort ,searchParam ,setSearchParam}}>
          <ProductNavbarsmall title={title} />
          <SmallProductGrid products={products} />
        </SortContext.Provider>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductDIsplaySmall;
