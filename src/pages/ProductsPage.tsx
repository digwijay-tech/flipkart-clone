import { useEffect, useState } from "react";
import ProductDisplayLarge from "../component/ProductDisplayLarge/ProductDisplayLarge"
import ProductDIsplaySmall from "../component/SmallHome/ProductDisplayPageSmall/ProductDIsplaySmall"
import { useFetch } from "../Hooks/useFetch";
import { useParams, useSearchParams } from "react-router-dom";
import { SortContext } from "../component/context/SortContext";


const ProductsPage = () => {
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
  console.log(typedPath);
  
  return (
    <div>
      <SortContext.Provider
        value={{ sort, setSort, searchParam, setSearchParam ,filterCategory,typedPath,title,products}}
      >
      <ProductDIsplaySmall/>
      <ProductDisplayLarge/>
      </SortContext.Provider>
    </div>
    
  )
}

export default ProductsPage