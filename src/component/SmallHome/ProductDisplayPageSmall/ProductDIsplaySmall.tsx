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
  const [filterCategory,setFilterCategory]=useState([])
  const { path } = useParams();
  const typedPath = path || "";
  const { result } = useFetch("products");
  useEffect(() => {
    if (result && result[typedPath]) {
      setProducts(result[typedPath].items);
      setTitle(result[typedPath].navtitle);
      setFilterCategory(result[typedPath].filterCategory)
    }
  }, [result, typedPath]);
  if (!result) return null;

  return (
    <div className="hidden relative max-[1024px]:block ">
      <SortContext.Provider
        value={{ sort, setSort, searchParam, setSearchParam ,filterCategory,typedPath}}
      >
        <div className=" bg-white relative ">
          <ProductNavbarsmall title={title} />
          <SmallProductGrid products={products} />
        </div>
        <Outlet />
      </SortContext.Provider>
    </div>
  );
};

export default ProductDIsplaySmall;
